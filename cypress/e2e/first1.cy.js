/// <reference types= "cypress"/>

describe("Mój pierwszy test automatyczny", () => {
    it("Otworzenie strony Automatioc Practice", () => {
        cy.visit ("http://www.automationpractice.pl");
    
    })
})