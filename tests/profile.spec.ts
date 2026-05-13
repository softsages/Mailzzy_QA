import { test } from '@playwright/test';
import { LoginPage } from './page-objects/login.page';
import { ProfilePage } from './page-objects/profile.page';
import { getCredentials } from './helpers/credentials';

test.describe('User profile', () => {
  test('should open the profile page from the user menu', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);
    const credentials = getCredentials();

    await loginPage.goto();
    await loginPage.login(credentials.email, credentials.password);
    await loginPage.expectLoggedIn();
    await loginPage.openUserMenu();
    // await profilePage.openMyProfile();
   
    
  });
});