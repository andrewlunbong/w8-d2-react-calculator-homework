describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to update the display of running total', ()=>{
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '15')
  })

  it('Should display result of arithmetical calculation', () => {
    cy.get('#number9').click()
    cy.get('#operator-add').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '18')
  })

  it('Should be able to multiple operations be chained together', () => {
    cy.get('#number9').click()
    cy.get('#operator-add').click()
    cy.get('#number9').click()
    cy.get('#operator-divide').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2')

  })

  it('Should give the output as expected for positive numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '45')
  
  })

  it('Should give the output as expected for negative numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number3').click()
    cy.get('#operator-subtract').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-4')
  
  })

  it('Should give the output as expected for decimal numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number3').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.5')
  
  
  })
  it('Should give the output as expected for very large numbers', () => {
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '9.000000000000002e+21')
  
  })
  
  it('Should return the outcome in exceptional circumstances', () => {
    cy.get('#number2').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Infinity')
  })



})