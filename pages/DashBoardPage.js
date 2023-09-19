var dashBoardPage = require("../ui/DashBoardPageUI");
export function getTitle() {
  return cy.get(dashBoardPage.labelTitle);
}
