import { test, expect } from '@playwright/test';

test('User Can login', async ({ page }) => {
  await page.goto('/');


});

test('User cannot login when using incorrect password', async ({ page }) => {
  await page.goto('/');


});

test('User can update password if they forgot their password', async ({ page }) => {
  await page.goto('/');


});

test('User can update email address', async ({ page }) => {
  await page.goto('/');


});

test('Validate API', async ({ page }) => {
  await page.goto('/');


});
