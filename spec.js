const SignUpLogin = require('./pages/SignUpAndLogin');
const Board = require('./pages/Board');
const List = require('./pages/listFunctionality');

const ListName = "My Tasks " + (Math.floor(Math.random() * 9) + 1);


describe('Trello End-to-End Testing', function() {
    it('should visit Trello Homepage', function() {
      browser.get('https://trello.com');
      browser.driver.manage().window().maximize();
    });

    it('should login in to trello', function() {

      SignUpLogin.login();

    });

    // it('should sign up for trello', function() {

    //   signUpLogin.signUp();

    // });

    // it('should create a new public board', function() {

    //   const boardName = "Vandana Board " + (Math.floor(Math.random() * 9) + 1);
    //   const privateBoard = false;
    //   Board.createBoard(boardName, privateBoard);

    // });
    
    // it('Create List',function(){

    //   // const listName = "Task " + (Math.floor(Math.random() * 9) + 1);

    //   List.createList(ListName);

    // });

    // it('should update a list', function() {

    //   List.updateList(ListName, "something new");

    // });
    // it('should change background',function(){

    //   Board.changeBackground();

    // });

    // it('should toggle Left and right sidebar', function() {

    //   Board.showRightSidebar();
    //   Board.hideRightSidebar();
    //   Board.toggleLeftSidebar();

    // });

    // it('should send invite to add new member to a board', function() {

    //   const email = "ashutosh@akonect.com";
    //   Board.addMember(email);

    // });

    // it('should toggle favorite status of board', function() {

    //   Board.toggleFavorite();

    // });

    it('should check if board is favorite', function() {

      const boardToValidate = "Vandana Board 1";
      const isFavorite = Board.validateBoardIsFavorite(boardToValidate);
      console.log("Board is favorite --> ", isFavorite);

    });

    

  });
  
  