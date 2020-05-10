
  describe('demo form', function() {

    var initial_review_page = require('../PageObjects/initial_review_page.js');
     
    it('user is submitting demo form', function() {
      browser.get('https://coho-ui-coho-qa.ocp-ctc-core-nonprod.optum.com/qualification?memberId=1703326683&prprId=FAC000006400&pradId=FAC000006400&pradType=002&pradEffDate=1998-02-06%2000:00:00.0');
      
      browser.driver.manage().window().maximize();
      browser.sleep(3000);
      var a = [];
      var count = 0
      a.forEach(data =>{
        if(!count===0){
        initial_review_page.mbrContPhone(data[0]);
        initial_review_page.mbrContAddr();
        initial_review_page.reqFromErNO();
        initial_review_page.mbrAdmtdYes();
        initial_review_page.selectLOC(' Inpatient');
        initial_review_page.selectAdmitDt('12/1/2019');
        initial_review_page.primaryDiagCd('F40.228-Specific phobia, Natural environment');
        browser.sleep(1000);
        initial_review_page.involAdmissn();
        initial_review_page.involAdmissn();
        initial_review_page.mhBenfitType();
        initial_review_page.mdSearchButtn();
        initial_review_page.otherButtn();
        browser.sleep(3000);
        initial_review_page.attendingMdLastName('lastnm');
        initial_review_page.attendingMdFirstName('firstnm');
        initial_review_page.attendingMdPhon('223456789012345');
        
        initial_review_page.urName('utilizationReviewerName');
        initial_review_page.urPhone('323456789012345');
        initial_review_page.attest();
        // initial_review_page.attest();
        // initial_review_page.submitInitialReview();
        browser.sleep(5000);
        }
        count++;
      });
     
      // browser.close(); 
      
      
    });
  });