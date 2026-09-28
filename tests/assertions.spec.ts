import { test, expect } from '@playwright/test';

test('Autowaiting and forcing', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

 // types of assertions:soft and hard assertions:

//soft assertions
//1. auto retrying assrtions  ex: expect(locator or page).tobe visible(); must and should use await and it allows timeout 
//2.non retrying assertions    ex: expect (value).tobe();  no need to use await  and no timeout

 
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  await expect(page.locator('text=Welcome to our store')).toBeVisible();//auto retry 

   const title=  await  page.title();

   expect( title.includes('Demo Web Shop')).toBeTruthy(); // non auto retry

  await page.locator('#small-searchterms').fill('Laptop');
  await page.locator('.button-1.search-box-button').click();

// we v=can use not also

await expect(page.locator('text=Welcome to our store')).not.toBeVisible();//auto retry 

   const pgtitle=  await  page.title();

   expect( title.includes('Demo Web Shop')).not.toBeTruthy(); // non auto retry


 
});
