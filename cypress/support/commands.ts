declare namespace Cypress {
  interface Chainable<Subject> {
    login(): Chainable<Subject>;
  }
}

Cypress.Commands.add('login', () => {
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
