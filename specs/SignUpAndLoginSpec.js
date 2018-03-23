const Utils = require("../pages/Utils");
const SignUpLogin = require("../pages/SignUpAndLogin");

describe("SignUp and Login Functionality", function() {
  it("should visit Trello Homepage", function() {
    browser.driver
      .manage()
      .window()
      .maximize();
    browser.get(Utils.getBaseUrl());

    browser.getCurrentUrl().then(function(actualUrl) {
        expect(actualUrl).toBe(Utils.getBaseUrl());
    });
  });

  it("should signup in to trello", function() {
    SignUpLogin.signUp(Utils.getSignupCredentials());
    SignUpLogin.logout();
  });

  it("should login in to trello", function() {
    SignUpLogin.login(Utils.getLoginCredentials());
    SignUpLogin.logout();
  });

});
