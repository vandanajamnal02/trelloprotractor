
var signUpAndloginTrell = {

    login : function(){

            console.log('trying to login');
    
            $('a[href^="/login"]').click();
            browser.sleep(5000);
            $("#user").sendKeys("uitesterSix@yopmail.com");
            $("#password").sendKeys("uitest@123");
            $("#login").click();
            browser.sleep(5000);
      

    },
    signUp: function(){

        console.log("will sign up");

        $('a[href^="/signup"]').click();
        browser.sleep(5000);
        $("#name").sendKeys("uitester8");
        $("#email").sendKeys("uitester8@yopmail.com");
        $("#password").sendKeys("12345678");
        $("#signup").click();
        browser.sleep(5000);

    }

}

module.exports= signUpAndloginTrell;

