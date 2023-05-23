import resetPassword from '@pages/forgotPassword.page';
import landingPage from '@pages/landingPage.page';
import loginOrRegisterUser from '@pages/login.page';
import { test, expect, Page } from '@playwright/test';

let page: Page;
let homePage: landingPage;
let login: loginOrRegisterUser;
let forgotPassword: resetPassword;

test('User Can login', async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
  await page.waitForLoadState();
  homePage = new landingPage(page);
  await homePage.signInLink.click();
  await expect(page).toHaveURL(/.*my-account/);
  login = new loginOrRegisterUser(page);
  await login.registeredEmailAddress.fill('nemowbray+2@gmail.com');
  await login.password.fill('mypassword');
  await login.signInButton.click();
  await expect(page).toHaveURL(/.*my-account/);
  await expect(homePage.userAccountLink).toBeVisible();
});

test('User cannot login when using incorrect password', async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
  await page.waitForLoadState();
  homePage = new landingPage(page);
  await homePage.signInLink.click();
  await expect(page).toHaveURL(/.*my-account/);
  login = new loginOrRegisterUser(page);
  await login.registeredEmailAddress.fill('nemowbray+2@gmail.com');
  await login.password.fill('password');
  await login.signInButton.click()
  await expect(login.invalidPassword).toContainText('Authentication failed.');
  });

test.fixme('User can update password if they forgot their password', async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
  await page.waitForLoadState();
  homePage = new landingPage(page);
  await homePage.signInLink.click();
  await expect(page).toHaveURL(/.*my-account/);
  login = new loginOrRegisterUser(page);
  await login.forgotPasswordLink.click();
  await forgotPassword.emailAddress.fill('nemowbray+3@gmail.com');
  await forgotPassword.confirmResetButton.click();
  //TODO after defect is fixed
  //await expect(forgotPassword.confirmEmailSent).toHaveText('Email has been sent to the email address with instructions to reset your password');
});
