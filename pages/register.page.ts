import { Locator, Page } from "@playwright/test";

export default class registerUser {
readonly page: Page;
readonly title: Locator;
readonly firstName: Locator;
readonly lastName: Locator;
readonly dateOfBirthDate: Locator;
readonly dateOfBirthMonth: Locator;
readonly dateOfBirthYear: Locator;
readonly emailAddress: Locator;
readonly password: Locator;
readonly registerButton: Locator;
readonly newsletterCheckbox: Locator;
readonly specialOffersCheckbox: Locator;

constructor(page:Page) {
    this.page = page;
    this.title = page.getByLabel('Mr.');
    this.firstName = page.getByLabel('First name *');
    this.lastName = page.getByLabel('Last name *');
    this.emailAddress = page.getByLabel('Email *');
    this.password = page.getByLabel('Password *');
    this.dateOfBirthDate = page.locator('select[name="days"]');
    this.dateOfBirthMonth = page.locator('select[name="months"]');
    this.dateOfBirthYear = page.locator('select[name="years"]');
    this.newsletterCheckbox = page.getByLabel('Sign up for our newsletter!');
    this.specialOffersCheckbox = page.getByLabel('Receive special offers from our partners!');
    this.registerButton = page.getByRole('button', { name: 'Register' });
}
async submitRegistrationForm (pass: string) {
    await this.title.check();
    await this.firstName.fill('tester');
    await this.lastName.fill('testing');
    await this.password.fill(pass);
    await this.dateOfBirthDate.selectOption('17');
    await this.dateOfBirthMonth.selectOption('11');
    await this.dateOfBirthYear.selectOption('1980');
    await this.newsletterCheckbox.check();
    await this.specialOffersCheckbox.check();
    await this.registerButton.click();
}
}