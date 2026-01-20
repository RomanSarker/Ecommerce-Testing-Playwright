export default class searchObjects{
    constructor(page){
        this.page =page;
        this.searchIcon = this.page.locator("//a[@class='search__icon']");
        this.searchInput = this.page.getByRole('textbox',{name:'Search'});
        this.buttonAddToCart = this.page.getByRole('button',{name:'ADD TO CART'})
    }
    //dinamic search with heading-title name of product
    searchResultTitle(searchText){
    //     return this.page.getByRole("heading",`${searchText}`,{exact:false});
    return this.page.locator(`//h3[contains(text(),'${searchText}')]`);
    }
    productColor(color){
    return this.page.getByRole("link",{name:'color'});
    }
} 