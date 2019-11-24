var commands = {
    spiderman: function (spideyInfo){
        this
        .click('@newEmployee')
        .click('@name')
        .clearValue('@name')
        .setValue('@name', spideyInfo.name)
        .clearValue('@phone')
        .setValue('@phone', spideyInfo.phone)
        .clearValue('@email')
        .setValue('@email', spideyInfo.email)
        .clearValue('@title')
        .setValue('@title', spideyInfo.title)
        .click('@save')
        .click('@addEmployee')
        .click('@spiderman')
        .verify.valueContains('@name', spideyInfo.name)
        .verify.valueContains('@phone',spideyInfo.phone)
        .verify.valueContains('@email', spideyInfo.email)
        .verify.valueContains('@title', "Spider-Man")
        .click('@delete')
        .api.acceptAlert()
        .waitForElementNotPresent('@spiderman')
        return this 
    },    
    greenGoblin: function (goblinInfo){
        this
        .click('@newEmployee')
        .click('@name')
        .clearValue('@name')
        .setValue('@name', goblinInfo.name)
        .clearValue('@phone')
        .setValue('@phone', goblinInfo.phone)
        .clearValue('@email')
        .setValue('@email', goblinInfo.email)
        .clearValue('@title')
        .setValue('@title', goblinInfo.title)
        .click('@save')
        .click('@addEmployee')
        .click('@greenGoblin')
        .verify.valueContains('@name', goblinInfo.name)
        .verify.valueContains('@phone', goblinInfo.phone)
        .verify.valueContains('@email', goblinInfo.email)
        .verify.valueContains('@title', goblinInfo.title)
        .click('@delete')
        .api.acceptAlert()
        .waitForElementNotPresent('@greenGoblin')
        return this
    }
}    
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [commands],
     elements: {
        spiderman:{
            selector: '//li[text()="Peter Parker"]',
            locateStrategy: 'xpath'
        },
        greenGoblin:{
            selector: '//li[text()="Norman Osbourne"]',
            locateStrategy: 'xpath'
        },
        addEmployee:{
            selector: '//li[@name="addEmployee"]',
            locateStrategy: 'xpath'
        },
        newEmployee:{
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        name:{
            selector: '//input[@name="nameEntry"]',
            locateStrategy: 'xpath'
        },
        phone:{
            selector: '//input[@name="phoneEntry"]',
            locateStrategy: 'xpath'
        },
        email:{
            selector: '//input[@name="emailEntry"]',
            locateStrategy: 'xpath'
        },
        title:{
            selector: '//input[@name="titleEntry"]',
            locateStrategy: 'xpath'
        },
        save:{
            selector: '//button[@name="save"]',
            locateStrategy: 'xpath'
        },
        cancel:{
            selector: '//button[@name="cancel"]',
            locateStrategy: 'xpath'
        },
        delete:{
            selector: '//button[@name="delete"]',
            locateStrategy: 'xpath'
        }
    }
}