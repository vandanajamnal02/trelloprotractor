const Board = {

    createBoard : function(name, private=true) {

        $("a.js-open-add-menu").click();
        $("a.js-new-board").click();
        browser.sleep(2000);
        $("form.create-board-form input.subtle-input").sendKeys(name);

        $("form.create-board-form button.vis-chooser-trigger").click();
        browser.sleep(1000);

        console.log("Creating a private board --> ", private);

        if(private) {
            $("span.icon-private").click();
        } else {
            $("span.icon-public").click();
        }

        $("form.create-board-form button[type='submit']").click();
        browser.sleep(3000);

    }

}

module.exports = Board;