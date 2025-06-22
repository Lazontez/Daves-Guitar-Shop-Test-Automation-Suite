// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home';


test.beforeEach(async ({page})=>{
    await page.goto('https://www.davesguitar.com/');
})

test.describe('Home Page Tests' , ()=>{
    test('Validate user can add Just In Item to cart' , async ({page})=>{
        let home = new HomePage(page)
        // When I get time this will turn into a loop that tests ALL just in products and validates expected result
        await home.justInItems.nth(0).click()
        await expect(page).toHaveURL('https://www.davesguitar.com/collections/just-in/products/mod-duo-multi-effect-processor-recent');

    })
})