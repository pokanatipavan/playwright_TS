import { test, expect, Locator } from '@playwright/test';

test("placeholder", async({page})=>{

  await page.goto("https://www.autosahay.com/");
   await page.waitForTimeout(3000);

 
   //tag with any other attribute   tag[attribute=value]   or   [attribute=value]
  // enter value in search box
   await page.locator('[placeholder="Area, landmark, or parking name"]').fill("Hyderabad");
   await page.waitForTimeout(3000);

   // click on button
    const button : Locator=  page.locator(".btn-primary");

         button.nth(1).click();

     await page.waitForTimeout(3000);
  
})