context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:3333/')

    cy.get('#input').type('Vitesse{Enter}').url().should('eq', 'http://localhost:3333/hi/Vitesse')
  })
})
