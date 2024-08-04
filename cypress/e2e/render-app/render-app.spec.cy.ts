describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("The app must render ok", () => {
    cy.get("img[alt=logo]").should("exist");
  });
  it("Must get the characters info", () => {
    cy.get(".character_list__root").should("exist");
    cy.get(".character_card__root_skelleton").should("exist");

    const searchInput = cy.get("input[type='search']");
    expect(searchInput).to.be.not.null;
    searchInput.should("have.attr", "placeholder", "BUSCAR UN PERSONAJE");

    cy.get("[data-testid=character-card-root]:first", { timeout: 9999999 })
      .should("exist")
      .click();

    cy.get("article[data-testid=details-header-container]").should("exist");
    cy.get("h1")
      .should("exist")
      .then((el) => el.text());
  });
});
