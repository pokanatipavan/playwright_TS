import {test,expect,Locator, Page} from "@playwright/test"


//creating function
async function selectdate(targetyear:string, targetmonth:string, targetdate:string, page:Page, isfuture:boolean)
{
 while(true)
   {
    // textContent() can sometimes return null if the element isn’t found or hasn’t rendered yet.
    //Using ?. prevents your script from throwing an error like “Cannot read property 'trim' of null”.

      let currentmonth=  (await page.locator(".ui-datepicker-month").textContent())?.trim();
      let currentyear=  (await page.locator(".ui-datepicker-year").textContent())?.trim();

       if (currentmonth===targetmonth && currentyear=== targetyear)
       {   
         break;  
       }
       

       if (isfuture===true)
       {
       //future date
       const nextmonth:Locator =  page.getByText("Next").nth(0);
         await  nextmonth.click();
       }
       else{
      //past date
       const prevmonth:Locator =  page.getByText("Prev").nth(0);
     await  prevmonth.click();
       }
       
      // await page.waitForTimeout(2000);
   
   }
   const selectdate =  await page.locator(".ui-datepicker-calendar td").all();


   for (let date of selectdate)
   {

      const datetext= await date.innerText();
    if (datetext === targetdate)
    {
        await date.click();
        //await page.waitForTimeout(2000);
         break;
    }
   }


  
}





// also called J query date pickers
test("date picker", async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");

   await  page.waitForTimeout(1000);

  const inputbox:Locator=  page.locator(".hasDatepicker").nth(0);
  inputbox.scrollIntoViewIfNeeded();
  expect(inputbox).toBeVisible();

      //click on input box
      await inputbox.click();

    await  page.waitForTimeout(2000);


   const requireddate ="15";
    const requiredmonth:string="July";
    const requiredyear:string="2026";

    await selectdate(requiredyear,requiredmonth,requireddate,page,false);
   const expectedate= "07/15/2026"
  await  expect(inputbox).toHaveValue(expectedate);
 await  page.waitForTimeout(2000);
})