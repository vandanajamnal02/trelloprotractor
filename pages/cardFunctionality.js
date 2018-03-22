 const CardFunctionalities = {

    createCard: function(text) {

        browser.sleep(1000);
        $(".js-open-card-composer").click();
        browser.sleep(500);
        $(".list-card-composer-textarea").sendKeys(text);
        $(".card-composer .js-add-card").click();
        browser.sleep(3000);
    }
 }
 module.exports = CardFunctionalities;