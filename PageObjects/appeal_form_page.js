var appeal_form_page=function(){

    this.peLoginID=function(value){
    element(by.id('userNameId_input')).sendKeys(value);
    };
    this.peLoginPwd=function(value){
    element(by.id('passwdId_input')).sendKeys(value);
    };
    this.peLoginButtn=function(){
    element(by.id('SignIn')).click();
    };
     
    // The below script is to choose the required the Provider
    this.facDropDwn=function(value){
    element(by.xpath("//div[@class='gnav-text' and @id='gnav-welcome']")).click();
    var changeProv=element(by.xpath("//div[@class='welcome-menu-item' and @id='changeProvider']"));
    browser.actions().mouseMove(changeProv).perform();
    element(by.cssContainingText('div.change-provider-text', value)).click();
    };
    // The below script is to choose the Claim enquiry page 
    this.claimsDropdwn=function(value){
    element(by.xpath("//img[@id='menu2Arrow' and @src='commons/new-ui/images/clinician_information/u493.png']")).click();
    element(by.cssContainingText('div.home-menu-item-text-pos', value)).click();
    };
    //Th below script to do the member ID search
    this.claimMbrIDSearch=function(value1,value2){
    element(by.linkText('Member ID Search')).click();
    element(by.xpath("//input[@name='memberId' and @type='text']")).sendKeys(value1);
    element(by.xpath("//input[@name='firstName' and @type='text']")).sendKeys(value2);
    browser.sleep(1000);
    element(by.xpath("//input[@value='search']")).click();
    };

    

    

    


};
module.exports=new appeal_form_page();