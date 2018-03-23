const SignUpLogin = require('../pages/SignUpAndLogin');
const Board = require('../pages/Board');
const List = require('../pages/listFunctionality');
const Utils = require('../pages/Utils');
const boardName = Utils.getRandomBoardName();
const privateBoard = false;
const ListName = Utils.getRandomListName();
const Card = require('../pages/cardFunctionality');
const text = Utils.getRandomCardName();


describe('Trello End-to-End Testing', function() {

    it('should visit Trello Homepage', function() {
      browser.driver.manage().window().maximize();
      browser.get(Utils.getBaseUrl());
    });

    it('should login in to trello', function() {

      SignUpLogin.login();

    });

    it('should sign up for trello', function() {

      signUpLogin.signUp();

    });

    it('should create a new public board', function() {     
      Board.createBoard(boardName, privateBoard);

    });
    
    it('Create List',function(){

      // const listName = "Task " + (Math.floor(Math.random() * 9) + 1);

      List.createList(ListName);

    });

    it('should update a list', function() {

      var oldName = List.createList(ListName);

     List.updateList(oldName, "something new");

    });
    it('should archive list',function(){

      List.createList(ListName);
      List.archiveList();


    });
    it('should create card',function() {

      List.createList(ListName);
      Card.createCard(text);
    });

    it('should update card',function() {

      List.createList(ListName);
      Card.createCard(text);
      Card.openCard();
      Card.updateCard("Updated Task");

    });
    it('should archive card',function(){
      List.createList(ListName);
      Card.createCard(text);
      Card.openCard();
      Card.updateCard(" Updated Task ");
      Card.archiveCard();
      Card.dismissCardWindow();
    });
    it('should change background',function(){

      Board.changeBackground();

    });

    it('should toggle Left and right sidebar', function() {

      Board.showRightSidebar();
      Board.hideRightSidebar();
      Board.toggleLeftSidebar();

    });

    it('should send invite to add new member to a board', function() {

      const email = "ashutosh@akonect.com";
      Board.addMember(email);

    });

    it('should toggle favorite status of board', function() {

      Board.toggleFavorite();

    });

    it('should check if board is favorite', function() {

      const boardToValidate = "Vandana Board 1";
      const isFavorite = Board.validateBoardIsFavorite(boardToValidate);
      console.log("Board is favorite --> ", isFavorite);

    });
    it('should move card from list one to second list',function(){

      Board.createBoard(boardName, privateBoard);
      var list1 = List.createList(ListName);
      var list2 = List.createList(ListName+1);
      Card.createCard(text);
      Card.openCard();
      Card.moveCard(list2);


    });

    

  });
  
  