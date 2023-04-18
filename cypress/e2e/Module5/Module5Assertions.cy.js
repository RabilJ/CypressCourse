describe(' Module 5 TestScenario2', () =>{


    it('visit main page and click menu button', function() {
        cy.visit('https://fabrykatestow.pl')

        //Get list that should contain 3 elements
        cy.get('li.selected').should('have.lenght', 3)

        //Get form with input that doesn't have 'disabled' class
        cy.get('form').find('input').should('not.have.class', 'disabled')

        //Get text area that should have exact value
        cy.get('textarea').should('have.value', 'fabrykaTestow')

        //Get user name element that should have exact text 
        cy.get('[data-testid="user-name"]').should('have.text', 'Pawel Z')

        //text is a part of searched phrase
        cy.get('[data-testid="address"]').should('include.text', 'Polska')

        //contain is an alias to include
        cy.get('[data-testid="address"]').should('contain.text', 'Warszawa')

        //Get parent of an element that doesn't contain 'click me'
        cy.get('a').parent('span.help').should('not.contain', 'click me')

        //Get form that is visible
        cy.get('[data-testid="form-submit"]').should('be.visible')

        //Get element that is not visible
        cy.get('li.hidden').should('not.be.visible')

        //Element should not exist
        cy.get('[data-testid="loading"]').should('not.exist')
        
        //Get element that shoudl be checked
        cy.get(':radio').should('be.checked')
    })
})