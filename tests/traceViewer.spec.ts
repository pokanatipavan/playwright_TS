import { test, expect } from '@playwright/test';

test.only('tracing test', async ({page, context}) => {

    /* trace viewr can use on 3 ways
    1. global config.ts File
    2. through command for paertualr test
    3. in test by manually add  trace. Note: with manual approach playwright not give trace zip
       we need to use one command in termianl npx playwright show trace "zip file name.zip and it will open traceviwer" 
we can use url: trace.playwright.dev it will avaialble to open anywhere 
       */

  context.tracing.start({screenshots:true,snapshots:true});

  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

  context.tracing.stop({path:'trace.zip'});
  
});
