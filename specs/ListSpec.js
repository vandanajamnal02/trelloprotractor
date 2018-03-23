const SignUpLogin = require('../pages/SignUpAndLogin');
const Board = require('../pages/Board');
const Utils = require('../pages/Utils');
const List = require('../pages/listFunctionality');
const boardName = Utils.getRandomBoardName();
const privateBoard = false;
const ListName = Utils.getRandomListName();

describe('Trello List Functionality Functionality', function() {

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
      
    it('Create List',function(){  

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

});