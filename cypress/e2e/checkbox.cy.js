/// <reference types= "cypress"/>

import Base from "../pages/Base";
import Home from "../pages/Home";
import Women from "../pages/Women";

describe("Test związany z zaznaczaniem checkboxów", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category")
    })

    it("Zaznaczenie checkboxa w zakładce Women", () => {
        Women.checkTops();
        Women.topsCheckbox.should("be.checked")
        Women.checkDresses();
        Women.checkSize();

    })
      
})