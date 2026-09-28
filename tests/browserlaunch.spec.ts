import { test, expect, Locator } from '@playwright/test';



//  total 7 builtin locatores in Playwright

//1.get by role
test('has title', async ({ page }) => {
// click on account by using getbyrole
// to locate by explicit and implicit accessibility attributes.
//Role locators include buttons, checkboxes, headings, links, lists, tables, and many more and follow W3C specifications
//  for ARIA role, ARIA attributes and accessible name. Note that many html elements like <button> have an implicitly defined role that is recognized by the role locator.
  
await page.goto("https://www.autosahay.com/");
   await page.waitForTimeout(3000);

  let title:string = await page.title();

  console.log("page title contains", title)

    //expect(title).toContain('Autosahay')
    await expect(page).toHaveTitle("AutoSahay — Find & Book Parking")

   const findslots =  page.getByRole('button', {name:'Find Slots'});

   const count = await findslots.count();
   console.log("total find slots :", count)


   // click on findslots
    await findslots.click();

    

});

// 2.getby label loactor
test('filling form', async({page})=>{
 // only  used fr only label tags 

  await page.goto("https://palleturiputharekulu.com/login/");
   await page.waitForTimeout(9000);

     //page.getByLabel("/Username\s*or\s*email\s*address\s*/").fill("pavan");

})


//3. get bt alttext
test("has logo", async({page})=>{

  await page.goto("https://palleturiputharekulu.com/");
   await page.waitForTimeout(9000);

   //to locate an element, usually image, by its text alternative.
// sample:  <img alt="playwright logo" src="/img/playwright-logo.svg" width="100" />

   const logo =page.getByAltText("Palleturi Putharekulu");

     const logocount = await logo.count();
     console.log("logo count :", logocount);
    await expect(logo.first()).toBeVisible();


})

//4. getbytext
test("getbytext", async ({page})=>{

  //Find an element by the text it contains. You can match by a substring, 
  // exact string, or a regular expression when using page.getByText().
  // use for non interractive 
  // <p>text</p>


  await page.goto("https://palleturiputharekulu.com/");
   await page.waitForTimeout(5000);

   const text:Locator =page.getByText("Best Sellers");


      await expect(text.first()).toBeVisible();


})

//5 get by placeholders
//locate input which have placeholder 
test("placeholder", async({page})=>{

  await page.goto("https://www.autosahay.com/");
   await page.waitForTimeout(3000);

   const searchbox =  page.getByPlaceholder("Area, landmark, or parking name");
     await searchbox.fill("Pavan@123");



  
})

// 6 get by title
// html ex: <span title='Issues count'>25 issues</span>
//locate: await expect(page.getByTitle('Issues count')).toHaveText('25 issues');


// 7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

// html ex: <button data-testid="directions">Itinéraire</button>
//locate: await page.getByTestId('directions').click();