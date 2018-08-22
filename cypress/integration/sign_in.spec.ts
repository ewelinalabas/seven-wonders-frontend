/// <reference types="Cypress" />

describe('The Login Page', () => {
  it('sign-in',  () => {
    const email = 'user@test.com';
    const password = 'password';

    cy.visit('http://localhost:4000/sign-in');

    cy.get('input[name=email]').type(email);

    cy.get('input[name=password]').type(`${password}{enter}`);

    cy.get('h2').first().should('contain', 'Seven Wonders');
  })
})