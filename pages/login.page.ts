import { Locator, Page } from "@playwright/test";

export default class registerUser {
readonly page:Page;
readonly registerButton: Locator;
readonly emailAddress: Locator;
readonly password: Locator;
readonly rememberMeCheckbox: Locator;
readonly forgotPasswordLink: Locator;
readonly loginButton: Locator;

constructor(page:Page) {
    this.page = page;
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.emailAddress = page.getByLabel('Email:');
    this.password = page.getByLabel('Password:');
    this.rememberMeCheckbox = page.getByLabel('Remember me?');
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot password?' });
    this.loginButton = page.getByRole('button', { name: 'Log in' });
}
}