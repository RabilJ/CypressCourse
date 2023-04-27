const url = 'https://simpletestsite.fabrykatestow.pl/'
const iframeHeader = '#iframe-header'
const iframeHeaderValue = '12. IFrame'
const button1 = '#simpleButton1'
const button2 = '#simpleButton2'
const iframeButton = '[id^="simpleButton"]'
const iframe = 'iframe'

describe('This is Module6 IFrame - TS1', () => {
    it('It should test IFrame', function() {
        cy.visit(url)

        cy.get(iframeHeader).should('have.text',iframeHeaderValue).click()

        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        //It will find the element
        iframeTest.find(button1).click()

        //It will not find the element - using iframeTest for the second time causes Assertion error
        //iframeTest.find(button2).click()

        cy.wait(3000)

        //It is highly recommended to install iframe package with npm install -D cypress-iframe
        cy.frameLoaded({ url: url})
        cy.iframe().find(iframeButton).first().should('be.visible').click()

        cy.wait(3000)

        cy.iframe().find(iframeButton).last().should('be.visible').click()

        cy.wait(3000)

        cy.enter().then(getBody => {
            getBody().find(iframeButton).last().should('be.visible').click()
        })

        cy.wait(3000)

        cy.enter().then(getBody => {
            getBody().find(iframeButton).first().should('be.visible').click()
        })
    })

})