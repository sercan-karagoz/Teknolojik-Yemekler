describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5174/orderForm')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5174/')
cy.get('.home-button').click() 
cy.url().should('include', '/orderForm')

cy.get('.price-button').should('be.disabled')

  })
})

describe('OrderForm', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/orderForm'); //arrange
  });
  it('boyut seçilmediğinde', () => {
    
    cy.get('[name="boyut"]').check(); 
 
    cy.get('.price-button').should('be.disabled')
    

  })
})
