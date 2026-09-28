import {test, Locator, expect} from "@playwright/test"

const loginTestData: string[][] = [
  ["laura.taylor1234@example.com", "test123", "valid"],
  ["invaliduser@example.com", "test321", "invalid"],
  ["validuser@example.com", "testxyz", "invalid"],
  ["", "", "invalid"],
];


test.describe("search funcion", async()=>{

    for(const[email,password, validity] of loginTestData )
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

if (validity.toLowerCase()==="valid")
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