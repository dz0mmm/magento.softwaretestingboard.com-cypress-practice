describe('Re-registration process', () => {
  it('assertion of error message when re-registering the same user', () => {
    cy.visit('/')

    cy.register('Software0x0x', 'Tester0x0x', 'softwaretester0x0x@gmail.com', 'Test0x0x', 'Test0x0x')

    cy.get("#maincontent > div.page.messages > div:nth-child(2) > div > div > div").should('have.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  })
})