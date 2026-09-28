import { test, expect } from '@playwright/test';


test.beforeAll("beforeall", async()=>{

  console.log(" this is beforeall ......")
})

test.afterAll("afterall", async()=>{

 console.log(" this is afterall ......")

})

test.beforeEach("beforeeach", async()=>{

  console.log(" this is beforeeach ......")
})

test.afterEach("aftereach", async()=>{

 console.log(" this is aftereach ......")

})

   test('Test1', async () => {
        console.log(" this is Test1 ......")
    });

    test('Test2', async () => {
        console.log(" this is Test2 ......")
    });

     test('Test3', async () => {
        console.log(" this is Test3 ......")
    });

    test('Test4', async () => {
        console.log(" this is Test4 ......")
    });