describe('Login functionality process', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('user login', () => {
    cy.login('softwaretester0x0x@gmail.com', 'Test0x0x');
    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span").should('have.text', 'Welcome, Software0x0x Tester0x0x!');
  });
});