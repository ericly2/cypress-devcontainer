// import {beforeEach} from "mocha";
// import {setupCypressTest} from "../util/util";

// beforeEach(() => {
//   setupCypressTest();
// })
// const endpointUrl = 'https://consoleservice.consoleapp.protontest.us001-test.rtkwlf.io'
// const username = 'kevin.carter@arcticwolf.com'
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTk0NzExNzcsImV4cCI6MTY1OTQ5OTk3Nywic3ViIjoia2V2aW4uY2FydGVyQGFyY3RpY3dvbGYuY29tIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmFyY3RpY3dvbGYuY29tLyIsImF1ZCI6WyJodHRwczovL2FwaS5hcmN0aWN3b2xmLmNvbS8iXX0.jLFiZ5irsZsOovDpL-jp5YfYIvHpt0uCbmL6H8PXDy4';
// import body from '../../src/data.json'

it("should load the page", () => {
  // cy.setCookie('awth-token', token);
  // const endpoint = `${endpointUrl}/api/oauth/authenticate?email=${username}`;
  // cy.request(endpoint);
  // cy.getCookie("awth-token").then((cookie) => {
  //   cy.setCookie("awth-token", cookie.value);
  //   token = cookie.value;
  // });
  // cy.setCookie('awth-token', token);
  // cy.setCookie("username", username);

  cy.visit("/");
  cy.wait(1000);
  cy.get('button').click({force: true});
  cy.wait(1000);
  cy.get('[data-testid="id"]').should('be.visible').then((id) => {
    expect(id.text().trim()).to.eq(`Id: 20`);
  });
  cy.get('[data-testid="userId"]').should('be.visible').then((id) => {
    expect(id.text().trim()).to.eq(`UserId: 1`);
  });
  // cy.get('https://consoleservice.consoleapp.protontest.us001-test.rtkwlf.io/')
});