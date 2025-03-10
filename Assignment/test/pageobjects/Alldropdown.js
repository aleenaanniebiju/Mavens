class AllDropDown {
    constructor() {
        this.$dropdown = () => $("//select[@id='searchDropdownBox']");
        this.$SerachBar = () => $("//input[@id='twotabsearchtextbox']");
        this.$searchButton = () => $("//input[@type='submit']");
        this.$AddTocart = () => $("//span[@id ='a-autoid-1']");
        this.$CheckTheProduct = () => $("//div[@id='nav-cart-count-container']//span[@id='nav-cart-count']");
        this.$DeleteButton = () => $("//input[@value='Delete']");
        this.$DeleteMessage = () => $("//div[@data-feature-id='delete-success-message']");
        this.$checkResult =() =>$('//*[@id="search"]/span/div/h1/div/div[1]/div/h2/span[3]')
    }
    
    async selectElectronics() {
        await this.$dropdown().click();
        await this.$dropdown().selectByAttribute('value', 'search-alias=electronics');
        await this.$dropdown().selectByVisibleText("Electronics");
    }
    
    async serachBar() {
        
        await this.$SerachBar().setValue('apple');
        await browser.pause(4000);
        await this.$searchButton().click();
    }
    async primeItem(){
        const products = await $$('//div[@data-component-type="s-search-result"]');
        for (let product of products) {
            const primeIcon = await product.$('.a-icon.a-icon-prime.a-icon-medium');
            if (await primeIcon.isExisting()) {
                const addToCartButton = await product.$('//button[contains(text(), "Add to cart")]');
                if (await addToCartButton.isExisting()) {
                    await product.scrollIntoView();
                    await browser.pause(3000);
                    await addToCartButton.click();
                    await browser.pause(4000);
                    break;
                }
            }
        }
    }
    
    async addToCart() {
        await this.$AddTocart().click();
    }
    
    async ItemTocheck() {
        await this.$CheckTheProduct().click();
    }
    
    async removeProduct() {
        await this.$DeleteButton().click();
    }
}

export default new AllDropDown();