import searchObjects from "./searchObjects"

export class Search{
    constructor(page){
        this.page = page;
         this.locator = new searchObjects(page);
    }


}