const CardFunctionalities = {

  createCard: function(text) {

    try {
      
      browser.sleep(1000);
      $(".js-open-card-composer").click();
      browser.sleep(500);
      $(".list-card-composer-textarea").sendKeys(text);
      $(".card-composer .js-add-card").click();
      browser.sleep(3000);

      return {'err' : false};
    } catch (error) {
      return {'err' : error};
    }

  },
  
  openCard: function() {

    try {
      
      $(".js-list .js-member-droppable").click();
      browser.sleep(3000);

      return {'err' : false};
    } catch (error) {
      return {'err' : error};
    }

  },

  updateCard: function(newText) {

    try {
      
      browser.sleep(1000);
      $(".window .window-title").click();
      browser.sleep(1000);
      $(".js-card-detail-title-input").sendKeys(newText);
      $(".js-card-detail-title-input").sendKeys(protractor.Key.ENTER);
      browser.sleep(2000);

      return {'err' : false};
    } catch (error) {
      return {'err' : error};
    }

  },
  archiveCard: function() {

    try {
      
      browser.sleep(1000);
      $('.js-archive-card').click();
      browser.sleep(2000);

      return {'err' : false};
    } catch (error) {
      return {'err' : error};
    }

  },
  dismissCardWindow: function() {

    try {
      browser.sleep(1000);
      $('.js-close-window').click();
      browser.sleep(3000);
      return {'err' : false};
    } catch (error) {
      return {'err' : error};
    }

  },
  moveCard: function(list2) {

    try {
      browser.sleep(1000);
      $('.js-move-card').click();
      browser.sleep(3000);
      return {'err' : false};
    } catch (error) {
      return {'err' : error};
    }

  }
};
module.exports = CardFunctionalities;
