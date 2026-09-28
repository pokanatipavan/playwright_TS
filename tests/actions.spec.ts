import {test, expect, Locator} from '@playwright/test';

test ("input box", async ({page})=>{


     await page.goto("https://testautomationpractice.blogspot.com/");

     await page.waitForTimeout(5000);

     const nametextbox = page.getByPlaceholder("Enter Name");

     if(await nametextbox.isEnabled())
     {
              nametextbox.fill("pavan");
     }

    await expect(nametextbox).toBeEnabled();

    await page.waitForTimeout(1000);


    // for radio button
      const genderradio:Locator =  page.getByRole("radio", {name: "Male"});
      await genderradio.nth(0).scrollIntoViewIfNeeded();

      if (await genderradio.nth(0).isVisible())
        {
           await genderradio.nth(0).click();
           await page.waitForTimeout(1000);
        }

           else  if (await genderradio.isChecked())
           {
            console.log("selected gender")
           }
    
           await page.waitForTimeout(2000);
   

})


  test.only ("select check boxes", async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");

     await page.waitForTimeout(5000);
   

     const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const  checkboxes:Locator[]=  days.map(index => page.getByLabel(index));

    expect(checkboxes.length).toBe(7)

    for (const checkbox of checkboxes)
    { 
        await checkbox.check();
        await expect(checkbox).toBeChecked();


    }

await page.waitForTimeout(5000);
//for singel day
const requiredday= "Friday"

 for  (const label of days)
 {
       if (label.toLowerCase()===requiredday.toLowerCase())
       {
          await page.getByLabel(label).uncheck();

await page.waitForTimeout(5000);
       }
 }
 

 // for multiple check boxes

  const multiple:number[]= [1,2,3];

  for (const numbers of multiple)
  {
        await checkboxes[numbers].uncheck();
        await expect(checkboxes[numbers]).not.toBeChecked();
        await page.waitForTimeout(1000);
  }



})
