/// <reference types="cypress" />

describe("Google", () => {
    it("Google", () => {
        cy.visit("https://www.google.com/");
        cy.get('textarea[type="search"]').type("nguyen quoc bao");

        
    });
})