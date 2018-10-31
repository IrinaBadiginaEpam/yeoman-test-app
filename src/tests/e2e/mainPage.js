const config = require('../../../nightwatch.conf.js');

module.exports = {
  'Main Page contains link to the New Page': function(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body');

    browser.expect.element('a').to.have.attribute('href').which.contains('newPage');

    browser
      .saveScreenshot(config.SCREENSHOT_PATH + 'mainPage.png')
      .end();
  }
};
