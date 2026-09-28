import {test,expect,Locator, Page} from "@playwright/test"

test("date picker", async({page})=>{

   await page.goto("https://www.booking.com");

   await page.waitForTimeout(3000);

       const popup =  page.locator("[aria-label='Dismiss sign-in info.']")

       //for signup pop up
       if ( await popup.isVisible())
       { 
         console.log("entered into if condition")
         await popup.click();
         await page.waitForTimeout(2000);
       }


 //click on selectdate input box
        const inputbox=  page.getByTestId("date-display-field-start");
        inputbox.scrollIntoViewIfNeeded();
        inputbox.click();

          console.log("click on input box")
         await page.waitForTimeout(2000);

while(true){


         //for checkin month
  const checinyear:string ="2026";
  const checinmonth:string ="December";

  const currentmonthyear= await page.locator("//h3[contains(@id,'bui-calendar-month')]").nth(0).innerText();
  //
 // console.log("currentmonthyear:::",currentmonthyear);

  const currentmonth = currentmonthyear.split(" ")[0];
  //console.log("currentmonth:::",currentmonth);

 const currentyear= currentmonthyear.split(" ")[1];
  //console.log("currentyear",currentyear);

 
 if (currentmonth===checinmonth && currentyear===checinyear)
 {
   break;
 }
 else
 {
   await page.locator("[aria-label='Next month']").click();
  await page.waitForTimeout(2000);
 }
}

const checinday ="26";
let dates =  page.locator('table.b8fcb0c66a tbody').nth(0);
let dates1= await dates.locator("[role='gridcell']").all();
//console.log("dates:::", dates.length)

let checkindateselected = false;
for (let date of dates1)
{
  const datetext= await date.innerText();
  
  if(datetext===checinday)
  {
   await  date.click();
   await page.waitForTimeout(3000);
    checkindateselected= true;
   break;

  }
     
}
 expect(checkindateselected).toBeTruthy();
await page.waitForTimeout(1000);

//checkout date
while(true){


         //for checkin month
  const checkoutyear:string ="2027";
  const checkoutmonth:string ="January";

  const checoutcurrentmonthyear= await page.locator("//h3[contains(@id,'bui-calendar-month')]").nth(1).innerText();
   console.log("check out currentmonthyear:::",checoutcurrentmonthyear);

  const checkoutcurrentmonth = checoutcurrentmonthyear.split(" ")[0];
  console.log("checkoutcurrentmonth:::",checkoutcurrentmonth);

 const checkoutcurrentyear= checoutcurrentmonthyear.split(" ")[1];
  console.log("checkoutcurrentyear",checkoutcurrentyear);

 
 if (checkoutcurrentmonth===checkoutmonth && checkoutcurrentyear===checkoutyear)
 {
  console.log("checkout month year text matched")
   break;
 }
 else
 {
   await page.locator("[aria-label='Next month']").click();

 }
}

const checkoutday ="29";
let checkdates =  page.locator('table.b8fcb0c66a tbody').nth(1);
let checkdates1= await checkdates.locator("[role='gridcell']").all();
//console.log("dates:::", dates.length)

let checkoutdateselected = false;
for (let checkoutdate of checkdates1)
{
  const checkoutdatetext= await checkoutdate.innerText();
  
  if(checkoutdatetext===checkoutday)
  {
   await  checkoutdate.click();
   await page.waitForTimeout(5000);
    checkoutdateselected= true;
   break;

  }
     
}
expect(checkindateselected).toBeTruthy();
await page.waitForTimeout(3000);
})




