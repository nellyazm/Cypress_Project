const email = "nellyamalia1@gmail.com"
const pwd = "Admin!23"

describe('login', () => {
  it('login with valid data', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(5000)
    cy.get('.base').should('have.text', 'Customer Login')
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(pwd)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text','Welcome, Nelly Testing!')
  })
})