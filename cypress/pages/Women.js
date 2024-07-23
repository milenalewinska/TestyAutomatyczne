class Women {
    get topsCheckbox() {
        return cy.get("#layered_category_4")
            
    }

    get dressesCheckbox() {
        return cy.get("#layered_category_8")
    }

    get sizeCheckbox() {
        return cy.get("#ul_layered_id_attribute_group_1 input")
    }

    checkTops(){
        this.topsCheckbox.check();
    }

    checkDresses(){
        this.dressesCheckbox.check();
    }

    checkSize(){
        this.sizeCheckbox.check();
    }
}

export default new Women();