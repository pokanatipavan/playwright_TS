import{test,expect, Locator} from '@playwright/test';



test ("static tables ", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

     await page.waitForTimeout(2000);

   await expect(page).toHaveTitle("Automation Testing Practice");

   //move to static table
      const statictabletext : Locator=  page.getByText("Static Web Table");
      statictabletext.scrollIntoViewIfNeeded();
       await page.waitForTimeout(2000);
      await expect(statictabletext).toHaveText("Static Web Table");

// for titles in page
  
//   const alltitles:Locator=  page.locator(".title");
//       const count:number = await alltitles.count();
//       console.log ("total titles: ", count);
//     expect(alltitles).toHaveCount(17);
       
//      for (let i=0; i<count; i++)
//      {
//           const text:string= await  alltitles.nth(i).innerText();
//           console.log("all titles: ", text);

//      }

     // table
    const statictable:Locator=   page.locator("[name='BookTable'] tbody");
     expect(statictable).toBeVisible();
     
     //count the rows in table
     const statictablerows:Locator=  statictable.locator("tr");
//approarch count 1
     await   expect(statictablerows).toHaveCount(7);

//approarch cunt 2
   const  rowcount:number = await statictablerows.count();
      expect(rowcount).toBe(7);

// for colums numners
       const column:Locator=   statictablerows.locator("th")
       await expect(column).toHaveCount(4);
       console.log("header ", await column.allInnerTexts());


      console.log("header text: ", await statictablerows.nth(0).innerText());
       
      //verify row 1 data
      const firstrowcells:Locator = statictablerows.nth(1).locator("td");
      const firstrow:string[]= await  firstrowcells.allInnerTexts();
      
      console.log("first row dat: ",firstrow);
     expect(firstrowcells).toHaveText(['Learn Selenium', 'Amit', 'Selenium', '300']);

     for (let rowrtext of firstrow)
     {
        console.log ("forloop: ", rowrtext)
     }


     // for all data in table
     const alldata:Locator []=   await statictablerows.all();

     for (let allrow of alldata)
     {
        const alldata:string[] =   await allrow.locator("td").allInnerTexts();
        console.log("alldata ::: ", alldata);
     }


     // for particular author

      const amit:string []=[];

         for (let allrow of alldata)
     {
        const alldata:string[] =   await allrow.locator("td").allInnerTexts();
        //console.log("alldata ::: ", alldata);
        const author = alldata[1];
        const book= alldata[0];

        if (author==="Amit")
{
            console.log(book, author)
            amit.push(book);

}
     }

     console.log(amit);


// for total sum of the price


      let totalprice:number= 0;
         for (let allrow of alldata.slice(1))
     {
        const alldata:string[] =   await allrow.locator("td").allInnerTexts();
        //console.log("alldata ::: ", alldata);

        const price= alldata[3];

        totalprice = totalprice+ parseInt(price);

     }
  console.log("totalprice :::", totalprice)
})
