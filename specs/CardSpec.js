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
      });
    
    it("should login in to trello", function() {
        SignUpLogin.login(Utils.getLoginCredentials());
    });

    it('should create a new public board', function() {     
        Board.createBoard(boardName, privateBoard);
    });

    it('should create a new List',function(){  
        List.createList(ListName);
    });

    it('should create card',function() {
        Card.createCard(text);
    });
  
    it('should update card',function() {
        Card.openCard();
        Card.updateCard(" Updated Task");
        Card.dismissCardWindow();
    });

    it('should archive card',function(){
        Card.openCard();
        Card.archiveCard();
        Card.dismissCardWindow();
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