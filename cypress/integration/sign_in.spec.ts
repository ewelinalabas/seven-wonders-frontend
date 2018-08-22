/// <reference types="Cypress" />

describe('The Login Page', () => {
  it('should sign-in',  () => {
    const email = 'user@test.com';
    const password = 'password';

    cy.visit('/sign-in');

    cy.get('input[name=email]').type(email);

    cy.get('input[name=password]').type(`${password}{enter}`);

    cy.get('h2').first().should('contain', 'Seven Wonders');
  });

  it('sing in with empty credentials', () => {
    const email = '';
    const password = '';

    cy.visit('/sign-in');

    cy.get('input[name=email]').type(email);

    cy.get('input[name=password]').type(`${}{enter}`);
  })
})