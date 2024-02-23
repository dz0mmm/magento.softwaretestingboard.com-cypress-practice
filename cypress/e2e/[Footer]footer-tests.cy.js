describe("Footer Section Tests", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should display the footer section", () => {
      cy.get("footer").should("be.visible");
    });
  
    it("should have a search terms link that navigates correctly", () => {
      cy.get("footer a")
        .contains("Search Terms")
        .then((link) => {
          const href = link.prop("href");
          expect(href).to.contain("/search/term/popular/");
          cy.visit(href);
        });
    });
  
    it("should have a privacy policy link that navigates correctly", () => {
      cy.get("footer a")
        .contains("Privacy and Cookie Policy")
        .then((link) => {
          const href = link.prop("href");
          expect(href).to.contain("/privacy-policy-cookie-restriction-mode");
          cy.visit(href);
        });
    });
  
    it("should have a advanced search link that navigates correctly", () => {
      cy.get("footer a")
        .contains("Advanced Search")
        .then((link) => {
          const href = link.prop("href");
          expect(href).to.contain("/catalogsearch/advanced/");
          cy.visit(href);
        });
    });
  
    it("should have a orders and returns link that navigates correctly", () => {
      cy.get("footer a")
        .contains("Orders and Returns")
        .then((link) => {
          const href = link.prop("href");
          expect(href).to.contain("/sales/guest/form/");
          cy.visit(href);
        });
    });
  
    it("should contain copyright information", () => {
      cy.get(".copyright").contains("Copyright © 2013-present Magento");
    });
  });