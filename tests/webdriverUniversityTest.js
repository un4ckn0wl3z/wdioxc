describe("Verify whether webdriveruniversity links on homepage work correctly", function(){
	it("check that the contact us button opens the contact us page", function(done){
		//return browser
		browser.setViewportSize({
			width: 1200,
			height: 800
		});
		browser.url('/');
		const title = browser.getTitle();
		console.log('Title is: ' + title);
		browser.click('#contact-us');
		browser.pause(3000);
	});

	it("check that the login button opens the login portal page", function(done){
		//return browser
		browser.url('/');
		browser.click('#login-portal');
		const title = browser.getTitle();
		console.log('Title is: ' + title);
		browser.pause(3000);
	});
})