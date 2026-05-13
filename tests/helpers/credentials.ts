import fs from 'fs';
import path from 'path';

export type UserCredentials = {
  email: string;
  password: string;
  displayName?: string;
};

const LOCAL_CREDENTIALS_FILE = path.resolve(__dirname, '../data/credentials.local.json');

function loadCredentialsFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

export function getCredentials(user = 'admin'): UserCredentials {
  if (!fs.existsSync(LOCAL_CREDENTIALS_FILE)) {
    throw new Error(
      `Missing local credentials file at ${LOCAL_CREDENTIALS_FILE}. Copy tests/data/credentials.example.json to tests/data/credentials.local.json and add real login values.`
    );
  }

  const data = loadCredentialsFile(LOCAL_CREDENTIALS_FILE);

  if (!data?.users?.[user]) {
    throw new Error(`Credentials for user '${user}' not found in ${LOCAL_CREDENTIALS_FILE}`);
  }

  return data.users[user];
}
