describe('Registration process', () => {
  it('assertion of error message when re-registering the same user', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a").click();
    cy.get('#firstname').type('Software0x0x');
    cy.get("#lastname").type('Tester0x0x');
    cy.get("#email_address").type('softwaretester0x0x@gmail.com');
    cy.get("#password").type('Test0x0x');
    cy.get("#password-confirmation").type('Test0x0x');
    cy.get("#form-validate > div > div.primary > button").click();

    cy.get("#maincontent > div.page.messages > div:nth-child(2) > div > div > div").should('have.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  })
})