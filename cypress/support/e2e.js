// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "@cypress/code-coverage/support";
import '@testing-library/cypress/add-commands';
import {data} from '../fixtures/data.json';

// Alternatively you can use CommonJS syntax:
// require('./commands')

const email = 'eric.ly@arcticwolf.com';
const scope = 'test-auth0';
const audience = 'https://api.arcticwolf.com/'

Cypress.Commands.add('loginByAuth0Api', (route = '/') => {
  const sHeader = JSON.stringify({alg: 'HS256', typ: 'JWT'});
  const sPayload = JSON.stringify({
    'https://rtkwlf.io/email': email, // This non-standard claim contains the email address of the user to which the token was issued.
    iss: 'https://awn-sandbox.auth0.com/', // the issuer of the token
    sub: email, // the subject to which the token was issued
    aud: audience, // the audience for which the token is valid
    iat: KJUR.jws.IntDate.get('now'), // the time at which the token was issued
    exp: KJUR.jws.IntDate.get('now + 1day'), // the time at which the token expires
    scope,
  });
  const sJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, secret);

  cy.setCookie('awth-token', sJWT);
  data.token = sJWT

  cy.visit(route);
})