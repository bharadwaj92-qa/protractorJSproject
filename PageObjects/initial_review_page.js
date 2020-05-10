var initial_review_page=function(){

    this.mbrContPhone=function(value){
    element(by.xpath("//*[@formcontrolname='memberPhoneAndExt']//input[@formcontrolname='phoneString']")).sendKeys(value);
    };
    this.mbrContAddr=function(value){
    element(by.xpath("//*[@formcontrolname='memberAddress' and @id='member-address']")).sendKeys(value);
    };

    this.reqFromErNO=function(){
    element(by.xpath("//mat-radio-button[@id='isRequestFromERNo']")).click();
    };
    this.mbrAdmtdYes=function(){
    element(by.xpath("//mat-radio-button[@id='isMemberAdmittedYes']")).click();
    };

   this.selectLOC=function(value){
   element(by.xpath("//div[@class='mat-select-arrow-wrapper']")).click();
   element(by.cssContainingText('mat-option .mat-option-text', value)).click();
   };
   this.selectAdmitDt=function(value){
    element(by.xpath("//*[@formcontrolname='admitDate' and @id='admitDate']")).sendKeys(value);
    };
    this.primaryDiagCd=function(value){
    element(by.xpath("//*[@formcontrolname='primaryDiagnosis' and @id='primaryDiagnosis']")).sendKeys(value);
    element(by.cssContainingText('mat-option .mat-option-text', value)).click();
    };

    this.involAdmissn=function(){
    // element(by.xpath("//mat-radio-button[@id='isInvoluntaryAdmissionNo']")).click();
    element(by.xpath("//mat-radio-group[@formcontrolname='isInvoluntaryAdmission']//mat-radio-button[@id='isInvoluntaryAdmissionNo']")).click();
    };
    this.mhBenfitType=function(){
    element(by.xpath("//mat-radio-button[@id='benefitTypeMentalHealth']")).click();
    };



    this.mdSearchButtn=function(){
    element(by.xpath("//*[@id='mdSearchButton']")).click();
    };
    this.otherButtn=function(){
    element(by.xpath("//*[@id='otherButton']")).click();
    };

    this.attendingMdLastName=function(value){
    element(by.xpath("//*[@id='attendingMdLastName']")).sendKeys(value);
    };
    this.attendingMdFirstName=function(value){
    element(by.xpath("//*[@id='attendingMdFirstName']")).sendKeys(value);
    };
    this.attendingMdPhon=function(value){
    element(by.xpath("//phone-number-input[@id='phone-number-input-1']//input")).sendKeys(value);
    };

    
   this.urName=function(value){
    element(by.id('urName')).sendKeys(value);
    };
    this.urPhone=function(value){
    element(by.xpath("//phone-number-input[@id='phone-number-input-2']//input")).sendKeys(value);
    };
    this.attest=function(){
    // element(by.xpath("//mat-checkbox[@formcontrolname='attestation']//input[@id='attestation-input']")).click
    // element(by.xpath("//div[@class='mat-checkbox-inner-container']//input[@id='attestation-input']")).click
    element(by.cssContainingText('mat-checkbox .mat-checkbox-label', " Is all the information you provided accurate and reflected in the patient's medical record? ")).click();
    };
    this.submitInitialReview=function(){
    // element(by.xpath("//button[@id='submitButton']//span[@class='mat-button-wrapper']")).click();
    element(by.xpath("//*[@id='submitButton']")).click();
    };


};
module.exports=new initial_review_page();