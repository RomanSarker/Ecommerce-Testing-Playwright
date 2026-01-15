import {test} from "@playwright/test";
import {Registration} from "../pageObjects/registration/regActions";

test.describe("Evershop Ecommerce Registration Feature", ()=>{
    test("Successfully Register with valid Information",async({page})=>{
        const registration = new Registration(page);
        await page.goto("https://demo.evershop.io/");
        await registration.clickOnaccountIcon();
        await registration.clickOncreateAccountLink();
        await registration.enterfullNameInput("Roman14");
        // await this.page.waitForTimeout(5000);
        await registration.enteremailInput("roman14@email.com");
        await registration.enterpasswordInput("Password123");
        await registration.clickOnbuttonSignUp()
       
    } )
    test("UnSuccessfully Register with valid Information",async()=>{
        
    } )
})