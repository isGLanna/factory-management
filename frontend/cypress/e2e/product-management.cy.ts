describe('Product Management Tests', () => {
    const productName = 'Product Test'
  
    beforeEach(() => {
      cy.visit('http://localhost:5173')
    })

    it('should create a product', () => {
      cy.contains("Incluir produto").click()
  
      cy.get('input[name="name"]').type(productName)
      cy.get('input[name="stock"]').type("10")
      cy.get('input[name="price"]').type("1000")
      
      // Testar inserção de matéria-prima
      cy.contains("button", "Adicionar material").click()
      cy.get('.materials-list .row').first().within(() => {
        cy.get('input').first().type("test")
        cy.get('input[type="number"]').type("5")
      })

      // Removido para evitar criar mocks, caso a matéria-prima não exista
      cy.get('.btn-delete').click()
  
      cy.contains("button", "Salvar").click()
  
      cy.contains('.card-container', productName).should('be.visible')
      cy.contains('.card-container', productName).contains("10.00").should('be.visible')
    })
  
    it('should delete a product', () => {
      cy.contains('.card-container', productName).within(() => {
        cy.get('svg').first().click()
        cy.contains('li', 'Remover').click()
      })
  
      cy.get('.item-form-modal').should('be.visible')
      cy.contains('button', 'Excluir').click()
  
      cy.contains('.card-container', productName).should('not.exist')
    })
  })
