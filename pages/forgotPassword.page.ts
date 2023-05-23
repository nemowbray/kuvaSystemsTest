import { Locator, Page } from "@playwright/test";

export default class resetPassword {
readonly page: Page;
readonly emailAddress: Locator;
readonly confirmResetButton: Locator;
readonly confirmEmailSent: Locator;

constructor(page:Page) {
    this.page = page;
    this.emailAddress = page.getByLabel('Email address');
    this.confirmResetButton = page.getByRole('button', { name: 'Retrieve Password' });   
    this.confirmEmailSent = page.locator('#center_column');// Fix locator when defect is fixed
}
}