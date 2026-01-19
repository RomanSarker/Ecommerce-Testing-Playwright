import{RegistrationObjects} from "./regObjects";

export class Registration{
    constructor(page){
        this.page = page;
        this.locator = new RegistrationObjects(page)
    }
    async clickOnaccountIcon(){
        await this.locator.accountIcon.click();
    }
    async clickOncreateAccountLink(){
        await this.locator.createAccountLink.click();
    }
    async enterfullNameInput(fullname){
        await this.page.waitForTimeout(5000);
        await this.locator.fullNameInput.fill(fullname);
    }
    async enteremailInput(email){
        await this.locator.emailInput.fill(email);
    }
    async enterpasswordInput(password){
        await this.locator.passwordInput.fill(password);
    }
    async clickOnbuttonSignUp(){
        await this.locator.buttonSignUp.click();
    }

    async isAccountIconVisible(){
        await this.page.waitForTimeout(2000);
      const isVisible= await this.locator.accountIconAfterLogin.isVisible();
        return isVisible;
    }
    }
