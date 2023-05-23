
const dropdown = '#dropdown'

class DropdownListPage {

    checkIfDefaultOptionIsDisabled() {
        cy.get(dropdown).get('option[selected="selected"').should('have.text','Please select an option').should('be.disabled')
    }

    selectOptionOne() {
        cy.get(dropdown).select('Option 1')
        cy.get('option[selected="selected"').should('have.text','Option 1')
    }

    selectOptionTwo() {
        cy.get(dropdown).select('Option 2')
        cy.get('option[selected="selected"').should('have.text','Option 2')
    }

}

export default DropdownListPage;