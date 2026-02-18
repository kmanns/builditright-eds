describe("Verify Product List Page", () => {
  it("Verify PLP page loads", { tags: "@snapPercy" }, () => {
    cy.visit("/products");

    // EDS migration smoke: verify route and PLP wrapper are present.
    cy.location("pathname").should("eq", "/products");
    cy.contains("h1", "All Products").should("be.visible");
    cy.get(".product-list-page").should("exist");

    cy.percyTakeSnapshot("Product List page");
  });
});
