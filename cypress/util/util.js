function setupCypressTest() {
  login();
  Cypress.Cookies.preserveOnce("awth-token");
}

const endpointUrl = 'https://consoleservice.consoleapp.protontest.us001-test.rtkwlf.io'
const username = 'kevin.carter@arcticwolf.com'
const token = '';

function login() {
  const endpoint = `${endpointUrl}/api/oauth/authenticate?email=${username}`;
  cy.request(endpoint);
  cy.getCookie("awth-token").then((cookie) => {
    cy.setCookie("awth-token", cookie.value);
    token = cookie.value;
  });
  cy.setCookie("username", username);
}

export { setupCypressTest, login };