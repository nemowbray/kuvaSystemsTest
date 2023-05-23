import { Locator, Page } from "@playwright/test";

export default class loginOrRegisterUser {
readonly page:Page;
readonly createAccountButton: Locator;
readonly createAccountEmailAddress: Locator;
readonly registeredEmailAddress: Locator;
readonly password: Locator;
readonly forgotPasswordLink: Locator;
readonly signInButton: Locator;
readonly invalidEmailAddress: Locator;
readonly invalidPassword: Locator;

constructor(page:Page) {
    this.page = page;
    this.createAccountButton = page.getByRole('button', { name: 'Create an account'});
    this.createAccountEmailAddress = page.locator('#email_create');
    this.registeredEmailAddress = page.locator('#email');
    this.password = page.getByLabel('Password');
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
    this.createAccountButton = page.getByRole('button', { name: 'Create an account'})
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.invalidEmailAddress = page.locator('#create_account_error');
    this.invalidPassword = page.locator('#center_column > div.alert.alert-danger');
}
}