import {test, Locator, expect} from "@playwright/test"

// playwright doesnot support csv so we need to downlaod thirdparty file
//command: npm install csv-parse

import {parse} from 'csv-parse/sync';
import fs from 'fs';

// calling as array
type LoginData = {
  email: string;
  password: string;
  status: string;
};

// reading data from csv

const csvPath = "test data/login.csv";
const filecontent= fs.readFileSync(csvPath, "utf-8");
const records= parse(filecontent, {columns:true, skip_empty_lines:true}) as LoginData[];


test.describe("search funcion", ()=>{

    for(const data of records )
        {

    test(`search functionality for ${data.email}, ${data.password} `, async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/login");

await  page.waitForTimeout(2000);
   
let  emailbox= page.locator("//input[@id='Email']");
await emailbox.fill(data.email);
await  page.waitForTimeout(1000);

const pass = page.locator("//input[@id='Password']");
await pass.fill(data.password);
await  page.waitForTimeout(1000);

const login = page.locator("//input[@type='submit']").nth(1);
await login.click();
await  page.waitForTimeout(1000);

if (data.status.toLowerCase()==="valid")
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

