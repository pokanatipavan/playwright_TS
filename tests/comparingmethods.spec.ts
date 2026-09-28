import{test, expect, Locator} from '@playwright/test';


test ("hidden dropdown", async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/desktops");

    const producttitles:Locator = page.locator(".product-title");
    await page.waitForTimeout(3000);
    const count= await producttitles.count();

    // innettext vs text content
    for (let i=0; i<count; i++)
    {
           // inner text print plaue without any spaces 
          // const title: string=  await producttitles.nth(i).innerText();
          // console.log("using innertext:", title);


          // it gives the all text including spaces and hidden values 
       // const innertexttitle: string |null =await  producttitles.nth(i).textContent();
         //console.log("using textcontent", innertexttitle);
          // console.log("using textcontent", innertexttitle?.trim());



          // ALL TEXT content vs allinnertext
// bynusing all innere texts
          //  const allinner:String[]= await producttitles.allInnerTexts();
          //  console.log("all inner text:", allinner)

// by using all text conent
    //  const alltext:string []= await producttitles.allTextContents();
    //   const aftertrim:string[]= alltext.map(text=>text.trim());

    //  console.log("all text content:", aftertrim);

     //3, all()--- coverts locator to locator array
    //returns array of locator

    const allproducts :Locator [] = await producttitles.all();
           //console.log(allproducts)
          // console.log(await allproducts[1].innerText());

          //by using
           for (const products of allproducts)
            {
                  console.log(await products.innerText());
           }
     
     // bu using index
      for (let i in allproducts)
      {
        console.log("by using in loop; ", await allproducts[i].innerText());
      }

    }



   



})

