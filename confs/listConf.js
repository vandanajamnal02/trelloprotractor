const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    
    specs: "../specs/ListSpec.js",
  
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
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: "results/list",
          takeScreenshots: false
        })
      );
    }
  };
  