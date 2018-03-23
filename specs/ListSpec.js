const SignUpLogin = require('../pages/SignUpAndLogin');
const Board = require('../pages/Board');
const Utils = require('../pages/Utils');
const List = require('../pages/listFunctionality');
const boardName = Utils.getRandomBoardName();
const privateBoard = false;
const ListName = Utils.getRandomListName();
const AnotherListName = Utils.getRandomListName();

describe('Trello List Functionality Functionality', function() {

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
    
    it('should login in to trello', function() {

        const loginResult = SignUpLogin.login(Utils.getLoginCredentials());
        expect(loginResult.err).toBe(false);
    
    });

    it("should create a new public board", function() {
        const createResult = Board.createBoard(boardName, privateBoard);
        expect(createResult.err).toBe(false);
    });
      
    it('should create a new List',function(){  

        const createResult = List.createList(ListName);
        expect(createResult.err).toBe(false);
    });

    it('should update a list', function() {

        const updateResult = List.updateList("something new");
        expect(updateResult.err).toBe(false);
  
    });

    it('should archive list',function(){
  
        const archiveResult = List.archiveList();
        expect(archiveResult.err).toBe(false);
  
    });

});