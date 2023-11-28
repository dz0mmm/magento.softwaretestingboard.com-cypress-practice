describe('Registration fucnciality process', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('user registration', () => {
    cy.register('Software0x0x', 'Tester0x0x', 'softwaretester0x0x@gm.com', 'Test0x0x', 'Test0x0x');
    cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').should('have.text', 'Thank you for registering with Main Website Store.');
  });
});