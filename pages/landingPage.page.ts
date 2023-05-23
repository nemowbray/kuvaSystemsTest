import { Locator, Page } from "@playwright/test";

export default class landingPage {
readonly page: Page;
readonly signInLink: Locator;
readonly userAccountLink: Locator;
readonly logoutLink: Locator;

constructor(page:Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', {name: 'Sign in', exact: true});
    this.userAccountLink = page.getByRole('link', { name: 'Tester testing' });
    this.logoutLink = page.getByRole('link', { name: 'Sign out' });
}
}