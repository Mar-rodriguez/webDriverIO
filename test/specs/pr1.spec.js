import authenticationPage from '../page-objects/authentication.page.js'
import headerPage from '../page-objects/header.page.js'

describe('first suite', () => {
    it('should have the right title', () => {
        headerPage.open();
        expect(headerPage.title()).toEqual('My Store');
    })
    it('Verify the functionality of "Sing in"', () => {
        headerPage.open();
        headerPage.submit()
        expect(browser.getUrl()).toEqual('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    })
    it('Verify the functionality of the "breadcrumb"', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.breadcrumb();
        expect(browser.getUrl()).toEqual('http://automationpractice.com/index.php');
    })
   
    it('validation non existing email', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('mail@endava.com');
        authenticationPage.password.setValue('abc12999993');
        authenticationPage.login();
        expect(authenticationPage.msgValidationLogin()).toEqual('Authentication failed.');
    })

    it('validation of required email', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('');
        authenticationPage.password.setValue('abc123');
        authenticationPage.login();
        expect(authenticationPage.msgValidationLogin()).toEqual('An email address required.');
    })
    it('validation of required password', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('adelquis.trinidad@endava.com');
        authenticationPage.login();
        expect(authenticationPage.msgValidationLogin()).toEqual('Password is required.');
    })
    it('validation of invalid email(without @)', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('adelquis.trinidadendava.com');
        authenticationPage.password.setValue('abc123');
        authenticationPage.login();
        expect(authenticationPage.msgValidationLogin()).toEqual('Invalid email address.');
    })
    it('validation of invalid email(without .com)', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('adelquis.trinidad@endava');
        authenticationPage.password.setValue('abc123');
        authenticationPage.login();
        expect(authenticationPage.msgValidationLogin()).toEqual('Invalid email address.');
    })
    it('validation of invalid email (first part)', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('@endava.com');
        authenticationPage.password.setValue('abc123');
        authenticationPage.login();
        expect(authenticationPage.msgValidationLogin()).toEqual('Invalid email address.');
    })
    it('validation of invalid email (second part)', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('adelquis.trinidad@.com');
        authenticationPage.password.setValue('abc123');
        authenticationPage.login();
        expect(authenticationPage.msgValidationLogin()).toEqual('Invalid email address.'); 
    })
    it('should demonstrate the right login', () => {
        headerPage.open();
        headerPage.submit();
        authenticationPage.emailLogin.setValue('adelquis.trinidad@endava.com');
        authenticationPage.password.setValue('abc123');
        authenticationPage.login();
        expect(browser.getUrl()).toEqual('http://automationpractice.com/index.php?controller=my-account');
        headerPage.SingOut();
    })

})