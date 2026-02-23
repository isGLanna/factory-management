describe('Product Suggestion Flow', () => {
  beforeEach(() => {
    cy.visit('/production-suggestion')
  })

  it('should calculate max production for a given product', () => {
    const productName = 'product_test'
    const mockResponse = {
      name: productName,
      amount: 15,
      income: 15000,
      cost: 5000
    }

    cy.intercept('GET', `**/max-production?name=${productName}`, {
      statusCode: 200,
      body: mockResponse,
    }).as('getMaxProduction')

    cy.get('input[placeholder="Limite de produção para..."]').type(productName)


    cy.get('form').submit()

    cy.wait('@getMaxProduction')

    cy.get('[data-testid="production-suggestion-table"]').should('be.visible').within(() => {
      cy.get('tbody tr').should('have.length', 1)

      cy.contains('th', '15').should('be.visible')
      cy.contains('th', '150.00').should('be.visible')
      cy.contains('th', '50.00').should('be.visible')

      cy.get('svg').click()
    })

    cy.get('[data-testid="pending-production-table"]').should('exist').within(() => {
      cy.get('tbody tr').should('have.length', 1)

      cy.contains('th', '15').should('be.visible')
      cy.contains('th', '150.00').should('be.visible')
      cy.contains('th', '50.00').should('be.visible')
    })
  })
})