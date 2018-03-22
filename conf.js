exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["./specs/spec.js"],
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
