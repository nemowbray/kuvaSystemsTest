import { Locator, Page } from "@playwright/test";

export default class landingPage {
readonly page: Page;
readonly emailAddress: Locator;
readonly recoverButton: Locator;

constructor(page:Page) {
    this.page = page;
    this.emailAddress = page.getByLabel('Your email address:');
    this.recoverButton = page.getByRole('button', { name: 'Recover' })   
}
}