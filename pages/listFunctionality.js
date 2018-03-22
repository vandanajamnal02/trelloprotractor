const listFunctionality = {

    createList : function(listName) {

        // $("#board .js-add-list").click();
        browser.sleep(2000);
        $("#board .js-add-list form input.list-name-input").sendKeys(listName);
        browser.sleep(1000);
        $("#board .js-add-list form input.mod-list-add-button").click();
        browser.sleep(2000);

        return listName;
    },
    updateList: function(oldName,newName){

        browser.sleep(3000);       
        $(".js-editing-target").click();
        browser.sleep(1000);
        $(".js-list-name-input").sendKeys(newName);
        $(".js-list-name-input").sendKeys(protractor.Key.ENTER);
        browser.sleep(3000);

    },

    archiveList: function(){

        

    }




};

module.exports = listFunctionality;