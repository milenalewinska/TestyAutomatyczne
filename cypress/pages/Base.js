class Base {
    openHomePage() {
        cy.visit("/")
    }

}

export default new Base();