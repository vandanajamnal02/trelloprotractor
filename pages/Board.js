const Board = {

    createBoard : function() {

        $("a.js-open-add-menu").click();
        $("a.js-new-board").click();
        browser.sleep(5000);

    }

}

module.exports = Board;