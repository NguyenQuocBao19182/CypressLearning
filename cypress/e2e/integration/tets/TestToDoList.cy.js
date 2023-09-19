describe("Test: WebDriver To Do list", () => {
  it("I navigate to the WebdriverUniversity homepage and Click ToDo List", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#to-do-list").invoke("removeAttr", "target").click();
    clickInToDoList("Go to potion class");
  });
});

// function clickInToDoList(toDoItem) {
//   cy.get("ul>li").then(($list) => {
//     let existElement = false;
//     for (let i = 0; i < $list.length; i++) {
//       const text = Cypress.$($list[i]).text();
//       if (text.trim() === toDoItem.trim()) {
//         cy.wrap($list[i]).click();
//         existElement = true;
//       }
//     }
//     if (!existElement) {
//       cy.log("Element " + toDoItem + " no exist");
//     }
//   });
// }

function clickInToDoList(toDoItem) {
  cy.get("ul>li").each(($e1, index, $list) => {
    const text = $e1.text();
    if (text.trim() === toDoItem) {
      cy.wrap($e1).click();
    } else {
      cy.log("Element " + toDoItem + " no exist");
    }
  });
}
