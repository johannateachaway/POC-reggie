import user from "../../fixtures/user.json"
import Pages from "../../pages/PageObject.js"

const PageObject = new Pages();


describe('Log In test case', () => {
  before(() => {
    cy.visit('https://www.teachaway.me/login')
  })

  it("Verify that it is possible to login with a correct username and password", () => {
    cy.visit('https://www.teachaway.me/login')
    PageObject.input_email().type(user["email"]);
    PageObject.input_password().type(user["password"]);
    PageObject.login_button().click();
    cy.get("h2").should('be.visible').and('contain', "I'm the secret content of the page");
    cy.visit('https://www.teachaway.me/register/steps/welcome')
  })

  it('Welcome step', () => {
    PageObject.job_title().should('be.visible').click();
    PageObject.select_jobtitle().click();
    PageObject.ESL_certificate_yes().should('be.visible').click();
    PageObject.teaching_license().should('be.visible').click();
    PageObject.button_get_started().should('be.visible').click();
  })











})
