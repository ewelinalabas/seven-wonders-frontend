// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
  const email = 'user@test.com';
  const password = 'password';

  cy.request({
    url: 'http://localhost:3000/auth/sign_in',
    method: 'POST',
    body: {email: email, password: password}
  }).its('headers').then((headers) => {
    localStorage.setItem('access-token', headers['access-token']);
    localStorage.setItem('client', headers['client']);
    localStorage.setItem('token-type', headers['token-type']);
    localStorage.setItem('uid', headers['uid']);
  })
})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
