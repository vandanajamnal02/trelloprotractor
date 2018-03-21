
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

        

    }

}

module.exports= signUpAndloginTrell;

