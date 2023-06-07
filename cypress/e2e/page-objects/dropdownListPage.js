
const dropdown = '#dropdown'

class DropdownListPage {

    checkIfDefaultOptionIsDisabled() {
        cy.get('option[disabled="disabled"').should('have.text', 'Please select an option')
    }

    selectOptionOne() {
        cy.get(dropdown).select('Option 1').should('have.value', '1')
    }

    selectOptionTwo() {
        cy.get(dropdown).select('Option 2').should('have.value', '2')
    }

}

export default DropdownListPage;