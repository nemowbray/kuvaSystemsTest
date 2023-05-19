import { Locator, Page } from "@playwright/test";

export default class registerUser {
readonly page: Page;
readonly gender: Locator;
readonly firstName: Locator;
readonly lastName: Locator;
readonly dateOfBirthDate: Locator;
readonly dateOfBirthMonth: Locator;
readonly dateOfBirthYear: Locator;
readonly emailAddress: Locator;
readonly companyName: Locator;
readonly receiveNewsletter: Locator;
readonly password: Locator;
readonly confirmPassword: Locator;
readonly registerButton: Locator;
readonly continueButton: Locator;

constructor(page:Page) {
    this.page = page;
    this.gender = page.getByLabel('Male');
    this.firstName = page.getByLabel('First name:', {exact: true});
    this.lastName = page.getByLabel('Last name:', {exact: true});
    this.dateOfBirthDate = page.locator('select[name="DateOfBirthDay"]');
    this.dateOfBirthMonth = page.locator('select[name="DateOfBirthMonth"]');
    this.dateOfBirthYear = page.locator('select[name="DateOfBirthYear"]');
    this.emailAddress = page.getByLabel('Email:', {exact: true});
    this.companyName = page.getByLabel('Company name:', {exact: true});
    this.receiveNewsletter = page.getByLabel('Newsletter:', {exact: true});
    this.password = page.getByLabel('Password:', { exact: true });
    this.confirmPassword = page.getByLabel('Confirm password:', {exact:true});
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.continueButton = page.getByRole('link', { name: 'Continue' })

}
}