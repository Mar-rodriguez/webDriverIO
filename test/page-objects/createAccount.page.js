class CreateAccountPage {
    get gender1() {return $('#id_gender1')}
    get gender2() {return $('#id_gender2')}
    get titleGender1(){return $('//*[@id="uniform-id_gender1"]/..')}
    get titleGender2(){return $('//*[@id="uniform-id_gender2"]/..')}
    get customerFirstN() {return $('#customer_firstname')}
    get customerLastN() {return $('#customer_lastname')}
    get email() {return $('#email')}
    get city() {return $('#city')}
    get postCode() {return $('#postcode')}
    get country() {return $ ('#id_country')}
    get phone() {return $('#phone')}
    get submitAccount() {return $('#submitAccount')}
    get state() {return $('#id_state')}
    get password() {return $('#passwd')}
    get adress1() {return $('#address1')}
    get validation() {return $('.alert li')}
    get days() {return $('#days')}
    get months() {return $('#months')}
    get years() {return $('#years')}
    get uniformNewsletter(){return $('#newsletter')}
    get uniformOptin(){return $('#optin')}
    get firstName(){return $('#firstname')}
    get lastName(){return $('#lastname')}
    get addressAlia() {return $('#address_alias')}

    clickGender1(){
        this.gender1.click()
    }
    clickGender2(){
        this.gender2.click()
    }
    clickUniformNewsletter(){
        this.uniformNewsletter.click();
    }
    clickUniformOptin(){
        this.uniformOptin.click();
    }

    tryRadioButton(){
        return this.gender1.isSelected() != this.gender2.isSelected();
    }

    selectCountry(x){
        this.country.selectByVisibleText(x)
    }
    selectState(x){
        this.state.selectByVisibleText(x)
    }
    submit() {
        this.submitButton.click()
    }

    submitLogin() {
        this.submitLoginButton.click()
    }

    msgValidation(){
        return this.validation.getText();
    }

    emailDefault(){
        this.email.getValue();
    }

    adressValidData(){
        this.adress1.setValue('calle falsa 1234');
        this.city.setValue('City1');
        this.selectCountry('United States');
        this.selectState('Alabama');
        this.postCode.setValue('20000')
        this.phone.setValue('0341234987');
    }

    personalValidData(x,y,p){
        this.customerFirstN.setValue(x);
        this.customerLastN.setValue(y);
        this.password.setValue(p);
    }

    dateOfBirth(d,m,y){
        this.days.selectByIndex(d);
        this.months.selectByIndex(m);
        this.years.selectByIndex(y);       
    }
}

export default new CreateAccountPage()