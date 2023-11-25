describe('Add, update and delete product', () => {
  it('functionality of adding, updating and deleting a product', () => {
    cy.visit('/')

    cy.login('softwaretester0x0x@gmail.com', 'Test0x0x');

    cy.get("body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a").click({ force: true });
    cy.url().should('include', '/checkout/cart/');
    cy.get("#maincontent > div.page-title-wrapper > h1 > span").should('have.text', 'Shopping Cart');
    cy.get("#maincontent > div.columns > div > div.cart-empty > p:nth-child(1)").should('have.text', 'You have no items in your shopping cart.');
    cy.get("#maincontent > div.columns > div > div.cart-empty > p:nth-child(2)").should('have.text', 'Click here to continue shopping. ');
    cy.get("#maincontent > div.columns > div > div.cart-empty > p:nth-child(2) > a").click({ force: true });

    cy.get("#option-label-size-143-item-167").click({ force: true });
    cy.get("#option-label-color-93-item-56").click({ force: true });
    cy.get("#maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(1) > div").realHover();
    cy.get("#maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(1) > div > div > div.product-item-inner > div > div.actions-primary > form > button").click({ force: true });

    cy.get("#maincontent > div.page.messages > div:nth-child(2) > div > div > div").should('have.text', '\nYou added Radiant Tee to your shopping cart.');
    cy.get("#maincontent > div.page.messages > div:nth-child(2) > div > div > div > a").click({ force: true });

    cy.get("#shopping-cart-table > tbody > tr.item-actions > td > div > a.action.action-edit").click({ force: true });
    cy.get('#option-label-size-143-item-168').click({ force: true });
    cy.get('#option-label-color-93-item-57').click({ force: true });
    cy.get("input[title='Qty']").clear();
    cy.get("input[title='Qty']").type('2');
    cy.get("#product-updatecart-button").click({ force: true });

    cy.get("#maincontent > div.page.messages > div:nth-child(2) > div > div > div").should('have.text', 'Radiant Tee was updated in your shopping cart.');
    cy.get("#shopping-cart-table > tbody > tr.item-actions > td > div > a.action.action-delete").click({ force: true });

    cy.get("#maincontent > div.columns > div > div.cart-empty > p:nth-child(1)").should('have.text', 'You have no items in your shopping cart.');
    cy.get("#maincontent > div.columns > div > div.cart-empty > p:nth-child(2)").should('have.text', 'Click here to continue shopping. ');
  })

})