var infos = require("../../../../ultils/Infos");
var loginPage = require("../../../../pages/LoginPage");
var dashBoardPage = require("../../../../pages/DashBoardPage");

describe("Test: login successfull", () => {
  it("visit Login page and Input valid account", () => {
    cy.visit(infos.URL);
    loginPage.getTitle().should("have.text".trim(), "Test login");
    loginPage.login(infos.USERNAME, infos.PASSWORD);
    dashBoardPage.getTitle().then(($text) => {
      const text = $text.text();
      cy.log("Title is: " + text);
      expect(text).is.eq("Logged In Successfully");
    });

    dashBoardPage
      .getTitle()
      .should("have.text", "Logged In Successfully");
  });
});
