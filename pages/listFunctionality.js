const listFunctionality = {

    createList : function(listName) {

        // try {
            
        //     browser.sleep(1000);
        //     const addListButton = $("#board .js-open-add-list");

        //     if(addListButton.isDisplayed()) {
        //         console.log("Add list button is displayed..");
        //         addListButton.click();
        //     }

        //     browser.sleep(2000);

        //     if($("#board .js-add-list form input.list-name-input").isDisplayed()) {
        //         console.log("List name input is displayed..");
        //     }

        //     $("#board .js-add-list form input.list-name-input").sendKeys(listName);
        //     browser.sleep(1000);
        //     $("#board .js-add-list form input.mod-list-add-button").click();

        //     browser.sleep(2000);

        //     // addListButton.isPresent().then(function(present) {
    
        //     //     if(present) {
        //     //         addListButton.click();
        //     //     }
    
        //     //     browser.sleep(2000);
        //     //     $("#board .js-add-list form input.list-name-input").sendKeys(listName);
        //     //     browser.sleep(1000);
        //     //     $("#board .js-add-list form input.mod-list-add-button").click();
    
        //     //     browser.sleep(2000);
    
        //     // });

        // } catch (error) {

        //     browser.sleep(1000);
        //     $("#board .js-add-list form input.list-name-input").sendKeys(listName);
        //     browser.sleep(1000);
        //     $("#board .js-add-list form input.mod-list-add-button").click();

        //     browser.sleep(2000);

        // }



        // $("#board .js-add-list").click();
        browser.sleep(2000);
        $("#board .js-add-list form input.list-name-input").sendKeys(listName);
        browser.sleep(1000);
        $("#board .js-add-list form input.mod-list-add-button").click();
        browser.sleep(2000);
    },
    updateList: function(updatedName){

        browser.sleep(2000);       
        $(".js-editing-target").click();
        browser.sleep(1000);
        $(".js-list-name-input").sendKeys(updatedName);
        $(".js-list-name-input").sendKeys(protractor.Key.ENTER);
        browser.sleep(2000);

    },

    archiveList: function(){

        browser.sleep(1000);
        $(".js-open-list-menu").click();
        browser.sleep(1000);
        $(".pop-over-content .pop-over-list a.js-close-list").click();
        browser.sleep(2000);


    }




};

module.exports = listFunctionality;