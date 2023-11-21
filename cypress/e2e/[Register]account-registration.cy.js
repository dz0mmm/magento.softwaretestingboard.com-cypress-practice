describe('Registration fucnciality process', () => {
  it('user registration', () => {
    cy.visit('/')

    cy.register('Software0x0x', 'Tester0x0x', 'softwaretester0x0x@gmail.com', 'Test0x0x', 'Test0x0x')
  })
})