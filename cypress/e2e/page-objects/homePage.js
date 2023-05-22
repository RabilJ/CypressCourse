import Urls from "./urls";

const homeTab = '#test-header'
const checkboxesTab = '#checkbox-header'
const datepickerTab = '#datepicker-header'
const hoverTab = '#hovers-header'
const inputsTab = '#inputs-header'
const basicAuthTab = '#basicauth-header'
const formTab = '#form-header'
const dropdownListTab = '#dropdownlist-header'
const keyPressesTab = '#keypresses-header'
const dragAndDropTab = '#draganddrop-header'
const addRemoveElementsTab = '#addremoveelements-header'
const statusCodesTab = '#statuscodes-header'
const iframeTab = '#iframe-header'


class HomePage {

    clickHomeTab() {
        cy.get(homeTab).click()
    }

    clickCheckboxesTab() {
        cy.get(checkboxesTab).click()
    }

    clickDatePickerTab() {
        cy.get(datepickerTab).click()
    }

    clickHoversTab() {
        cy.get(hoverTab).click()
    }
    
    clickInputsTab() {
        cy.get(inputsTab).click()
    }

    clickBasicAuthTab() {
        cy.get(basicAuthTab).click()
    }

    clickFormTab() {
        cy.get(formTab).click()
    }

    clickDropdownListTab() {
        cy.get(dropdownListTab).click()
    }

    clickKeyPressesTab() {
        cy.get(keyPressesTab).click()
    }

    clickDragAndDropTab() {
        cy.get(dragAndDropTab).click()
    }

    clickAddRemoveElementsTab() {
        cy.get(addRemoveElementsTab).click()
    }

    clickStatusCodesTab() {
        cy.get(statusCodesTab).click()
    }

    clickIFrameTab() {
        cy.get(iframeTab).click()
    }

    visitPage() {
        const url = new Urls()
        url.visitHomePage()
    }
    
    
}

export default HomePage;