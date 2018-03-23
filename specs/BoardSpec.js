const Utils = require("../pages/Utils");
const SignUpLogin = require("../pages/SignUpAndLogin");
const Board = require("../pages/Board");
const boardName = Utils.getRandomBoardName();
const privateBoard = false;

describe("Trello Board Functionality", function() {
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

  it("should toggle favorite status of board", function() {
    const favResult = Board.toggleFavorite();
    expect(favResult.err).toBe(false);
  });

  it("should check if board is favorite", function() {
    const isFavorite = Board.validateBoardIsFavorite(boardName);
    console.log("Board is favorite --> ", isFavorite);
    expect(isFavorite).toBe(true);
  });

  it("should send invite to add new member to a board", function() {
    const email = "vandanavs218@gmail.com";
    const addMemberResult = Board.addMember(email); 
    expect(addMemberResult.err).toBe(false);
    
    const hideResult = Board.hideRightSidebar();
    expect(hideResult.err).toBe(false);
  });

  it("should change background", function() {
    const backgroundResult = Board.changeBackground();
    expect(backgroundResult.err).toBe(false);

    const hideResult = Board.hideRightSidebar();
    expect(hideResult.err).toBe(false);
  });

  it("should toggle Left and right sidebar", function() {
    const showResult = Board.showRightSidebar();
    expect(showResult.err).toBe(false);

    const hideResult = Board.hideRightSidebar();
    expect(hideResult.err).toBe(false);

    const toggleResult = Board.toggleLeftSidebar();
    expect(toggleResult.err).toBe(false);

    const toggleResult2 = Board.toggleLeftSidebar();
    expect(toggleResult2.err).toBe(false);
  });

});
