export class Utilities{
 randomEmail(){
     const currentTime = Date.now();
     const email = `roman21_${currentTime}@email.com`;
     console.log(email)
     return email;
    }
}