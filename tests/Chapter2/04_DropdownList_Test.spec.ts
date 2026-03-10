//Import playwright module
import { test, expect } from '@playwright/test'
//Write a test
test('Handling Dropdown list in playwright', async ({ page }) => {
  //test.setTimeout(60000);
  //Go to URL
  await page.goto('https://www.facebook.com/');
  await page.locator('text=Create new account').click();
  //await page.getByRole('button',{name : 'Create new account'}).click();

  //Select dropdown using value
  //await page.getByLabel('Month').selectOption('3');

  //Select dropdown using visible text
  await page.getByLabel('Month').selectOption('October');
  
  //Validate all the options
  await expect (page.locator('#month > option')).toHaveText(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
});