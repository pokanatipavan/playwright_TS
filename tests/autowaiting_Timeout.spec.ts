import { test, expect } from '@playwright/test';

test('Autowaiting and forcing', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Assertions - Auto wait works
  //playwright default time of assertios  is 5seconds
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  await expect(page.locator('text=Welcome to our store')).toBeVisible();

  // Actions - Auto wait works
  // Force option ensures the action executes even if Playwright thinks it's not actionable
  // Playwright default time of actions is 30seconds
  await page.locator('#small-searchterms').fill('Laptop', { force: true });
  await page.locator('.button-1.search-box-button').click({ force: true });


  // we can change default time (with in test or globally) in config file

  //test timeout entire project (Actions)
  // in congig file ->define config->and add timeout:60000  it will effect all tests in project


  // for particalr test actions
  // above URL we need to write "test.setTimeout("5000")" it works for actions

  //test timeout entire project for expect 
  // in congig file ->define config->and add "expect: {timeout:60000}"it will effect all tests in project

   // for particalr test assertions
  //await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});


  // we can use test.slow() it triples the default time
});
