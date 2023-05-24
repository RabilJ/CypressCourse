
import CheckboxPage from "../page-objects/checkboxPage";
import DropdownListPage from "../page-objects/dropdownListPage";
import HomePage from "../page-objects/homePage"
import HoversPage from "../page-objects/hoversPage";
import InputPage from "../page-objects/inputPage"


describe('Simple test site scenario', () => {
    
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitPage()
    })

    afterEach(() => {
        cy.wait(2000)
    })

    it('It should test Inputs Tab', () => {
        
        const inputPage = new InputPage();

        homePage.clickInputsTab()

        inputPage.typeNumbersIntoField();
        inputPage.typeLettersIntoField();

    })

    it('It should test Checkbox Tab', () => {

        const checkboxPage = new CheckboxPage();
        
        homePage.clickCheckboxesTab()

        cy.wait(2000)

        checkboxPage.unclickBothCheckboxes()
        checkboxPage.checkCheckboxOne()

        cy.wait(2000)

        checkboxPage.unclickBothCheckboxes()
        checkboxPage.checkCheckboxTwo()

        cy.wait(2000)

        checkboxPage.unclickBothCheckboxes()
        checkboxPage.checkBothCheckboxes()

    })

    it('It should test Dropdown list Tab', () => {

        const dropdownListPage = new DropdownListPage();
        
        homePage.clickDropdownListTab()

        dropdownListPage.checkIfDefaultOptionIsDisabled()

        cy.wait(2000)

        dropdownListPage.selectOptionOne()

        cy.wait(2000)

        dropdownListPage.selectOptionTwo()

    })

    it('It should test Hovers Tab', () => {

        const hoversPage = new HoversPage();
        
        homePage.clickHoversTab()

    })

})