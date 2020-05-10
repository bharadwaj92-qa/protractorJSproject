var xlData = require('../utils/excelRead.js');

describe('submitting initial review form', function() {

    var initial_review_page = require('../PageObjects/initial_review_page.js');
    var test_data = xlData.read_from_excel('star_SIR','./testData.xlsx');
     
    test_data.forEach(function(data){
      it('user is submitting initial review form', function() {
  
          // console.log("value is:"+data.mbrContAddr+data.mbrContPhone+data.LOC+data.Primary_dx_cd);
         
          browser.get('https://coho-ui-coho-qa.ocp-ctc-core-nonprod.optum.com/qualification?memberId=1703326683&prprId=FAC000006400&pradId=FAC000006400&pradType=002&pradEffDate=1998-02-06%2000:00:00.0');
        
          browser.driver.manage().window().maximize();
          browser.sleep(3000);
          
            // console.log("value is:"+data.mbrContAddr+data.mbrContPhone+data.LOC+data.Primary_dx_cd);
              initial_review_page.mbrContPhone(data.mbrContPhone);
              initial_review_page.mbrContAddr(data.mbrContAddr);
              initial_review_page.reqFromErNO();
              initial_review_page.mbrAdmtdYes();
              initial_review_page.selectLOC(data.LOC);
              initial_review_page.selectAdmitDt(data.Admit_Date);
              initial_review_page.primaryDiagCd(data.Primary_dx_cd);
              browser.sleep(1000);
              initial_review_page.involAdmissn();
              initial_review_page.involAdmissn();
              initial_review_page.mhBenfitType();
              initial_review_page.mdSearchButtn();
              initial_review_page.otherButtn();
              browser.sleep(1000);
              initial_review_page.attendingMdLastName(data.attendingMD_lst_nm);
              initial_review_page.attendingMdFirstName(data.attendingMD_fst_nm);
              initial_review_page.attendingMdPhon(data.attending_phone);
              initial_review_page.urName(data.UR_name);
              initial_review_page.urPhone(data.UR_phone);
              initial_review_page.attest();
              
              browser.sleep(4000);
  
  
            });
  
  
      });
    
  });