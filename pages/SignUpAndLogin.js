const signUpAndloginTrell = {

    login : function({ email, password }){
            console.log('trying to login');    
            $('a[href^="/login"]').click();
            browser.sleep(5000);
            $("#user").sendKeys(email);
            $("#password").sendKeys(password);
            $("#login").click();
            browser.sleep(5000);
      

    },
    signUp: function({ username, email, password }){

        console.log("will sign up");

        $('a[href^="/signup"]').click();
        browser.sleep(5000);
        $("#name").sendKeys(username);
        $("#email").sendKeys(email);
        $("#password").sendKeys(password);
        $("#signup").click();
        browser.sleep(5000);
    },

    logout: function() {

        $(".js-open-header-member-menu").click();
        browser.sleep(500);
        $(".js-logout").click();

    }

}

module.exports = signUpAndloginTrell;

