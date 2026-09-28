/*
1. Run all sanity tests:
   npx playwright test tests/tagging.spec.ts --grep "@sanity"

2. Run all regression tests:
   npx playwright test tests/tagging.spec.ts --grep "@regression"

3. Run tests which are belongs to both sanity & regression
💡
   npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=.*@sanity)
(?=.*@regression)

(?=.*@sanity)(?=.*@regression)

4. Run tests belongs to either sanity or regression.  
   npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression  
   npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"

*/

import {test,Locator} from "@playwright/test";



test("sanity tag", {tag: ['@smoke', '@sanity']}, async({page})=>
    {
        console.log('smoke andsanity')
} )

test("smoke tag", {tag: ['@smoke']}, async({page})=>
    {
        console.log('smoke')
} )

test("regression tag", {tag: ['@regression', '@sanity']}, async({page})=>
    {
        console.log('regression and sanity')
} )

