    describe('our tests', () =>{
      beforeEach(() =>{
        cy.visit('https://fabrykatestow.pl')
    })

    it('customAttributesTest', () =>{
    
        cy.get('button[data-e2e="abc"')
        cy.get('button[data-cy="abc"')
        cy.get('button[data-test="abc"')
        cy.get('button[data-testid="abc"')
    })

})