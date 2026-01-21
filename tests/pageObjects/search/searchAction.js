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
    let locator;
    const results = this.locator.searchResultTitle(searchText);
    for(let i=0; i<results.length;i++){
        //h3[contains(text(),"Stainless Steel Thermos")]
        //h3[contains(text(),"Stainless Steel Thermos")] [1]
      locator = `(${results}) [${i+1}]`
      return await locator.isDisplayed();
    }
}
async selectProduct(searchText,index=1){
    //case 1 : valid index => 3
    //case 2 : index =null
    //case 3 : index = out of boundaries:5
    try{
        const product = `(${this.locator.searchResultTitle(searchText)})[${index}]`;
    await product.click();
    }catch(error){
        const product = `(${this.locator.searchResultTitle(searchText)})[${index}] [1]`;
    await product.click();
    }
}

}