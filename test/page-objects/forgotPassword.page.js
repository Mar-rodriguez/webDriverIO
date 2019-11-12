class forgotPassword {
    //get TextPassword() {return $('//*[@id="center_column"]/div/p/..')} 
    get submitPass()  {return $('#form_forgotpassword > fieldset > p > button > span')}  
    get emailPass()  {return $('#email')}
    get validationPass () {return $('#center_column > div > div > ol > li')}
    get confirm() {return $('#center_column > div > p')}
    get msgInitial() {return $('.box > p')}

    msgValidationPass(){
        return this.validationPass.getText();
    }
}
export default new forgotPassword()