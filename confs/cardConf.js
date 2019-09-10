const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    seleniumAddress: "http://localhost:4444/wd/hub",
    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.11.0.jar',
    
    
    specs: "../specs/CardSpec.js",
  
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
            savePath: 'results/cardResults',
            takeScreenshots: false
          })
        );
     }
  };
  
