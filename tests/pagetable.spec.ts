import {test, Locator, expect}  from "@playwright/test"

test("page nation table", async({page})=>{


    page.goto("https://datatables.net/");

    await page.waitForTimeout(2000);

    let haspages= true;
    let pageNumber = 1;

while(haspages)
{
  console.log(`\n===== Page ${pageNumber} =====`);
    const rows:Locator[]=  await page.locator("#myTable tbody tr").all();
   for (let row of rows)
   {
       const rowsdata = await row.innerText();
       console.log("row data::", rowsdata)
   }


  //click on arrow for second page
 const nextpage =  page.locator("[aria-label='Next'] ");
   const disabledtext = await nextpage.getAttribute('class');
  await page.waitForTimeout(2000);


  if(disabledtext?.includes("disabled"))
  {
     console.log("Reached last page at page number:", pageNumber);
    console.log("reached last page")
     haspages= false;
  }
  else
  {

     await nextpage.click();
      pageNumber++; // increment after each click
     await page.waitForTimeout(2000);


  }

}

    
})