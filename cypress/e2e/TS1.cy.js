describe('TestScenario1', () =>{


    it('visit main page and click menu button', function() {
       //Open url
       cy.visit('https://fabrykatestow.pl')
       //Get certain element - in example nv-primary-navigation-main id
       cy.get('#nv-primary-navigation-main') 

    })
})