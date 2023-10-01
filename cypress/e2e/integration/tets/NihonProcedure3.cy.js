/// <reference types="cypress" />
var i = 0;
for (i = 0; i < 1 ; i++) {
describe("Create a new applicationNo", () => {
  it("Create appNo", () => {
    cy.visit(
      "https://nissay-application-qa.ekycs.jp/kaiyaku-yen/intro/?clientNo=tnhsq003"
    );
    cy.xpath(
      "//div[contains(text(),'[本サービスご利用にあたっての同意事項]に関する注意事項に同意のうえ、お手続きに進んでください。')]"
    ).scrollIntoView();
    cy.xpath("//ul[3]//li").scrollIntoView();
    cy.get(".v-btn__content").click({force: true});
    cy.get("input[placeholder='タップして入力してください']")
      .first()
      .type("セイ");
    cy.get("input[placeholder='タップして入力してください']")
      .eq(1)
      .type("メイ");
    cy.get("input[placeholder='タップして入力してください']")
      .eq(2)
      .type("19770420");
    cy.get("input[placeholder='3桁']").type("241");
    cy.get("input[placeholder='7桁']").type("1234567");
    cy.xpath("//span[contains(text(),'次に進む')]").click();
    cy.get("#bankSearch").click();
    cy.get("input[placeholder='例）ニッセイ']").first().type("ミズホ");
    cy.get(".search-result>ul").first().click();
    cy.get("#branchSearch").click();
    cy.get("input[placeholder='例）ニッセイ']").eq(1).type("トウ");
    cy.get(".search-result>ul").first().click();
    cy.xpath("//label[contains(text(),'普通')]").click();
    cy.get("input[placeholder='タップして入力してください']")
      .eq(3)
      .type("0123456");
    cy.get("input[placeholder='タップして入力してください']")
      .eq(4)
      .type("セイ");
    cy.get("input[placeholder='タップして入力してください']")
      .eq(5)
      .type("メイ");
    cy.xpath("//span[contains(text(),'確認に進む')]").click();
    cy.xpath("//span[contains(text(),'本人確認へ進む')]").click();
    cy.get(".verification-dialog > .ekyc-btn").click();
    cy.origin("https://mes-qa-dummy-polarify.azurewebsites.net/", () => {
      cy.get("input[value='Choose Doc Type']").click();
      cy.get("ul>li").eq(2).click();
      cy.get("a[class='waves-effect waves-light btn-large']").click();
    });

    cy.get("div.phone-number>div").first().should(
      "have.text",
      "SMS（ショートメッセージサービス）を送信しますので、お使いの携帯電話番号を入力してください。"
    );
  });
});
}
