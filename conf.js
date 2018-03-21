exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['no-sandbox']
        }
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
  };