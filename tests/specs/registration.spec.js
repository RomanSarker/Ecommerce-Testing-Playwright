import {test} from "@playwright/test";
import {Registration} from "../pageObjects/registration/regActions";

test.describe("Evershop Ecommerce Registration Feature", ()=>{
    test("Successfully Register with valid Information",async()=>{
        const registration = new Registration(page);
        await page.url("https://demo.evershop.io/");
        await registration.clickOnaccountIcon();
        await registration.clickOncreateAccountLink();
        await registration.enterfullNameInput("Roman_14");
        await registration.enteremailInput("roman14");
        await registration.enterpasswordInput();
        await registration.clickOnbuttonSignUp()
       
    } )
    test("UnSuccessfully Register with valid Information",async()=>{
        
    } )
})