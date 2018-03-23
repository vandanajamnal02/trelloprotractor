# Trello Testing Task

### The project is a small testing suite for Trello Web Application testing using ProtractorJS framework.

### Source
The source code of the project can be found on this Github using this link
[TrelloProtractor](https://github.com/vandanajamnal02/trelloprotractor)

### Installation

The project requires [Node.js](https://nodejs.org/) to run.
Install the dependencies using following command.

```sh
$ npm install
```

### Configuration

  - Run package.json file using command "npm install" to install dependencies
  - Make sure WebDriver is pre-installed in the machine
  - Run webdriver in a separate terminal window using following two commands
  - ```sh
    $ webdriver-manager update
    ```
  - ```sh
    $ webdriver-manager start
    ```
  > keep running the webdriver manager during entire testing session
  ### Running tests
  
###### Testing Login and Sign Up
  - Run this command in terminal
  - ```sh
    $ npm run signup-login
    ```
    
###### Testing Board Functionality
  - Run this command in terminal
  - ```sh
    $ npm run board
    ```
###### Testing List Functionality
  - Run this command in terminal
  - ```sh
    $ npm run list
    ```
    
###### Testing Card Functionality
  - Run this command in terminal
  - ```sh
    $ npm run card
    ```
