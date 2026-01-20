import searchObjects from "./searchObjects"

export class Search{
    constructor(page){
        this.page = page;
         this.locator = new searchObjects(page);
    }
async clickSearchIcon(){
    await this.locator.searchIcon.click();
}
async enterSearchText(searchText){
    await this.locator.searchInput.fill(searchText);
    await this.page.keyboard.press("Enter")
}

async isSearchResultDisplayed(searchText){
    const results = this.locator.searchResultTitle(searchText);
    for(let i=0; i<results.length;i++){
        
    }
}

}