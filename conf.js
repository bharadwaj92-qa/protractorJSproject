exports.config={
    allScriptsTimeout: 11000,
jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,

    },
capabilities: {
    browserName: 'chrome',
    chromeOptions:{
        "useAutomationExtension": false,
    }
    
},    
specs: ['./Tests/submitInitialReview.js'],
// specs: ['./Tests/submitClaimAppeal.js'],
// specs: ['./Tests/testDataDemo.js'],
directConnect:true,
chromeDriver:"C:\\ProgramData\\Chrome_driver_78.0.3904.70\\chromedriver.exe"


};