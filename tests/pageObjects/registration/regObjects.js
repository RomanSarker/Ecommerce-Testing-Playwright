export class RegistrationObjects{
  constructor(page){
    this.page = page;
    this.accountIcon = this.page.locator("//a[contains(@href,'account')]");
    this.createAccountLink = this.page.locator("//a[contains(@href,'register')]");
    this.fullNameInput = this.page.getByRole("textbox",{name:"Full Name"});
    this.emailInput = this.page.getByRole("textbox",{name:"Email"});
    this.passwordInput = this.page.getByRole("textbox",{name:"Password"});
    this.buttonSignUp = this.page.getByRole("button",{name:"Sign Up"});


  }
}