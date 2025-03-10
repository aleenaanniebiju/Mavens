describe("Working with frames", () => {

    it("should click a menu item within an iframe", async () => {
      await browser.url("https://practice-automation.com/iframes/");
  
      // Wait for the first iframe to exist and switch to it
      const topIframe = await $("#iframe-1");
      await topIframe.waitForExist({ timeout: 10000 });
      await browser.switchFrame(topIframe);
      await browser.pause(2000);
      const clickget=await $('//div[@class="buttons_pzbO"]//a[text()="Get started"]');
      await clickget.click();
      await browser.pause(1500);
  
      // Click 'Docs'
      /*const docs = await $('//a[text()="Docs"]');
      await docs.waitForDisplayed({ timeout: 5000 });
      await docs.click();
      await browser.pause(1500);
  
      // Verify title
      const title = await $('h2[id="introduction"]');
      await title.waitForDisplayed({ timeout: 5000 });
      expect(await title.getText()).toBe("Introduction");*/
  
      // Switch back to the main document
      await browser.switchToParentFrame();
    });
  
    it("Should click a menu in the second iframe", async () => {
      // Wait for the second iframe to exist
      const secondFrame = await $('//iframe[@id="iframe-2"]');
      await secondFrame.waitForExist({ timeout: 10000 });
  
      // Scroll only if the iframe exists
      if (await secondFrame.isDisplayed()) {
        await secondFrame.scrollIntoView({ block: 'center' });
      }
  
      // Switch to the second iframe
      await browser.switchFrame(secondFrame);
      await browser.pause(2000);
  
      //click Downloads
      const downloads = await $('//span[text()="Downloads"]');
  
      // Verify text inside the element
      await expect(downloads).toHaveText('Downloads');
  
      // Get text and compare it correctly
      const val = await downloads.getText();
      if (val === "Downloads") {  // Use === for correct comparison
        await downloads.click();
        await browser.pause(2000);
      }
      const val1=await $('//h1[@class="d-1"]');
      await expect(val1).toBeDisplayed();
  
      // Switch back to the main document
      await browser.switchFrame(null);
    });
  
  });