/// <reference types="Cypress" />

describe('Create Team', () => {
  beforeEach(() => {
    cy.login();
  })
  it('sign-in',  () => {
    cy.visit('http://localhost:4000/create-team')

    cy.get('input[name="name"]').type('Super Test');
    cy.get('input[name="description"]').type('Any Description');

    cy.get('button[type="submit"]').click();

    cy.visit('http://localhost:4000');

    cy.get('div').should('contain', 'Loading...');
    cy.get('span').should('contain', 'Super Test');
  })
})