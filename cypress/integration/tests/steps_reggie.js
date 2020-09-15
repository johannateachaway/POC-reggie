import user from "../../fixtures/user.json"
import Pages from "../../pages/PageObject.js"

const PageObject = new Pages();


describe('Visit teach away login page', () => {
  before(() => {
    cy.visit('https://www.teachaway.me/login')
  })

  it("Steps reggie", () => {
    // Go to teach away Login Page (this could be deleted because is already in before() )
    cy.visit('https://www.teachaway.me/login')

    // Login with a correct username and password 
    PageObject.input_email().type(user["email"]);
    PageObject.input_password().type(user["password"]);
    PageObject.login_button().click();
    cy.get("h2").should('be.visible').and('contain', "I'm the secret content of the page");

    // redirect to first step: Welcome
    cy.visit('https://www.teachaway.me/register/steps/welcome')
    PageObject.job_title().should('be.visible').click();
    PageObject.select_jobtitle().click();
    PageObject.ESL_certificate_yes().should('be.visible').click();
    PageObject.teaching_license().should('be.visible').click();
    PageObject.button_get_started().should('be.visible').click();

    // redirect to second step: Interests
    cy.url().should("eq", "https://www.teachaway.me/register/steps/interests") 
    

  })
 
  










})
