import{test,expect} from "@playwright/test"


test ("types of screenshot", async({page})=>{
    
await page.goto("https://www.autosahay.com/");

//await page.screenshot({path:"screenshots/homepage.png"});

// we need go use timestammps in image

  const date=  Date.now();

await page.screenshot({path:"screenshots/" + "homepage" + date+ ".png"});


//full screentshot

await page.screenshot({path:"screenshots/" + "fullpage" + date+ ".png", fullPage:true});

// for particlat object

const logo= page.locator("//h1[contains(text(),'Never hunt for parking')]");

await logo.screenshot({path:"screenshots/" + "logo" + date+ ".png"});


})


