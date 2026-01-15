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


    }
