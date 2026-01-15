export class RegistrationObjects{
  constructor(page){
    this.page = page;
    this.accountIcon = this.page.locator("//a[contains(@href,'account')]");
    this.createAccountLink = this.page.locator("//a[contains(@href,'register')]");
    this.fullNameInput = this.page.getByRole("textbox",{name:"full_name"});
    this.emailInput = this.page.getByRole("textbox",{name:"email"});
    this.passwordInput = this.page.getByRole("textbox",{name:"password"});
    this.buttonSignUp = this.page.getByRole("button",{name:"Sign Up"});


  }
}