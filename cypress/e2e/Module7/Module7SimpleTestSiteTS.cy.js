
import CheckboxPage from "../page-objects/checkboxPage";
import DropdownListPage from "../page-objects/dropdownListPage";
import HomePage from "../page-objects/homePage"
import HoversPage from "../page-objects/hoversPage";
import InputPage from "../page-objects/inputPage";




describe('Simple test site scenario', () => {
    
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitPage()
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

        cy.wait(100)

        checkboxPage.unclickBothCheckboxes()
        checkboxPage.checkCheckboxOne()

        checkboxPage.unclickBothCheckboxes()
        checkboxPage.checkCheckboxTwo()

        checkboxPage.unclickBothCheckboxes()
        checkboxPage.checkBothCheckboxes()

    })

    it('It should test Dropdown list Tab', () => {

        const dropdownListPage = new DropdownListPage();
        
        homePage.clickDropdownListTab()

        dropdownListPage.checkIfDefaultOptionIsDisabled()

        dropdownListPage.selectOptionOne()

        dropdownListPage.selectOptionTwo()

    })

    it('It should test Hovers Tab', () => {

        const hoversPage = new HoversPage();
        
        homePage.clickHoversTab()

        hoversPage.hoverOverElement()
    })

})