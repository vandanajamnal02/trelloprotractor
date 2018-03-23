module.exports = {

    getRandomNumber: function() {
        return (Math.floor(Math.random() * 9) + 1);
    },

    getRandomBoardName: function() {
        return "Some Board " + this.getRandomNumber();
    },

    getRandomListName: function() {
        return "Random List " + this.getRandomNumber();
    },

    getRandomCardName: function() {
        return "Interesting Card " + this.getRandomNumber();
    },

    getBaseUrl: function() {
        
        return ('https://trello.com');
    },

    getLoginCredentials: function() {
        return {
            email : "uitesterSix@yopmail.com",
            password : "uitest@123"
        };
    }

}