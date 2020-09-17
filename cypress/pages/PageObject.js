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

    hiring_school_contact()
    {
        return cy.get('#schoolContactDirectly > [data-testid=ta-web-ui-toggle-options] > .ta-web-ui-toggle-btn__single--green');
    }

    online_teaching_interest()
    {
        return cy.get('#interesedOnlineTeaching > [data-testid=ta-web-ui-toggle-options] > .ta-web-ui-toggle-btn__single--green');
    }

    TEFL_certificated_interest()
    {
        return cy.get('#interesedTEFL > [data-testid=ta-web-ui-toggle-options] > .ta-web-ui-toggle-btn__single--green > span');
    }

    teacher_certification_interest()
    {
        return cy.get('#interesedTeacherCertification > [data-testid=ta-web-ui-toggle-options] > .ta-web-ui-toggle-btn__single--green');
    }

    button_about()
    {
        return cy.get('//*[@id="country"]');
    }

    select_country()

    {
        return cy.get('.ta-web-ui-input-combobox__icons > #select-triangle > .cls-1');
    }


}

export default Pages;
