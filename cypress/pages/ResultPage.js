class ResultPage {
    get searchAlert(){
        return cy.get("p.alert")
    }
    


}

export default new ResultPage();