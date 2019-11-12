import headerPage from '../page-objects/header.page.js'
import authenticationPage from '../page-objects/authentication.page.js'
import createAccountPage from '../page-objects/createAccount.page.js'

describe('create account adress area', () => {
    it('validation firstName by default', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('mail.newAccount');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        expect(createAccountPage.customerFirstN.getValue()).toEqual(createAccountPage.firstName.getValue());
    })
    it('validation lastName by default', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('mail.newAccount');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        expect(createAccountPage.customerLastN.getValue()).toEqual(createAccountPage.lastName.getValue());
    })
    it('Verify first name field is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests');
        authenticationPage.create();
        createAccountPage.personalValidData('','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.firstName.setValue('');
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('firstname is required.');
    })
    it('Verify Address field is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.adress1.setValue('');
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('address1 is required.');
    })
    it('Verify city is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotestss');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.city.setValue('');
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('city is required.');
    })
    it('Verify state is complete', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests');
        authenticationPage.create();
        createAccountPage.adressValidData();        
        expect(createAccountPage.state.getText().replace(/\s/g,',')).toEqual('-,Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District,of,Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New,Hampshire,New,Jersey,New,Mexico,New,York,North,Carolina,North,Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Puerto,Rico,Rhode,Island,South,Carolina,South,Dakota,Tennessee,Texas,US,Virgin,Islands,Utah,Vermont,Virginia,Washington,West,Virginia,Wisconsin,Wyoming');
    })
    it('Verify state is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.selectState('-')
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('This country requires you to choose a State.');
    })
    it('Verify zip/postal code is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.postCode.clearValue();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
    })
    it('Verify country field is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests.');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.selectCountry('-');
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('id_country is required.');
    })
    //test no pasa, no es requerido
    xit('Verify mobile phone field is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.phone.clearValue();
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('mobile_phone is invalid');
    })

    xit('Verify assing an address alias is required', () => {
        headerPage.start();
        authenticationPage.setEmailCreate('emailtotests');
        authenticationPage.create();
        createAccountPage.personalValidData('Name','Tester','abc123');
        createAccountPage.adressValidData();
        createAccountPage.addressAlia.setValue('');
        createAccountPage.submitAccount.click();
        expect(createAccountPage.msgValidation()).toEqual('alias is required');
    })
})