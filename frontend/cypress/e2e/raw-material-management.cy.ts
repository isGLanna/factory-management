describe("Raw Material test", () => {
  const material = "material test"

  beforeEach(() => {
    cy.visit('http://localhost:5173/raw-material-management')
  })

  it('should create raw material', () => {
    cy.contains("Incluir matéria-prima").click()

    cy.get('input[name="name"]').type('material test')
    cy.get('input[name="amount"]').type('100')

    cy.contains("button", "Salvar").click()

    cy.contains(".card-container", material).should("be.visible")
    cy.contains(".card-container", material).contains('100').should("be.visible")
  })

  it('should delete raw material', () => {
    cy.contains(".card-container", material).within(() => {
      cy.get("svg").first().click()
      cy.contains("li", "Remover").click()
    })

    cy.get('.item-form-modal').should('be.visible')
    cy.contains('button', 'Excluir').click()

    cy.contains('.card-container', material).should('not.exist')
  })
})