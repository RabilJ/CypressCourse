const url = 'https://simpletestsite.fabrykatestow.pl/'
const iframeHeader = '#iframe-header'
const iframeHeaderValue = '12. IFrame'
const button1 = '#simpleButton1'
const button2 = '#simpleButton2'
const iframeButton = '[id^="simpleButton"]'
const iframe = 'iframe'

describe('Test iframes Module 6 - TS1', function() {

    beforeEach(() =>{
        cy.visit(url)
        cy.get(iframeHeader).should('have.text', iframeHeaderValue).click()
    })

    it('It should test iframe without iframe library', () => {
        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframeTest.find(button1).should('be.visible').click()
    })

    it('It should test iframe with cy.iframe() function', () => {

        cy.iframe().find(iframeButton).last().should('be.visible').click()
    })

    it('It should test iframe with cy.enter() function', () => {

        cy.enter().then(getBody => {
            getBody().find(iframeButton).first().should('be.visible').click()
        })
    })
})