import{test, Locator,expect,Page} from "@playwright/test"


test ("handle pupups", async({browser})=>{

  //approarch 1

  //  const context=  await  browser.newContext();

  //    const basepage =await context.newPage();

  //     await   basepage.goto("https://the-internet.herokuapp.com/basic_auth");

      //approarch 1: directly pass thecredentials by usimg url
      //syntex: https://username:password@the-internet.herokuapp.com/basic_auth
      //await   basepage.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

//expect(basepage.locator("//p[contains(text(),'Congratulations!')]")).toBeVisible (); 
    //basepage.waitForLoadState();
      // basepage.waitForTimeout(2000);
      
//approach 2 pass login credetials alowng with context
const context=  await  browser.newContext({httpCredentials:{username:'admin',password:'admin'}});

    const basepage =await context.newPage();

   await   basepage.goto("https://the-internet.herokuapp.com/basic_auth");

  await basepage.waitForLoadState();
  await basepage.waitForTimeout(2000);
await   expect(basepage.locator("//p[contains(text(),'Congratulations!')]")).toBeVisible ();
    await basepage.waitForTimeout(2000);
})