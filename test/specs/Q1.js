const lockedOutUserActions = require("../pages/question1/lockedOutUserActions.js");

describe("Try to login with locked_out_user", () => {
    it("login with locked_out_user and secret_sauce", async () => {
        await lockedOutUserActions.enterUsername();
        await lockedOutUserActions.enterPassword();
        await lockedOutUserActions.clickLoginButton();
    });

    it("Validate the displayed error message", async () => {
        const userName = await lockedOutUserActions.errorMessages(); 
        const expectedMessage = 'Epic sadface: Sorry, this user has been locked out.';
        await expect(userName).toContain(expectedMessage);
    });
});