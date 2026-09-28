import {test, expect, Locator} from '@playwright/test';


test ("dynamic dropdowns",  async ({page})=>{
  
    await page.goto("https://www.flipkart.com/");

    await page.waitForTimeout(9000);

    const inputbox:Locator= page.getByRole( 'textbox', {name:"Search for Products, Brands and More"})
     inputbox.fill("phone");
    await page.waitForTimeout(7000);

    console.log("suggestion", await inputbox.allTextContents());

       const suggestions =  page.locator("ul >li")
               
    console.log("suggestions :", await suggestions.count());
      console.log("suggestions :", await suggestions.allTextContents());
     console.log("suggestions :", await suggestions.nth(1).innerText());
     
const count:number =await suggestions.count()
        await page.waitForTimeout(1000);

 for (let i=0; i<count;  i++)
{
   // await page.waitForTimeout(1000); 
       console.log("suggestions by using for loop :", await suggestions.nth(i).innerText());  
       
       
    
}
})