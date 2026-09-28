import {test, expect,Locator } from "@playwright/test"

/*
 annotations: 1.only, 2.skip, 3. fail, 4. fixme, 5.slow

*/

//1. only
 //Runs only that test (or suite) and skips all others.
 //Useful when debugging a single test.
test('homepage loads', async ({ page }) => {
  await page.goto("https://google.com/");
  
});

  //2. Skip,  Marks a test (or suite) to be skipped entirely.
 // Good for temporarily disabling tests without deleting them.

  test.skip('feature not ready', async ({ page }) => {
  // This won’t run

});


//3.fail,  Marks a test as expected to fail. If it fails,
//  Playwright reports it as “expected failure” (not a red flag).
//Helps track regressions without breaking CI pipelines.

test.fail('known bug in checkout', async ({ page }) => {
  // Test logic
  page.goto("https://google.com/");
});

// 4.fix me
 //Similar to skip, but signals that the test is broken and needs fixing.
//Acts as a reminder for developers to revisit.
 test.fixme('broken login flow', async ({ page }) => {
  // Skipped until fixed
  await page.goto("https://google.com/");
});



//5.slow, Marks a test as slow, increasing its timeout (default is 30s, slow makes it 3× longer).
//Useful for tests that inherently take longer (e.g., large file uploads).
test('heavy data load', async ({ page }) => {
    test.slow(); // we need to mention inside the test
  // Timeout extended
  await page.goto("https://google.com/");
});








