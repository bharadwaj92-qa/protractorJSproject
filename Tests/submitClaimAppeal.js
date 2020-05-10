describe('submitting Claim appeal form', function() {

    var appeal_form_page = require('../PageObjects/appeal_form_page.js');
     
    it('user is submitting claim appeal form from the portal', function() {
      browser.get('https://stage.providerexpress.com/trans/loginUser.uol');
      
      browser.driver.manage().window().maximize();
      browser.sleep(2000);
      appeal_form_page.peLoginID('pe_stage');
      appeal_form_page.peLoginPwd('Optumid38!');
      appeal_form_page.peLoginButtn();
      browser.sleep(10000);
      browser.waitForAngularEnabled(false);
      appeal_form_page.facDropDwn('Emerson Hospital (facility)');
      appeal_form_page.claimsDropdwn('Claim Inquiry');
      browser.sleep(6000);
      // browser.waitForAngularEnabled(false);
      appeal_form_page.claimMbrIDSearch('994061055','SUSHIL');
      browser.sleep(5000);
     
      
    });
  });