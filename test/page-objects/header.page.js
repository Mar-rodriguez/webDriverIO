class HeaderPage {
    get submitButton() {return $('.login')}
    get contactUs() {return $('#contact-link')}
    get singOutButton() {return $('.logout')}

    open() {
        browser.url('')
    }
    title(){
        return browser.getTitle();
    }

    submit() {
        this.submitButton.click()
    }

    contact(){
        this.contactUs.click()
    }

    SingOut(){
        this.singOutButton.click();
    }
    start() {
        this.open();
        this.submit();
    }
}
export default new HeaderPage()