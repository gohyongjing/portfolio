import { test, expect } from '@playwright/test';

test('has greeting', async({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByText("Hello")).toBeVisible();
});

test('has name', async({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('b')).toContainText('Yong Jing');
});
