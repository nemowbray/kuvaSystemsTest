import { Locator, Page } from "@playwright/test";

export default class landingPage {
readonly page: Page;
readonly emailAddress: Locator;
readonly confirmResetButton: Locator;

constructor(page:Page) {
    this.page = page;
    this.emailAddress = page.getByLabel('Email address');
    this.confirmResetButton = page.getByRole('button', { name: 'Retrieve Password' })   
}
}