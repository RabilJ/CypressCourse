const checkbox = 'input[type="checkbox"]'

class CheckboxPage {

    unclickBothCheckboxes() {
        cy.get(checkbox).first().uncheck().should('not.be.checked')
        cy.get(checkbox).last().uncheck().should('not.be.checked')
    }

    checkCheckboxOne() {

        cy.get(checkbox).first().check().should('be.checked')
    }

    checkCheckboxTwo() {

        cy.get(checkbox).last().check().should('be.checked')
    }

    checkBothCheckboxes() {

        cy.get(checkbox).first().check().should('be.checked')
        cy.get(checkbox).last().check().should('be.checked')
    }
}

export default CheckboxPage;