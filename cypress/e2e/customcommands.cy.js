/// <reference types="cypress"/>

import {login, passwd} from "../fixtures/loginData.json";

describe("Custom commands", () => {
    it("Logowanie do strony automationpractice.pl", () => {
        cy.login(login, passwd);


    })

})