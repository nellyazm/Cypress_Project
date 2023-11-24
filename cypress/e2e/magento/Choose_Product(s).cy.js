const email = "nellyamalia1@gmail.com"
const pwd = "Admin!23"

describe('choose product', () => {
  it('choose product', () => {
    cy.visit('')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.wait(5000)
    cy.get('.base').should('have.text', 'Customer Login')
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(pwd)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text','Welcome, Nelly Testing!')
    cy.get(':nth-child(2) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(5000)
    cy.get('.base').should('have.text', 'Breathe-Easy Tank')
    cy.get('#option-label-size-143-item-167').click()//choose a size
    cy.get('#option-label-color-93-item-57').click()//choose pink color
    cy.get('#product-addtocart-button').click()
    cy.wait(5000)
    cy.get('.message-success').should('contain.text', 'You added Breathe-Easy Tank to your shopping cart.')
  })
})