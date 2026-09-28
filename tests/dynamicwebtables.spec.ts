import{test,Locator, expect} from '@playwright/test';

test ("dynamic table", async({page})=>{

    page.goto("https://practice.expandtesting.com/dynamic-table");

      await  page.waitForTimeout(5000);

       const rows:Locator[] =  await page.locator(".table tbody tr").all();

                console.log("count of rows:: ", rows.length);
   

    //for all td values
     
      let cpuvalue:string='';
       for (const row of rows)
       { 
         
         const coulmns:string= await   row.locator("td").nth(0).innerText();

         if (coulmns==="Chrome")
         {

               cpuvalue=   await row.locator("td",{hasText:"%"}).innerText();
                console.log(cpuvalue);
                break;
                   
         }
  }
         const yellowbox:string=  await page.locator("#chrome-cpu").nth(0).innerText();
    console.log ("yellowbox::", yellowbox)
         if (yellowbox.includes(cpuvalue))
         {
                console.log("both values matching:: ",cpuvalue)
         }
         
         else
         {
            console.log("both values are not matching:: ",cpuvalue)
         }

   expect(yellowbox).toContain(cpuvalue);

     
      








})
