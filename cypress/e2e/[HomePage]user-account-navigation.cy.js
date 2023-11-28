describe('User account actions', () => {
  const verifyAccountNavigation = (linkText, expectedUrl) => {
    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button').click({ force: true });
    cy.contains(linkText).click({ force: true });
    cy.url().should('include', expectedUrl);
    cy.go('back');
  }

  beforeEach(() => {
    cy.visit('/');
    cy.login('softwaretester0x0x@gmail.com', 'Test0x0x');
    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span").should('have.text', 'Welcome, Software0x0x Tester0x0x!');
  });

  it('checks the functionality of the "My Account", "My Wish List" and "Sign Out" buttons', () => {
    verifyAccountNavigation('My Account', '/customer/account/')
    verifyAccountNavigation('My Wish List', '/wishlist/')
    verifyAccountNavigation('Sign Out', '/customer/account/', '/customer/account/logoutSuccess/')
  });

});
