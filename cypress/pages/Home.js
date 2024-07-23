class Home {

    get WomenTab() {
        return cy.get('a[title="Women"]')
    }
    
    clickOnWomenTab(){
        this.WomenTab.click();
    }


}

export default new Home();