

describe('Module 5 Homework', () =>{
    
    it('Take a screenshot of Pawel and download it', function() {

        //Visit main page
        cy.visit('https://fabrykatestow.pl')

        //Go to courses section
        cy.get('.wrap').contains('Kursy').click()

        //Click first matching element
        cy.get('.elementor-button-text').contains('POKAŻ CZEGO SIĘ NAUCZĘ').first().click()

        //Save screenshot section to variable
        const screenShotElement = cy.get('section[data-id="2d7d28f4"]')
        
        //Scroll to screenshot section, wait 5 second so the image can load and take a screenshot
        screenShotElement.scrollIntoView().screenshot('screenshot')
        
    })
})