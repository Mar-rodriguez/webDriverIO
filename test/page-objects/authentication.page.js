class AuthPage {
    get breadcrumbIcon() {return $('.icon-home')}
    //login
    get emailLogin() {return $('#email')}
    get password() {return $('#passwd')}
    get submitLogin() {return $('#SubmitLogin')}
    get validation() {return $('.alert-danger li')}
    //create
    get emailCreate() {return $('#email_create')}
    get submitCreate() {return $('#SubmitCreate')}
    get validationCreate() {return $('#create_account_error li')}
    //forgotPassword
    get forgotPassword(){return $('//*[@id="login_form"]/div/p[1]/a')}

    open() {
        browser.url('');
    }

    breadcrumb(){
        this.breadcrumbIcon.click();
    }
    login() {
        this.submitLogin.click();
    }

    create() {
        this.submitCreate.click();
    }

    msgValidationLogin(){
        return this.validation.getText();
    }
    msgValidationCreate(){
        return this.validationCreate.getText();
    }
    setEmailCreate(s){
        let x = (Math.trunc(Math.random()*1000)).toString();
        let y = (Math.trunc(Math.random()*10)).toString();
        var emailCreated = this.emailCreate.setValue(y+s+x+'@endava.com');
        return emailCreated;
    }
}

export default new AuthPage()