import BasicAuthPage from "../page-objects/basicAuthPage"; //TO DO
import FormPage from "../page-objects/formPage"; //TO DO
import KeyPressesPage from "../page-objects/keyPressesPage"; //TO DO
import AddRemoveElementsPage from "../page-objects/addRemoveElementsPage"; //TO DO
import StatusCodesPage from "../page-objects/statusCodesPage"; //TO DO
import IFramePage from "../page-objects/iframePage"; //TO DO
import DragAndDropPage from "../page-objects/dragAndDropPage"; //TO DO
import DatePickerPage from "../page-objects/datepickerPage"; //TO DO


describe('Simple test site scenario', () => {
    
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitPage()
    })

    it('It should test BasicAuth Tab', () => {


    })

    it('It should test Form Tab', () => {

    })

    it('It should test Key Presses Tab', () => {

    })

    it('It should test Add/Remove elements Tab', () => {

    })

    it('It should test Status Codes Tab', () => {

    })

    it('It should test IFrame Tab', () => {

    })

    it('It should test Drag and Drop Tab', () => {

    })

    it('It should test Date picker Tab', () => {

    })

})