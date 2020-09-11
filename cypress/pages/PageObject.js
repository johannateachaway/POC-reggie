class Pages {
    input_email()
    {
        return cy.get(':nth-child(1) > [data-testid=ta-web-ui-input]');
    }
    
    input_password()
    {
        return cy.get(':nth-child(2) > [data-testid=ta-web-ui-input]');
    }

    login_button()
    {
        return cy.get('[data-testid=ta-web-ui-button]');
    }

    job_title()
    {
        return cy.get('[data-testid=ta-web-ui-input-select-button]');
    }

    select_jobtitle()
    {
        return cy.get('[data-testid=ta-web-ui-input-dropdown-option-5f48ba6d-6437-473d-b300-08229fb97730] > .ta-web-ui-input-dropdown__option-label');
    }
    
    ESL_certificate_yes()
    {
        return cy.get('#esl > [data-testid=ta-web-ui-toggle-options] > [aria-label="Yes button"]');
    }

    teaching_license()
    {
        return cy.get('#teaching-license > [data-testid=ta-web-ui-toggle-options] > [aria-label="Yes button"]')
    }

    button_get_started()
    {
        return cy.get('[data-testid=ta-web-ui-wrap]');
    }


}

export default Pages;
