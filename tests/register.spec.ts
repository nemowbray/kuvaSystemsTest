import landingPage from '@pages/landingPage.page';
import loginOrRegisterUser from '@pages/login.page';
import registerUser from '@pages/register.page';
import { test, expect, Page } from '@playwright/test';


let page: Page;
let homePage: landingPage;
let register: registerUser;
let login: loginOrRegisterUser;
test('User can create an account', async ({ browser }) => {
  // Note: There is no way to clean up data so this test can only be run once consecutively, before running change email address
  page = await browser.newPage();
  await page.goto('/');
  await page.waitForLoadState();
  homePage = new landingPage(page);
  await homePage.signInLink.click();
  await expect(page).toHaveURL(/.*my-account/);
  login = new loginOrRegisterUser(page);
  await login.createAccountEmailAddress.fill('nemowbray+4@gmail.com');
  await login.createAccountButton.click();
  register = new registerUser(page);
  await register.submitRegistrationForm('mypassword');
  await expect(page).toHaveURL(/.*my-account/);
  await expect(homePage.userAccountLink).toBeVisible();
  });
  
  test('User is given an error message for invalid email address', async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/');
    await page.waitForLoadState();
    homePage = new landingPage(page);
    await homePage.signInLink.click();
    await expect(page).toHaveURL(/.*my-account/);
    login = new loginOrRegisterUser(page);
    await login.createAccountEmailAddress.fill('myemail');
    await login.createAccountButton.click();
    await expect(login.invalidEmailAddress).toContainText('Invalid email address.');
  });
  
  test.fixme('User is given visual queue strength of password', async ({ browser }) => {
    //Doesnt Exist 
  });

  test('User is given an error message for email already in use', async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/');
    await page.waitForLoadState();
    homePage = new landingPage(page);
    await homePage.signInLink.click();
    await expect(page).toHaveURL(/.*my-account/);
    login = new loginOrRegisterUser(page);
    await login.createAccountEmailAddress.fill('nemowbray+2@gmail.com');
    await login.createAccountButton.click();
    await expect(login.invalidEmailAddress).toContainText('An account using this email address has already been registered. Please enter a valid password or request a new one.');
  });