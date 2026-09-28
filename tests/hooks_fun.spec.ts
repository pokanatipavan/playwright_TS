import { test, expect,Page} from '@playwright/test';

let page:Page;
test.beforeAll("open browser", async ({browser})=>{

    page =await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");

   await page.waitForTimeout(2000);
  const logotext= page.locator("//a[contains(text(),'PRODUCT STORE')]");
 await  expect(logotext).toContainText("PRODUCT STORE");
 
   
})

test.afterAll("close browser", async ()=>{

    await page.close();
 
})


test.beforeEach("login to the website", async ()=>{

   await page.click("//a[contains(text(),'Log in')]")
     await page.waitForTimeout(2000); 

   await  page.locator("//input[@id='loginusername']").fill("pavano1");
   await  page.locator("//input[@id='loginpassword']").fill("test@123");
   await  page.locator("//button[contains(text(),'Log in')]").click();
     await page.waitForTimeout(2000);


})


test.afterEach("logout to the website", async ()=>{

   await page.click("//a[contains(text(),'Log out')]")
       await page.waitForTimeout(2000);


})


test ("homepage",async()=>{


    const list =    page.locator("//div[@id='tbodyid']/div");

       const Count=await list.count();
    //expect(Count).toEqual(9);
   await expect(list).toHaveCount(9);

})


test ("add to cart ",async()=>{


    const firstitem =    page.locator("//div[@id='tbodyid']/div").nth(0);

       await page.waitForTimeout(2000);
      await  firstitem.scrollIntoViewIfNeeded();
         await  firstitem.click();

          await page.waitForTimeout(2000);

     const addtocart=  page.locator("//a[contains(text(),'Add to cart')]");

     page.on('dialog', async (dialog)=>{
     await  dialog.accept();

     })

    await  addtocart.click();
       await page.waitForTimeout(2000);




})