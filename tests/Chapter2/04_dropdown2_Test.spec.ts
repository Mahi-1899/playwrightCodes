import { test, expect } from '@playwright/test';

test('Handling Dropdown list in playwright', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo', { waitUntil: 'domcontentloaded' });

  // Select by value
  await page.locator('#select-demo').selectOption('Monday');
  await expect(page.locator('.selected-value')).toHaveText('Day selected :- Monday');

  // Select by label
  await page.locator('#select-demo').selectOption({ label: 'Friday' });
  await expect(page.locator('.selected-value')).toHaveText('Day selected :- Friday');
});