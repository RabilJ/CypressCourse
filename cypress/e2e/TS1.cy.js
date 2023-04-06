describe('TestScenario1', () =>{


    it('visit main page and click menu button', function() {
        cy.visit('https://fabrykatestow.pl')

        cy.get('#nv-primary-navigation-main').contains('Newsletter').click({ force: true})

        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')

    })
})