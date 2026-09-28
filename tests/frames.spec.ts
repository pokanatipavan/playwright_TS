/*
An iframe (short for “inline frame”) is an HTML element that allows you to embed another HTML document within the current docum
Iframes are commonly used to embed external content such as videos, maps, or other web pages (as seen here) into a web page 
without affecting the parent document
*/

import { test, Locator, expect } from "@playwright/test"
test("handle frames", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/")

  //process 1
  const framescount = page.frames();
  //for count 
  console.log("framescount::", framescount.length);


  //for count 2nd process
  for (const totalframes of framescount) {
    console.log("by using for ::", totalframes.url())// if frames has url then only it works

  }

  // approach 1 to fill the text in iputbox
  // //(using page. frame) if use page.frame we can use only URL of name of the locator
  const innerframe = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1" })

  if (innerframe) {
    await innerframe.locator("input[name='mytext1']").fill("test123")
  }
  else {
    console.log("frame is not availble")
  }

})


//approach 2 frame loactor()
// we can use xpath , css or any locator

test.only("handle frames inside farmes", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/")



  // approach 2 to fill the text in iputbox
  // we can use xpath , css or any locator
  const innerframe = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3" })

  const inputbox3 = "iframe3-input"
  if (innerframe) {
    const frame3 = page.frameLocator("[src='frame_3.html']").locator("[name='mytext3']");
    await frame3.fill(inputbox3);
    await page.waitForTimeout(2000);

    const childframes = innerframe.childFrames();
    console.log("innerframes::", childframes.length);

    const checkbox = childframes[0].getByLabel("Hi, I am the UI.Vision IDE");
    checkbox.check();
    await page.waitForTimeout(2000);
    expect(checkbox).toBeChecked();

  }
  else {
    console.log("frame is not availble")
  }

})
