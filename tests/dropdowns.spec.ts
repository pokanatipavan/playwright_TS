import {test, expect, Locator} from '@playwright/test';

//singe value select dropdowns
//selects tags for dropdowns
test ("select value dropdowns", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

     await page.waitForTimeout(5000);

     //select by value
   const dropdwon=  page.locator('#country');
     dropdwon.scrollIntoViewIfNeeded();
//        dropdwon.selectOption({value:'china'});
     
    
//      await page.waitForTimeout(2000);
//      await page.reload();
//          await page.waitForTimeout(3000);

//          //select by text
// await page.locator('#country').selectOption("India");
// await page.waitForTimeout(2000);
//  await page.reload();
//    await page.waitForTimeout(3000);


//          //select by label text
// await page.locator('#country').selectOption({label:"Germany"});
// await page.waitForTimeout(2000);
// // await page.reload();
//    await page.waitForTimeout(3000);


     //select by index
await page.locator('#country').selectOption({index:1});
await page.waitForTimeout(2000);


// count of the dropdown

    const dpcount = page.locator('#country option');
     await expect(dpcount).toHaveCount(10)

      const count = await dpcount.count();
      console.log("count is", expect(count).toBeGreaterThanOrEqual(10));

      //print all dropddown texts
   

       const dptext:string[] = await dpcount.allTextContents();

       console.log(dptext);

       // remove spaces 
       const dptext1:string[] = (await dpcount.allTextContents()).map(text=>text.trim());
       
     console.log(dptext1);

     expect(dptext1).toContain("Japan");


     //print all text in drpdown using for loop

     for ( const text of dptext)
     {
      console.log("by using for:", text)
     }
})


// muitivalue dropdwond
test ("select mutiple value dropdowns", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

     await page.waitForTimeout(5000);


     const dropdown=  page.locator('#colors');
   await   dropdown.scrollIntoViewIfNeeded();

// select by values
      // await  dropdown.selectOption(['Red', 'Green']);
// select by text

 //await dropdown.selectOption(['Blue']);
 await page.waitForTimeout(2000);

 //slect by label

  //await  dropdown.selectOption([{label:'White'}, {label:'Green'} ]);
 await page.waitForTimeout(2000);

 // select by index
 await  dropdown.selectOption([{index:0}, {index:1} ]);
await page.waitForTimeout(5000);


const dpcount = page.locator('#colors option');
     await expect(dpcount).toHaveCount(7)

      const count = await dpcount.count();
      console.log(count)
      expect(count).toBeGreaterThanOrEqual(7);


      //print all dropddown texts and patcular value
   

       const dptext:string[] = await dpcount.allTextContents();

       console.log(dptext);

       // remove spaces 
       const dptext1:string[] = (await dpcount.allTextContents()).map(text=>text.trim());
       
     console.log(dptext1);

     expect(dptext1).toContain("Green");


    // by for loop

    for (const text of dptext)
    {
      console.log("by using for loop",text)
    }
});


test.only ('read dropdown options', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate all <option> elements inside the dropdown
  const dropDownOptions: Locator = page.locator('#colors > option');

  // Get all text contents
  const optionsText: string[] = (await dropDownOptions.allTextContents())
    .map(text => text.trim()); // trim removes extra spaces

  // Original list
  const originalList: string[] = [...optionsText];

  // Sorted list
  const sortedList: string[] = [...optionsText].sort();

  console.log("Original list:", originalList);
  console.log("Sorted list:", sortedList);

  // Example assertion: check that "Red" is one of the options
  expect(originalList).toContain("Red");
});


// to find duplicates

test("Verify dropdown contains duplicates", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const dropDownOptions: Locator = page.locator('#colors > option');  // dropdown with duplicates
  const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());

  const seen = new Set<string>();
  const duplicates: string[] = [];

  for (const text of optionsText) {
    if (seen.has(text)) {
      duplicates.push(text);
    } else {
      seen.add(text);
    }
  }

  console.log("All options:", optionsText);
  console.log("Duplicates found:", duplicates);

  // Example assertion: ensure no duplicates
  expect(duplicates.length).toBe(0);
});
