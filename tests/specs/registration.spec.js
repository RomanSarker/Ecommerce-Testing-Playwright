import {test, expect} from "@playwright/test";
import {Registration} from "../pageObjects/registration/regActions";
import {RegistrationObjects} from "../pageObjects/registration/regObjects"
import {Utilities} from "../../Utils/utilities"

test.describe("Evershop Ecommerce Registration Feature", ()=>{
    test("Successfully Register with valid Information",async({page})=>{
        const registration = new Registration(page);
        const regLocator = new RegistrationObjects(page);
        const utilities = new Utilities();
        await page.goto("https://demo.evershop.io/");
        // await page.pause();
        await registration.clickOnaccountIcon();
        await registration.clickOncreateAccountLink();
        await registration.enterfullNameInput("Roman14");
        await registration.enteremailInput(utilities.randomEmail());
        await registration.enterpasswordInput("Password123");
        await registration.clickOnbuttonSignUp()
        await page.waitForTimeout(5000);
        expect(page.url()).toEqual("https://demo.evershop.io/")
    //    await expect(regLocator.accountIconAfterLogin).toBeVisible();
        expect(await registration.isAccountIconVisible()).toBeTruthy();
    } )
    // test("UnSuccessfully Register with valid Information",async()=>{
        
    // } )
})