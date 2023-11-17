describe('Registration fucnciality process', () => {
  it('user registration', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a").click();
    cy.get('#firstname').type('Software0x0x');
    cy.get("#lastname").type('Tester0x0x');
    cy.get("#email_address").type('softwaretester0x0x@gmail.com');
    cy.get("#password").type('Test0x0x');
    cy.get("#password-confirmation").type('Test0x0x');
    cy.get("#form-validate > div > div.primary > button").click();
  })
})