const signUpAndloginTrell = {

    login : function({ email, password }){
        
        try {
            
            console.log('trying to login');    
            $('a[href^="/login"]').click();
            browser.sleep(5000);
            $("#user").sendKeys(email);
            $("#password").sendKeys(password);
            $("#login").click();
            browser.sleep(5000);
            return { 'err' : false };

        } catch (error) {
            return { 'err' : error };
        }

    },
    signUp: function({ username, email, password }){

        try {
            console.log("will sign up");

            $('a[href^="/signup"]').click();
            browser.sleep(5000);
            $("#name").sendKeys(username);
            $("#email").sendKeys(email);
            $("#password").sendKeys(password);
            $("#signup").click();
            browser.sleep(5000);
            return { 'err' : false };
        } catch (error) {
            return { 'err' : error };
        }

    },

    logout: function() {

        try {
            $(".js-open-header-member-menu").click();
            browser.sleep(500);
            $(".js-logout").click();
            
            return { 'err' : false };
        } catch (error) {
            return { 'err' : error };
        }

    }

}

module.exports = signUpAndloginTrell;

