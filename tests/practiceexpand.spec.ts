import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.locator('b').filter({ hasText: 'practice' }).click();
  await page.locator('b').filter({ hasText: 'practice' }).dblclick();
  await page.locator('body').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).click();
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).click();
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).dblclick();
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).click();
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).click();
  await page.getByText('Password: SuperSecretPassword!', { exact: true }).click();
  await page.getByText('Password: SuperSecretPassword!', { exact: true }).click();
  await page.getByText('Password: SuperSecretPassword!', { exact: true }).click();
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).dblclick();
  await page.locator('body').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Secure Area page for' }).click();
  await expect(page.locator('h1')).toContainText('Secure Area page for Automation Testing Practice');
  await expect(page.getByRole('link', { name: 'Buy us a coffee' })).toBeVisible();
});