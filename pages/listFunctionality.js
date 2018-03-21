const listFunctionality = {

    createList : function(listName) {

        // $("#board .js-add-list").click();
        browser.sleep(3000);
        $("#board .js-add-list form input.list-name-input").sendKeys(listName);
        browser.sleep(3000);
        $("#board .js-add-list form input.mod-list-add-button").click();

    },
    updateList: function(){

    },
    archiveList: function(){

    }




};

module.exports = listFunctionality;