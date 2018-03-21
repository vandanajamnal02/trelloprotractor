const change_Background = {
    background : function(){

        browser.sleep(1000);
        // click on right sidebar menu button
        $(".board-header-btns.mod-right").click();
        // click on Change background option
        $(".board-menu-navigation-item.mod-background").click();
        // click on the colors section option
        $(".board-backgrounds-section-tile.board-backgrounds-colors-tile").click();
        // click on the first background color option
        $(".board-menu .board-backgrounds-section-tile").click();
        browser.sleep(3000);

    }
}

module.exports = change_Background;