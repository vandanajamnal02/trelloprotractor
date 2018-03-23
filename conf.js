exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  
  specs: [
    "./specs/SignUpAndLoginSpec.js",
    "./specs/BoardSpec.js",
    "./specs/ListSpec.js",
    "./specs/CardSpec.js"
  ],

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["no-sandbox"]
    }
  },
  jasmineNodeOpts: {
    isVerbose: true,
    defaultTimeoutInterval: 20000000
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};
