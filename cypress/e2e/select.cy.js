/// <reference types= "cypress"/>

describe("Test związany z wybieraniem Select", () => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit ("/");
        cy.get('a[title="Women"').click();
        cy.url().should("include","id_category=3&controller=category")

    })
    it("Wybranie filtru In stock",() => {
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value","quantity:desc")
    })

    it("Wybranie filtru Product Name: A to Z",() => {
        cy.get("#selectProductSort").select("name:asc")
        cy.get("#selectProductSort").should("have.value", "name:asc")
    })
})
