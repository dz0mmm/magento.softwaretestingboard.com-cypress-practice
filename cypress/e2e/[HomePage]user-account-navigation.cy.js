describe('User account actions', () => {
  it('Checking the function of the buttons "My Account", "My Wish List" and "Sign Out"', () => {
    cy.visit('/')

    cy.login('softwaretester0x0x@gmail.com', 'Test0x0x');

    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span").should('have.text', 'Welcome, Software0x0x Tester0x0x!');

    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button').click();
    cy.contains('My Account').click();
    cy.url().should('include', '/customer/account/');
    cy.go('back');

    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button').click();
    cy.contains('My Wish List').click({ force: true });
    cy.url().should('include', '/wishlist/');
    cy.go('back');

    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button').click();
    cy.contains('Sign Out').click({ force: true });
    cy.url().should('include', '/customer/account/logoutSuccess/');
  })
})