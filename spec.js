var signUpLogin = require('./pages/SignUpAndLogin');

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://trello.com');
    });

    // it('login in to trello', function() {

    //   signUpLogin.login();

    // });

    it('should sign up for trello', function() {

      signUpLogin.signUp();

    });

    

  });
  
  