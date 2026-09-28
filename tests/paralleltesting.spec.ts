import { test, expect } from '@playwright/test';

test.describe.configure({mode:'serial'})// it executes as one after another with in test
test.describe.configure({mode:'parallel'}) // it executes as parallel
/*
by defauly playwright works as a parallel testing and we can change it to off in congig file by using fullyparallel false
fullyParallel: false now tests execute in serial and for serail we can assign only one worker because it exceuts one after another
fullyParallel: true, we can assign mutiple workers 
*/

test.describe('group1', () => {

    test('Test1', async ({ page }) => {
        console.log(" this is Test1 ......")
    });

    test('Test2', async ({ page }) => {
        console.log(" this is Test2 ......")
    });

    test('Test3', async ({ page }) => {
        console.log(" this is Test3 ......")
    });

    test('Test4', async ({ page }) => {
        console.log(" this is Test4 ......")
    });

    test('Test5', async ({ page }) => {
        console.log(" this is Test5 ......")
    });
});
