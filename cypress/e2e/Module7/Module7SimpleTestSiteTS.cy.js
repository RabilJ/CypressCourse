
import CheckboxPage from "../page-objects/checkboxPage";
import HomePage from "../page-objects/homePage"
import InputPage from "../page-objects/inputPage"


describe('Simple test site scenario', () => {
    
    const homePage = new HomePage();
    const inputPage = new InputPage();
    const checkboxPage = new CheckboxPage();

    beforeEach(() => {
        homePage.visitPage()
    })

    it('It should test Inputs Tab', () => {
        
        homePage.clickInputsTab()

        inputPage.typeNumbersIntoField();
        inputPage.typeLettersIntoField();

    })

    it('It should test Checkbox Tab', () => {
        
        homePage.clickCheckboxesTab()

        cy.wait(500)

        checkboxPage.checkCheckboxOne()

        cy.wait(2000)

        checkboxPage.checkCheckboxTwo()

        cy.wait(2000)
        checkboxPage.checkBothCheckboxes()

    })

})