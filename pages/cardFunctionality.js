const CardFunctionalities = {

  createCard: function(text) {
    browser.sleep(1000);
    $(".js-open-card-composer").click();
    browser.sleep(500);
    $(".list-card-composer-textarea").sendKeys(text);
    $(".card-composer .js-add-card").click();
    browser.sleep(3000);
  },
  openCard: function() {
    $(".js-list .js-member-droppable").click();
    browser.sleep(3000);
  },
  updateCard: function(newText) {

    browser.sleep(1000);
    $(".window .window-title").click();
    browser.sleep(1000);
    $(".js-card-detail-title-input").sendKeys(newText);
    $(".js-card-detail-title-input").sendKeys(protractor.Key.ENTER);
    browser.sleep(2000);

  },
  archiveCard: function() {
    browser.sleep(1000);
    $('.js-archive-card').click();
    browser.sleep(2000);

  },
  dismissCardWindow: function() {

    browser.sleep(1000);
    
    $('.js-close-window').click();

    browser.sleep(3000);

  },
  moveCard: function(list2) {

    browser.sleep(1000);
    $('.js-move-card').click();
    browser.sleep(3000);


  }
};
module.exports = CardFunctionalities;
