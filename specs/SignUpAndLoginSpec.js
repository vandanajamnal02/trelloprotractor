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
    const signupResult = SignUpLogin.signUp(Utils.getSignupCredentials());

    expect(signupResult.err).toBe(false);

    const logoutResult = SignUpLogin.logout();

    expect(logoutResult.err).toBe(false);

  });

  it("should login in to trello", function() {
    const loginResult = SignUpLogin.login(Utils.getLoginCredentials());
    expect(loginResult.err).toBe(false);

    const logoutResult = SignUpLogin.logout();
    expect(logoutResult.err).toBe(false);

  });

});
