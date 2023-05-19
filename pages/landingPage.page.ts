import { Locator, Page } from "@playwright/test";

export default class landingPage {
readonly page: Page;
readonly registerLink: Locator;
readonly loginLink: Locator;
readonly myAccountLink: Locator;
readonly logoutLink: Locator;

constructor(page:Page) {
    this.page = page;
    this.registerLink = page.getByText('Register', {exact: true});
    this.loginLink = page.getByText('Log in', {exact: true});
    this.myAccountLink = page.getByText('My account', {exact: true});
    this.logoutLink = page.getByText('Log out', {exact: true});
}
}