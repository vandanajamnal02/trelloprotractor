const SignUpLogin = require('./pages/SignUpAndLogin');
const Board = require('./pages/Board');
const List = require('./pages/listFunctionality');


describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://trello.com');
      browser.driver.manage().window().maximize();
    });

    it('login in to trello', function() {

      SignUpLogin.login();

    });

    // it('should sign up for trello', function() {

    //   signUpLogin.signUp();

    // });

    it('should create a new public board', function() {

      const boardName = "Vandana Board " + (Math.floor(Math.random() * 9) + 1);
      const privateBoard = false;
      Board.createBoard(boardName, privateBoard);

    });
    
    it('Create List',function(){

      const listName = "Task " + (Math.floor(Math.random() * 9) + 1);

      List.createList(listName);

    });

    

  });
  
  