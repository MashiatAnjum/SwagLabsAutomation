
const performanceGlitchUserObjects = require("./performanceGlitchUserObjects");

class performanceGlitchUserActions{
       async enterUsername() {
            await performanceGlitchUserObjects.enterUserName.setValue("performance_glitch_user");
             await browser.pause(3000);
        }
        async enterPassword() {
            await performanceGlitchUserObjects.enterPassword.setValue("secret_sauce");
             await browser.pause(3000);
        }
        async loginButton() {  
            await performanceGlitchUserObjects.loginButton.click();
            await browser.pause(3000);
        }
        async clickHumbergerMenuButton(){
            await performanceGlitchUserObjects.clickHumbergerMenuButton.click();
             await browser.pause(3000);
        }
        async clickResetApp(){
            await performanceGlitchUserObjects.clickResetApp.click();
            await browser.pause(3000);
        }
        async filterProduct(){
            await performanceGlitchUserObjects.filterProduct.click();
             await browser.pause(3000);
        }
        async addCartProduct(){
            await performanceGlitchUserObjects.addCartProduct.click();
             await browser.pause(3000);
        }
        async clickShippingCart(){
            await performanceGlitchUserObjects.clickShippingCart.click();
            await browser.pause(3000);
        }
        async clickCheckout(){
            await performanceGlitchUserObjects.clickCheckout.click();
            await browser.pause(3000);
        }
        async enterFirstName(){
            await performanceGlitchUserObjects.enterFirstName.setValue("Mashiat");
             await browser.pause(3000);
        }
        async enterLastName(){
            await performanceGlitchUserObjects.enterLastName.setValue("Anjum");
            await browser.pause(3000);
        }
        async enterZipCode(){
            await performanceGlitchUserObjects.enterZipCode.setValue("1212");
             await browser.pause(3000);
        }
        async clickCountineButton(){
            await performanceGlitchUserObjects.clickCountineButton.click()
            await browser.pause(3000);
        }
        async productTitle(){
            await browser.pause(3000);
            return await performanceGlitchUserObjects.productTitle.getText();
        }
        async productPrice(){
            await browser.pause(3000);
            const productP = await performanceGlitchUserObjects.productPrice.getText();
            return parseFloat(productP.replace("$", " "));
        }
        async totalPrice(){
            await browser.pause(3000);
            const priceNumer = await performanceGlitchUserObjects.totalPrice.getText();
            return parseFloat(priceNumer.replace("Item total: $", " "));
        }
        async finishButton(){
            await performanceGlitchUserObjects.finishButton.click();
             await browser.pause(3000);
        }
        async successOrder (){
             await browser.pause(3000);
            return await performanceGlitchUserObjects.successOrder.getText();
        }
        async logoutButton(){
            await performanceGlitchUserObjects.logoutButton.click();
             await browser.pause(3000);
        }
    }
module.exports = new performanceGlitchUserActions();