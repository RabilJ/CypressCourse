const iframeButton = '[id^="simpleButton"]'
const buttonClicked = '#whichButtonIsClickedMessage';

class IFramePage {

    clickLastIFrameButton() {

            cy.iframe().find(iframeButton).last().should('be.visible').click()
            cy.iframe().find(buttonClicked).should('have.text','Button 2 was clicked!')
       
    }

    clickFirstIFrameButton() {

        cy.iframe().find(iframeButton).first().should('be.visible').click()
        cy.iframe().find(buttonClicked).should('have.text','Button 1 was clicked!')
}

}

export default IFramePage;