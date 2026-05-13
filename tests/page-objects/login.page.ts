import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput;
  readonly passwordInput;
  readonly loginButton;
  readonly welcomeMessage;
  readonly userMenuButton;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('Enter Business Email');
    this.passwordInput = page.getByPlaceholder('Enter Password');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.welcomeMessage = page.locator('text=/welcome/i');
    this.userMenuButton = page.getByRole('button', { name: 'User account menu' });
  }

  async goto() {
    await this.page.goto('https://send-uat.mailzzy.com/');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoggedIn() {
    await this.page.waitForURL('**/dashboard');
  }

  async openUserMenu() {
    await expect(this.userMenuButton).toBeVisible({ timeout: 30000 });
    await this.userMenuButton.click();
  }
}