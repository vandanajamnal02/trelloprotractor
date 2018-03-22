const Board = {

    createBoard: function(name, private=true) {

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
        browser.sleep(5000);

    },

    toggleFavorite: function() {

        // click on the favorite icon
        browser.sleep(1000);        
        $(".js-board-header .js-star-board").click();
        browser.sleep(3000);

    },

    validateBoardIsFavorite: function(boardName) {

        this.toggleLeftSidebar();
        const favBoardNames = element.all(by.css(".starred-sidebar-boards-list span.compact-board-tile-link-text-name"));

        const requiredBoard = favBoardNames.filter((board) => {

            return board.getText().then(name => name === boardName);

        });

        if(requiredBoard) {
            return true;
        } else {
            return false;        
        }

    },

    showRightSidebar: function() {
        // click on right sidebar menu button
        browser.sleep(2000);        
        $(".board-header-btns.mod-right").click();
        browser.sleep(500);
    },

    hideRightSidebar: function() {

        // click on the (X) close button in the right sidebar
        browser.sleep(2000);        
        $(".board-menu-header-close-button.js-hide-sidebar").click();
        browser.sleep(500);        

    },

    toggleLeftSidebar: function() {
        //click on board menu in left
        browser.sleep(2000);
        $(".js-boards-menu").click();
        browser.sleep(500);
        // $(".js-boards-menu").click();        
        // browser.sleep(2000);        
    },


    changeBackground: function(){

        browser.sleep(3000);
        this.showRightSidebar();
        // click on Change background option
        $(".board-menu-navigation-item.mod-background").click();
        browser.sleep(500);
        // click on the colors section option
        $(".board-backgrounds-section-tile.board-backgrounds-colors-tile").click();
        browser.sleep(500);
        // click on the first background color option
        $(".board-menu .board-backgrounds-section-tile").click();
        browser.sleep(3000);

    },

    addMember: function(email) {

        browser.sleep(3000);
        this.showRightSidebar();
        // click on Invite option
        $(".js-simple-add-members.js-open-manage-board-members").click();
        browser.sleep(500);
        $(".pop-over.is-shown input.js-search-input").sendKeys(email);
        browser.sleep(2000);
        $(".js-send-email-invite").click();
        browser.sleep(2000);

    }

};

module.exports = Board;