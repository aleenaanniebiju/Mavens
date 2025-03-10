import LandingPage from "../pageobjects/LandingPage";
import AllDropDown from "../pageobjects/Alldropdown";

describe("Verify an item is added to the cart", function () {
    it("Launch the Amazon India website", async function () {
        
        await LandingPage.launchingUrl();
        await expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    });
    
    it("Verify the dropdown element is selected", async function () {
        await AllDropDown.selectElectronics();
       
        const selectedValue = await AllDropDown.$dropdown().getValue();
        console.log("Selected Value: ", selectedValue);
        expect(selectedValue).toBe("search-alias=electronics");
        await browser.pause(2000);
        await expect(AllDropDown.$dropdown()).toBeExisting();

    });
    
    it("Verify the search button", async function () {
        await expect(AllDropDown.$SerachBar()).toBeDisplayed();
        await expect(AllDropDown.$SerachBar()).toBeEnabled();
         await AllDropDown.serachBar();
        
        
    });
    it("Verify that the first prime item is added to cart",async function(){
        await AllDropDown.primeItem();

    })
    
    it("Verify the add to cart", async function () {
        await AllDropDown.addToCart();
        
        await AllDropDown.ItemTocheck();
    });
    
    it("Verify the added item is removed from the cart", async function () {
        await AllDropDown.removeProduct();
        await expect(await AllDropDown.$DeleteMessage()).withContext('The message needs to be displayed after removing the product').toBeDisplayed();
    });
});
