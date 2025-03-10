class LandingPage{
    async launchingUrl(){
        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow();
        await browser.pause(5000);
    }
}
export default new LandingPage();
