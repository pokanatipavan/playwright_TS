

// playwright gives default html reports and default folder path is "playwright-report"
// we change the when we required report and also path can be changed in config.ts file
//in config need below changes (there are 3 optons always, on-failure and never)
// reporter: [['html',{open:'always', 'outputFolder':'foldername'}]]
//if we give our own report path weneed to open manually 
//cmmand ; npx playwright show-report "foldername

// there is another type of report "list" and its not give any reoprt its gives the status in command prompt
//in config  file=>reporter: list
// and other deafult reporters: 1.line and 2.dot
// for j unit reports its same like html
//reporter:Junit, {outputFolder:"folderpath.xml"} for json reporter:Json, {outputFolder:"folderpath.json"}

import {test, Locator, expect} from "@playwright/test"

//ommon for all json test data
// for json we need to import file 
// and we nedd to add one tsconfig.json file 
// and we nedd to doand nodes command: npm i --save-dev @types/node 
import fs from 'fs';

//Reading data from json
const jsonPath = "test data/login.json";
const loginData: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));


test.describe("search funcion", async()=>{

    for(const{email,password, status} of loginData )
        {

    test(`search functionality for ${email}, ${password} `, async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/login");

await  page.waitForTimeout(2000);
   
let  emailbox= page.locator("//input[@id='Email']");
await emailbox.fill(email);
await  page.waitForTimeout(1000);

const pass = page.locator("//input[@id='Password']");
await pass.fill(password);
await  page.waitForTimeout(1000);

const login = page.locator("//input[@type='submit']").nth(1);
await login.click();
await  page.waitForTimeout(1000);

if (status.toLowerCase()==="valid")
{
    const logoutlink = page.locator("//a[contains(text(),'Log out')]")
     expect(logoutlink).toBeVisible();
     await  page.waitForTimeout(1000);
}

else{
    const errormessage= page.locator("//span[contains(text(),'Login was unsuccessful.')]");
    expect(errormessage).toContainText("Login was unsuccessful.");
     await  page.waitForTimeout(1000);
     
     expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
     await  page.waitForTimeout(1000);
}



    });
}

})
