const http = require('http');
const { parse } = require('url');
const { spawn } = require('child_process');
const { readFileSync } = require('fs');

let config = {
  port: 3999,
  playwrightProject: 'chromium',
  playwrightReporter: 'list',
  playwrightTimeout: 60000,
  defaultTestPath: 'tests/example.spec.ts',
};

try {
  const configText = readFileSync('./mcp-server.config.json', 'utf8');
  config = Object.assign(config, JSON.parse(configText));
} catch (error) {
  console.warn('Using default MCP server configuration.');
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function runPlaywright({ project, testPath, reporter, timeout }) {
  return new Promise((resolve, reject) => {
    const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const args = ['playwright', 'test', '--project', project, '--reporter', reporter, '--timeout', String(timeout)];

    if (testPath) {
      args.push(testPath);
    }

    const proc = spawn(command, args, {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: false,
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', chunk => {
      stdout += chunk.toString();
    });

    proc.stderr.on('data', chunk => {
      stderr += chunk.toString();
    });

    proc.on('error', reject);
    proc.on('close', code => {
      if (code === 0) {
        resolve({ code, stdout, stderr });
      } else {
        reject({ code, stdout, stderr });
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/health') {
    return sendJson(res, 200, { status: 'ok', port: config.port });
  }

  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    return sendJson(res, 200, {
      message: 'Playwright MCP server is running.',
      endpoints: {
        health: '/health',
        run: { method: 'POST', path: '/run' },
      },
    });
  }

  if (req.method === 'POST' && parsedUrl.pathname === '/run') {
    try {
      const body = await parseRequestBody(req);
      const project = body.project || config.playwrightProject;
      const testPath = body.testPath || config.defaultTestPath;
      const reporter = body.reporter || config.playwrightReporter;
      const timeout = body.timeout || config.playwrightTimeout;

      const result = await runPlaywright({ project, testPath, reporter, timeout });
      return sendJson(res, 200, {
        status: 'ok',
        project,
        testPath,
        reporter,
        timeout,
        stdout: result.stdout,
        stderr: result.stderr,
      });
    } catch (error) {
      if (error && error.stdout !== undefined) {
        return sendJson(res, 500, {
          status: 'failed',
          message: 'Playwright execution failed',
          code: error.code,
          stdout: error.stdout,
          stderr: error.stderr,
        });
      }
      return sendJson(res, 400, { status: 'error', message: error.message || String(error) });
    }
  }

  sendJson(res, 404, { status: 'error', message: 'Endpoint not found' });
});

const mode = process.argv[2];

if (mode === 'run') {
  runPlaywright({
    project: config.playwrightProject,
    testPath: config.defaultTestPath,
    reporter: config.playwrightReporter,
    timeout: config.playwrightTimeout,
  })
    .then(result => {
      process.stdout.write(result.stdout);
      process.stderr.write(result.stderr);
      process.exit(0);
    })
    .catch(error => {
      if (error && error.stderr) {
        process.stdout.write(error.stdout || '');
        process.stderr.write(error.stderr || '');
      } else {
        console.error(error);
      }
      process.exit(error && error.code ? error.code : 1);
    });
} else {
  server.listen(config.port, () => {
    console.log(`MCP server listening on http://localhost:${config.port}`);
    console.log('Use POST /run to execute Playwright tests.');
  });
}
