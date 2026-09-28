//alert(), confirm(), prompt() dialogs/JSalerts
//Reference: https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs

//1) By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
//2) However, you can register a dialog handler before the action that triggers the dialog to either
//   dialog.accept() or dialog.dismiss() it.


import{test,Locator, expect} from "@playwright/test"
/*
test ("handle dialog box", async({page})=>{
 await  page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    //default method
    page.on('dialog', (dialog)=>
    {
        //type of alert box
     console.log("type of dialog box", dialog.type());
   // expect(dialog.type()).toBe('box!');
    expect(dialog.type()).toContain('alert'); //type returnes on these 4 values "alert" "beforeunload""confirm""prompt"

    //text in the alert box
    console.log("message ",dialog.message());
    expect(dialog.message()).toContain('I am an alert box!');
     dialog.accept();


    })

 const alertbox:Locator= page.getByText("Simple Alert");
 alertbox.scrollIntoViewIfNeeded();

    await alertbox.click();
await page.waitForTimeout(2000);
//console.log("alertbox")

// click on radio button
  await page.getByLabel("Male").nth(0).check();
  await page.waitForTimeout(2000);
})

*/
//confirmation dialog accept or cancel
/*
test ("handle confirmation dialog", async({page})=>{
 await  page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    //default method
    page.on('dialog', (dialog)=>
    {
        //type of alert box
     console.log("type of dialog box", dialog.type());
   // expect(dialog.type()).toBe('box!');
    expect(dialog.type()).toContain('confirm'); //type returnes on these 4 values "alert" "beforeunload""confirm""prompt"

    //text in the alert box
    console.log("message ",dialog.message());
    expect(dialog.message()).toContain('Press a button!');
     dialog.accept();
//dialog.dismss();

    })

 const confirmationalert:Locator= page.getByText("Confirmation Alert");
 confirmationalert.scrollIntoViewIfNeeded();

    await confirmationalert.click();
await page.waitForTimeout(2000);
   const alertmsg = page.locator("//p[@id='demo']");
       expect(await alertmsg.innerText()).toContain("You pressed OK!");

// click on radio button
  await page.getByLabel("Male").nth(0).check();
  await page.waitForTimeout(2000);
})
*/

test ("handle prompt dialog", async({page})=>{
 await  page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    //default method
    page.on('dialog', (dialog)=>
    {
        //type of alert box
     console.log("type of dialog box", dialog.type());
   // expect(dialog.type()).toBe('box!');
    expect(dialog.type()).toContain('prompt'); //type returnes on these 4 values "alert" "beforeunload""confirm""prompt"

    //text in the alert box
    console.log("message ",dialog.message());
    expect( dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain("Harry Potter")
     dialog.accept('star');
//dialog.dismss();

    })

 const confirmationalert:Locator= page.getByText("Prompt Alert");
 confirmationalert.scrollIntoViewIfNeeded();

    await confirmationalert.click();
await page.waitForTimeout(2000);
   const alertmsg = page.locator("//p[@id='demo']");
       expect(await alertmsg.innerText()).toContain("How are you today?");

// click on radio button
  await page.getByLabel("Male").nth(0).check();
  await page.waitForTimeout(2000);
})