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

        try {
            browser.sleep(2000);
            $("#board .js-add-list form input.list-name-input").sendKeys(listName);
            browser.sleep(1000);
            $("#board .js-add-list form input.mod-list-add-button").click();
            browser.sleep(2000);
            
            return {'err' : false};
        } catch (error) {
            return {'err' : error};
        }

    },
    updateList: function(updatedName){

        try {
            browser.sleep(2000);       
            $(".js-editing-target").click();
            browser.sleep(1000);
            $(".js-list-name-input").sendKeys(updatedName);
            $(".js-list-name-input").sendKeys(protractor.Key.ENTER);
            browser.sleep(2000);

            return {'err' : false};
        } catch (error) {
            return {'err' : error};
        }

    },

    archiveList: function(){

        try {
            browser.sleep(1000);
            $(".js-open-list-menu").click();
            browser.sleep(1000);
            $(".pop-over-content .pop-over-list a.js-close-list").click();
            browser.sleep(2000);

            return {'err' : false};
        } catch (error) {
            return {'err' : error};
        }

    }




};

module.exports = listFunctionality;