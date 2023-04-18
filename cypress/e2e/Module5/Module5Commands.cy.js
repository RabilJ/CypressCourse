describe('Module 5 TestScenario1', () =>{


    it('visit main page and click newsletter button', function() {
        //Open url
       cy.visit('https://fabrykatestow.pl')
       //Get certain element - in example nv-primary-navigation-main id
       cy.get('#nv-primary-navigation-main') 
       //Get certain element that contains X
       cy.get('#nv-primary-navigation-main').contains('Newsletter')
       //Get certain element that contains X and click it
       cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
       //Get current url
       cy.url()
       //Get current url and assert it
       cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')
       //Get certain element that position is 0 
       cy.get('.elementor-inner').eq(0)
       //Get certain element that is first in the document
       cy.get('.elementor-inner').first()
       //Get certain element that is last in the document
       cy.get('.elementor-inner').last()
       //Prompt message
       cy.log('This is my cypress message')
       //Request - API testing - GET by default
       cy.request('https://fabrykatestow.pl')
       //Wait ms amount of time
       cy.wait(2000)
    })
})