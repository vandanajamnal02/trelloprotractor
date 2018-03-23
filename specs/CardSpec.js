const SignUpLogin = require('../pages/SignUpAndLogin');
const Board = require('../pages/Board');
const List = require('../pages/listFunctionality');
const Utils = require('../pages/Utils');
const boardName = Utils.getRandomBoardName();
const privateBoard = false;
const ListName = Utils.getRandomListName();
const Card = require('../pages/cardFunctionality');
const text = Utils.getRandomCardName();

describe('Trello Card Functionality', function() {

    it("should visit Trello Homepage", function() {
        browser.driver
          .manage()
          .window()
          .maximize();
        browser.get(Utils.getBaseUrl());

        browser.getCurrentUrl().then(function(actualUrl) {
            expect(actualUrl).toBe(Utils.getBaseUrl());
        });

    });
    
    it("should login in to trello", function() {
        const loginResult = SignUpLogin.login(Utils.getLoginCredentials());
        expect(loginResult.err).toBe(false)
    });

    it('should create a new public board', function() {     
        const createResult = Board.createBoard(boardName, privateBoard);
        expect(createResult.err).toBe(false);
    });

    it('should create a new List',function(){  
        const createResult = List.createList(ListName);
        expect(createResult.err).toBe(false);
    });

    it('should create card',function() {
        const createCardResult = Card.createCard(text);
        expect(createCardResult.err).toBe(false);
    });
  
    it('should update card',function() {
        const openResult = Card.openCard();
        expect(openResult.err).toBe(false);

        const updateResult = Card.updateCard(" Updated Task");
        expect(updateResult.err).toBe(false);

        const dismissResult = Card.dismissCardWindow();
        expect(dismissResult.err).toBe(false);

    });

    it('should archive card',function(){
        const openResult = Card.openCard();
        expect(openResult.err).toBe(false);
        
        const archiveResult = Card.archiveCard();
        expect(archiveResult.err).toBe(false);

        const dismissResult = Card.dismissCardWindow();
        expect(dismissResult.err).toBe(false);
    
    });

    // it('should move card from list one to second list',function(){

    //     Board.createBoard(boardName, privateBoard);
    //     var list1 = List.createList(ListName);
    //     var list2 = List.createList(ListName+1);
    //     Card.createCard(text);
    //     Card.openCard();
    //     Card.moveCard(list2);
  
    // });
  

});