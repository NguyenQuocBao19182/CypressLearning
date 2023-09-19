/// <reference types="cypress" />
import HomePage_PO from "../../../support/webdriver-uni/HomePage_PO.cy";
import Contact_Us_PO from "../../../support/webdriver-uni/Contact_Us_PO.cy";
describe("Test Contact Us form via WebdriverUni", () => {
  const homePage_PO = new HomePage_PO();
  const contact_Us_PO = new Contact_Us_PO();
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    homePage_PO.visitHomePage();
    homePage_PO.clickOn_ContacUs_Button();
  });

  it.only("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");

    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
