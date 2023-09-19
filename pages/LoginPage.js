/// <reference types="Cypress"/>
var loginPage = require("../ui/LoginPageUI");

export function getTitle() {
  return cy.get(loginPage.labelTitle);
}

export function login(username, password) {
  cy.get(loginPage.txtUserName)
    .type(username)
    .should("have.text".trim, "student");
  cy.get(loginPage.txtPassWord)
    .type(password)
    .should("have.text".trim, "Password123");
  cy.get(loginPage.btnLogin)
    .click()
    .then(function (linkText) {
      cy.log("Click on button: " + linkText.text());
    });
}
