import {LoginObjects} from "./loginObjects";
import {Registration} from "../registration/regActions";

const registration = new Registration();

export class Login{
    async login(email){
        await registration.enterEmail(email);
    }
}