

import { test, expect } from '@playwright/test';
import fs from 'fs';
import * as XLSX from 'xlsx';

//Loaded excel file
//file--> workbook---sheets--rows & columns

const excelPath="test data/login.xlsx";
const workbook=XLSX.readFile(excelPath);
const sheetNames=workbook.SheetNames[0];
const worksheet=workbook.Sheets[sheetNames];

//convert sheet into json

const loginData:any=XLSX.utils.sheet_to_json(worksheet);

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
