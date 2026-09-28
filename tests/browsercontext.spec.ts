import {test, expect, Page, chromium, firefox} from "@playwright/test";

// Browser ---> Context ----> pages
//Browser ---> chromium, firefox, webkit
//Contexts ---> we can have multiple contexts for multiple users/apps for the same browser
//              // provide a way to operate multiple independent browser sessions.
//page ---> New Tab, Window, Popup

test("Browser context demo", async ()=>{
    const browser=await chromium.launch(); // create browser
    const context=await browser.newContext();// create context
    const page=await context.newPage();// create page 1
    const page1=await context.newPage();// create page 2 we cane num of pages

    console.log("number of pages::", context.pages().length)// print number of pages
    await page.goto("https://testautomationpractice.blogspot.com/");
})
