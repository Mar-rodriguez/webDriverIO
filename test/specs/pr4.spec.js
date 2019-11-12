import headerPage from '../page-objects/header.page.js'
import authenticationPage from '../page-objects/authentication.page.js'
import forgotPasswordPage from '../page-objects/forgotPassword.page.js'
import { EADDRNOTAVAIL } from 'constants'

describe('forgot password', () => {
    it('behavior link forgot password', () => {
        headerPage.start();
        authenticationPage.forgotPassword.click();
        forgotPasswordPage.submitPass.click();
        expect(forgotPasswordPage.msgInitial.getText()).toEqual('Please enter the email address you used to register. We will then send you a new password.');
    })
    it('verify invalid email', () => {
        headerPage.start();
        authenticationPage.forgotPassword.click();
        forgotPasswordPage.emailPass.setValue('@endava.com');
        forgotPasswordPage.submitPass.click();
        expect(forgotPasswordPage.msgValidationPass()).toEqual('Invalid email address.');
    })
    it('verify unexistinng email', () => {
        headerPage.start();
        authenticationPage.forgotPassword.click();
        forgotPasswordPage.emailPass.setValue('nuevo4@endava.com');
        forgotPasswordPage.submitPass.click();
        expect(forgotPasswordPage.msgValidationPass()).toEqual('There is no account registered for this email address.');

    })
    it('verify retrive password button', () => {
        headerPage.start();
        authenticationPage.forgotPassword.click();
        forgotPasswordPage.emailPass.setValue('marilin.rodriguez.mercanzini@gmail.com');
        forgotPasswordPage.submitPass.click();
        expect(forgotPasswordPage.confirm.getText()).toEqual('A confirmation email has been sent to your address: marilin.rodriguez.mercanzini@gmail.com');
    })
})
