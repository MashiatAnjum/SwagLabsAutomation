const lockedOutUserObjects = require('./lockedOutUserObjects.js');

class lockedOutUserActions {
    async enterUsername() {
        await lockedOutUserObjects.enterUserName.setValue("locked_out_user");
         await browser.pause(3000);
    }
    async enterPassword() {
        await lockedOutUserObjects.enterPassword.setValue("secret_sauce");
        await browser.pause(3000);
    }
    async clickLoginButton() {  
        await lockedOutUserObjects.clickLoginButton.click();
        await browser.pause(3000);   
    }
    async errorMessages(){
        return await lockedOutUserObjects.errorMessages.getText();
        //await browser.pause(3000);
    }
}

module.exports = new lockedOutUserActions();