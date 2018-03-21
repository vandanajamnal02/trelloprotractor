
var signUpAndloginTrell = {

    login : function(){

            console.log('trying to login');
    
            element(by.xpath("//a[@class='global-header-section-button']")).click();
            browser.sleep(5000);
            element(by.id("user")).sendKeys("uitesterSix@yopmail.com");
            element(by.id("password")).sendKeys("uitest@123");
            element(by.id("login")).click();
            browser.sleep(5000);
      

    },
    signUp: function(){

        

    }

}

module.exports= signUpAndloginTrell;

