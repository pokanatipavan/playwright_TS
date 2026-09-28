import{test, Locator,expect,Page} from "@playwright/test"


test ("handle pupups", async({browser})=>{

   const context=  await  browser.newContext();

     const basepage =await context.newPage();

      await   basepage.goto("https://testautomationpractice.blogspot.com/")

      await basepage.waitForTimeout(2000);

      // we need to use pageevent for popups
      const popup =   basepage.locator("//button[text()='Popup Windows']");

     // basepage.waitForEvent('popup') // used for pagepopups

    await  Promise.all([basepage.waitForEvent('popup'),popup.click()]);
await basepage.waitForTimeout(2000);

    const allpopups=      context.pages();

 console.log("urls of widnow1",  allpopups[1].url());
 console.log("urls of widnow2", allpopups[2].url());

for ( let popupwindow of allpopups)
{
     const title =await  popupwindow.title();
console.log("eneter in for loop", title);
     if ( title.includes('Playwright'))
     {
        console.log("eneter in for if con");
        await  popupwindow.locator("//a[text()='Get started']").click();
            await basepage.waitForTimeout(5000);
          await  popupwindow.close();
     }
      else if  (title.includes("Selenium"))
       {
       await  popupwindow.locator("//div[@id='main_navbar']/ul/li").nth(1).click();
         await basepage.waitForTimeout(2000);
         await popupwindow.close();


       }
}
  await basepage.waitForTimeout(5000);
  
})