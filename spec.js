const signUpLogin = require('./pages/SignUpAndLogin');
const Board = require('./pages/Board');


describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://trello.com');
    });

    it('login in to trello', function() {

      signUpLogin.login();

    });

    // it('should sign up for trello', function() {

    //   signUpLogin.signUp();

    // });

    it('should create a new public board', function() {

      const boardName = "Vandana Board " + (Math.floor(Math.random() * 9) + 1);
      const privateBoard = false;
      Board.createBoard(boardName, privateBoard);

    });

    

  });
  
  