const listFunctionality = {

    createList : function(listName) {

        // $("#board .js-add-list").click();
        browser.sleep(1000);
        $("#board .js-add-list form input.list-name-input").sendKeys(listName);
        browser.sleep(1000);
        $("#board .js-add-list form input.mod-list-add-button").click();
        browser.sleep(2000);
        return listName;
    },
    updateList: function(oldName,newName){

        const allBoards = element.all(by.xpath("#board .js-list"));

        console.log("Found all boards --> ", allBoards);

        const oldBoard = allBoards.filter((board) => {

            const boardName = board.$("h2");

            return boardName.getText().then(function (name) {

                console.log("Board name --> ",name);
                return name === oldName;
            });

        });

        console.log("Found old board --> ", oldBoard);

    },
    archiveList: function(){

    }




};

module.exports = listFunctionality;