class standardUserObjects {
    get enterUserName() { 
          return $('//input[@id="user-name"]'); 
      } 
      get enterPassword() { 
          return $('//input[@id="password"]'); 
      }
      get clickOnLogin() { 
          return $('//input[@id="login-button"]'); 
      }
      get humbergerButton(){
          return $ ('//button[@id="react-burger-menu-btn"]');
      }
      get clickOnResetApp (){
          return $ ('//a[@id="reset_sidebar_link"]');
      }
      get productCart1(){
          return $ ("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
      }
      get productCart2(){
          return $ ("//button[@id='add-to-cart-sauce-labs-fleece-jacket']");
      }
      get productCart3(){
          return $ ("//button[@id='add-to-cart-sauce-labs-onesie']");
      }
      get clickOnShippingCart(){
          return $ ('//a[@class="shopping_cart_link"]');
      }
      get clickOnCheckout(){
          return $ ('//button[@id="checkout"]');
      }
      get enterfirstName(){
          return $ ('//input[@placeholder="First Name"]');
      }
      get enterLastName(){
          return $ ('//input[@placeholder="Last Name"]');
      }
      get enterZipcode(){
          return $ ('//input[@placeholder="Zip/Postal Code"]');
      }
      get clickOnCountine(){
          return $ ( '//input[@id="continue"]');
      }
      get productTitile1 (){
          return $ ("//div[normalize-space()='Sauce Labs Backpack']");
      }
      get productTitile2(){
          return $ ("//div[normalize-space()='Sauce Labs Fleece Jacket']");
      }
      get productTitile3(){
          return $ ("//div[normalize-space()='Sauce Labs Onesie']");
      }
      get productprice1 (){
          return $ ("//div[text()= '15.99']");
      }
      get productprice2 (){
          return $ ("//div[text()= '49.99']");
      }
      get productprice3 (){
          return $ ("//div[text()= '7.99']");
      }
      get totalPricem(){
          return $ ( '//div[@class="summary_subtotal_label"]');
      }
      get finishButton(){
          return $ ('//button[@id="finish"]');
      }
      get successOrder(){
          return $ ("//h2[text()='Thank you for your order!']");
      }
      get logoutbutton(){
          return $ ('//a[@id="logout_sidebar_link"]');
      }
  }
  module.exports = new standardUserObjects();