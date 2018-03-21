

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://trello.com');
    });

    it('login in to trello',function(){

        console.log('trying to login');

        element(by.xpath("//a[@class='global-header-section-button']")).click();
        browser.sleep(5000);
        element(by.id("user")).sendKeys("uitesterSix@yopmail.com");
        element(by.id("password")).sendKeys("uitest@123");
        element(by.id("login")).click();
        browser.sleep(5000);

    });

    

  });
  
  