/// <reference types="Cypress" />

describe('Create Team', () => {
  beforeEach(() => {
    cy.login();

    cy.visit('/create-team');
  });

  it('should successfully create team',  () => {
    cy.get('input[name="name"]').type('Super Test');
    cy.get('input[name="description"]').type('Any Description');

    cy.get('button[type="submit"]').click();

    cy.visit('/');

    cy.get('div').should('contain', 'Loading...');
    cy.get('span').should('contain', 'Super Test');
  });

  it('create team with empty values', () => {
    cy.get('button[type="submit"]').click();
    cy.debug();
    // cy.visit('/');
    //
    // cy.get('div').should('contain', 'Loading...');
    // cy.get('span').should('contain', 'Super Test');
  });

})