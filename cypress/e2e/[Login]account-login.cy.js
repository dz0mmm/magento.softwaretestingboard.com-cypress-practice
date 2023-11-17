describe('Login process', () => {
  it('user login', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a").click();
    cy.get('#email').type('softwaretester0x0x@gmail.com');
    cy.get("#pass").type('Test0x0x');
    cy.get("#send2").click();

    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span").should('have.text', 'Welcome, Software0x0x Tester0x0x!');
  })
})