import { test } from '@playwright/test';
import { LoginPage } from './page-objects/login.page';
import { getCredentials } from './helpers/credentials';

test.describe('Authentication', () => {
  test('should log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await test.step('Navigate to login page', async () => {
      await loginPage.goto();
    });

    await test.step('Enter credentials and login', async () => {
      await loginPage.login(credentials.email, credentials.password);
    });

    await test.step('Verify user is logged in', async () => {
      await loginPage.expectLoggedIn();
    });
  });
});