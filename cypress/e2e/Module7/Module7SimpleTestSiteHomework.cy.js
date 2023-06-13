import HomePage from "../page-objects/homePage";
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
        homePage.clickBasicAuthTab();

        const basicAuthPage = new BasicAuthPage();

    })

    it('It should test Form Tab', () => {
        homePage.clickFormTab();

        const formPage = new FormPage();
        
    })

    it('It should test Key Presses Tab', () => {
        homePage.clickKeyPressesTab();

        const keyPressesPage = new KeyPressesPage();
    })

    it('It should test Add/Remove elements Tab', () => {
        homePage.clickAddRemoveElementsTab();

        const addRemoveElementsPage = new AddRemoveElementsPage();
    })

    it('It should test Status Codes Tab', () => {
        homePage.clickStatusCodesTab();
        
        const statusCodesPage = new StatusCodesPage();
    })

    it('It should test IFrame Tab', () => {
        homePage.clickIFrameTab();
        
        const iframePage = new IFramePage();

        iframePage.clickFirstIFrameButton();
        iframePage.clickLastIFrameButton();
    })

    it('It should test Drag and Drop Tab', () => {
        homePage.clickDragAndDropTab();

        const dragAndDropPage = new DragAndDropPage();
    })

    it('It should test Date picker Tab', () => {
        homePage.clickDatePickerTab();

        const datePickerPage = new DatePickerPage();

    })

})