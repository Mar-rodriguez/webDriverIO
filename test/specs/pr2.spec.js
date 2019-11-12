import headerPage from '../page-objects/header.page.js'
import authenticationPage from '../page-objects/authentication.page.js'
import createAccountPage from '../page-objects/createAccount.page.js'

describe('second suite, create account', () => {
    it('validation invalid email address', () => {
        headerPage.start();
        authenticationPage.emailCreate.setValue('@endava.com');
        authenticationPage.create();
        expect(authenticationPage.msgValidationCreate()).toEqual('Invalid email address.');
    })

    it('validation existing email address', () => {
        headerPage.start();
        authenticationPage.emailCreate.setValue('adelquis.trinidad@endava.com');
        authenticationPage.create();
        expect(authenticationPage.msgValidationCreate()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');
    })

    it('should be redirected create account', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('mail.newAccount');
        authenticationPage.create();
        expect(browser.getUrl()).toEqual('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    })

    it('Create user happy way', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(browser.getUrl()).toEqual('http://automationpractice.com/index.php?controller=my-account');
        headerPage.SingOut();
    })
    it('Verify radioButton', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.clickGender1();
        createAccountPage.clickGender2();
        expect(createAccountPage.tryRadioButton()).toEqual(true);
    })
    it('Verify title Mr in radioButton',() =>{
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        expect(createAccountPage.titleGender1.getText()).toEqual('Mr.');
    })

    it('Verify title Mrs in radioButton',() =>{
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        expect(createAccountPage.titleGender2.getText()).toEqual('Mrs.');
    })
    
    it('Verify first name field is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('firstname is required.');
    })
    
    it('Verify first name field length', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('NameUnoLoremipsumdolorsitametvolutpat','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('firstname is too long. Maximum length: 32');
    })

    it('Verify first name field cannot start with number', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('1Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('firstname is invalid.');
    })

    it('Verify last name field is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','','abc123');
        browser.pause(3000);
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('lastname is required.');
    })

    it('Verify last name field length', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','LastNameLoremipsumdolorsitametvoo','abc123');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('lastname is too long. Maximum length: 32');
    })

    it('Verify last name field cannot start with number', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','1Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('lastname is invalid.');
    })

    it('Verify email is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.email.setValue('');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('email is required.');
    })
    
    it('Verify email by default', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        expect(createAccountPage.emailDefault()).toEqual(authenticationPage.emailCreated);
    })

    it('Verify validation existing email on personal information area', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.email.setValue('adelquis.trinidad@endava.com');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('An account using this email address has already been registered.');
    })

    it('Verify validation invalid email on personal information area', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.email.setValue('@endava.com');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('email is invalid.');
    })

    it('Verify password field is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester',);
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('passwd is required.');
    })

    it('Verify password field length cannot be less than 5 characters', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','0000');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('passwd is invalid.');
    })

    it('Verify of days', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        expect(createAccountPage.days.getText().replace(/\s+/g,',')).toEqual(',-,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,');
    })

    it('verify months' , () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        //console.log(createAccountPage.months.getText().replace(/\s+/g,','));
        expect(createAccountPage.months.getText().replace(/\s+/g,',')).toEqual(',-,January,February,March,April,May,June,July,August,September,October,November,December,'); 
        
        
    })
    //se rompre xq incluye 1900
    xit('verify years' , () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        //console.log(createAccountPage.years.getText().replace(/\s+/g,','));
        expect(createAccountPage.years.getText().replace(/\s+/g,',')).toEqual(',-,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920,1919,1918,1917,1916,1915,1914,1913,1912,1911,1910,1909,1908,1907,1906,1905,1904,1903,1902,1901,');   
    })

    it('verify validation of day' , () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.dateOfBirth(0,6,2);
        browser.pause(3000);
        createAccountPage.personalValidData('Name','Tester','000000');
        createAccountPage.adressValidData();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('Invalid date of birth');
    })

    it('verify validation of months' , () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.dateOfBirth(20,0,9);
        createAccountPage.personalValidData('Name','Tester','000000');
        createAccountPage.adressValidData();
        browser.pause(3000);
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('Invalid date of birth');
    })
    it('verify validation of years' , () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.dateOfBirth(25,9,0);
        createAccountPage.personalValidData('Name','Tester','000000');
        createAccountPage.adressValidData();
        browser.pause(3000);
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('Invalid date of birth');
    })

    it('verify uniformNewsletter' , () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.clickUniformNewsletter();
        browser.pause(2000)
        expect(createAccountPage.uniformNewsletter.isSelected()).toEqual(true);
    })

    it('verify uniformOptin' , () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotest.');
        authenticationPage.create();
        createAccountPage.clickUniformOptin();
        browser.pause(2000)
        expect(createAccountPage.uniformOptin.isSelected()).toEqual(true);
    })

})
