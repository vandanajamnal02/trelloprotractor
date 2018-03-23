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
  });
  
  it('should login in to trello', function() {

    SignUpLogin.login(Utils.getLoginCredentials());

  });

  it("should create a new public board", function() {
    Board.createBoard(boardName, privateBoard);
  });

  it("should send invite to add new member to a board", function() {
    const email = "vandanavs218@gmail.com";
    Board.addMember(email); 
  });

//   it("should change background", function() {
//     Board.changeBackground();
//     Board.hideRightSidebar();
//   });

//   it("should toggle Left and right sidebar", function() {
//     Board.showRightSidebar();
//     Board.hideRightSidebar();
//     Board.toggleLeftSidebar();
//     Board.toggleLeftSidebar();
//   });

//   it("should toggle favorite status of board", function() {
//     Board.toggleFavorite();
//   });

//   it("should check if board is favorite", function() {
//     const boardToValidate = "Vandana Board 1";
//     const isFavorite = Board.validateBoardIsFavorite(boardToValidate);
//     console.log("Board is favorite --> ", isFavorite);
//   });

});
