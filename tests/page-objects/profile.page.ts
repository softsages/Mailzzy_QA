import { expect, Page } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly myProfileMenuItem;
  readonly profileHeading;

  constructor(page: Page) {
    this.page = page;
    this.myProfileMenuItem = page.getByRole('menuitem', { name: 'My Profile' });
    this.profileHeading = page.getByRole('heading', { name: /My Profile/i });
  }

  // async openMyProfile() {
  //   await expect(this.myProfileMenuItem).toBeVisible({ timeout: 30000 });
  //   await this.myProfileMenuItem.click();
  // }

  
}
