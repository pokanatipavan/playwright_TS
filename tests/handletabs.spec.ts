import {chromium, expect, Locator,test,Page} from "@playwright/test"

test("handle tabs", async ()=>{

      const browser = await chromium.launch();

      const context = await browser.newContext();

      const basepage = await context.newPage();

   await   basepage.goto("https://testautomationpractice.blogspot.com/")

      await basepage.waitForTimeout(2000);

      //click on new tab button
      
   const childpagebutton=   basepage.locator("//button[text()='New Tab']");// open new window or tab or page
   //context.waitForEvent('page') // it has promise and (pending, fulfilled and rejected)
   //for child page we need to use one function (i.e wait for event)

   //now above 2 statemests go parallely
   //assigned childpage as array so we can switch to tabs by using index
   const [childpage]= await Promise.all([context.waitForEvent('page'),childpagebutton.click()]);


   // approarch 1 (using context , i we have multiple pages we use this ny using index)

    const totalpages = context.pages();
    console.log("page 1:", await totalpages[0].title());
    console.log("page 1:",await totalpages[1].title());


    // if we have only 2 pages we use this

    console.log("base page:",await basepage.title());
        console.log("child page:", await childpage.title());






})