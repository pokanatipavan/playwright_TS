import {test, Locator, expect} from "@playwright/test"

const searchitems:string []= ['laptop', 'Gift card', 'smartphone', 'monitor'];


//for mutiple data we need to use for of loop or for each funcyion

/*
//using for of loop
for (const items of searchitems)
{
test(`search functionality ${items}`, async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/");

await  page.waitForTimeout(2000);

const searchbox=page.locator("//input[@id='small-searchterms']");
await searchbox.fill(items);

await  page.waitForTimeout(1000);
await searchbox.press("Enter");
await  page.waitForTimeout(1000);
 const searchboxtext =  page.locator("h2 a").nth(0);
 expect.soft(searchboxtext).toContainText(items, {ignoreCase:true})
await  page.waitForTimeout(1000);
})
}
*/


/*

// 2nd type using for each function and it will  work for singe dimension array
searchitems.forEach((item)=>{

    test(`search functionality ${item}`, async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/");

await  page.waitForTimeout(2000);

const searchbox=page.locator("//input[@id='small-searchterms']");
await searchbox.fill(item);

await  page.waitForTimeout(1000);
await searchbox.press("Enter");
await  page.waitForTimeout(1000);
 const searchboxtext =  page.locator("h2 a").nth(0);
 expect.soft(searchboxtext).toContainText(item, {ignoreCase:true})
await  page.waitForTimeout(1000);
})
    
});
*/


// fully parameterization

test.describe("search funcion", async()=>{

searchitems.forEach((item)=>{

    test(`search functionality ${item}`, async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/");

await  page.waitForTimeout(2000);

const searchbox=page.locator("//input[@id='small-searchterms']");
await searchbox.fill(item);

await  page.waitForTimeout(1000);
await searchbox.press("Enter");
await  page.waitForTimeout(1000);
 const searchboxtext =  page.locator("h2 a").nth(0);
 expect.soft(searchboxtext).toContainText(item, {ignoreCase:true})
await  page.waitForTimeout(1000);
})
    
});

})
