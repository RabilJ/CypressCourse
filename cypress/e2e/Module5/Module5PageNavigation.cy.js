describe('Module 5 TS 5', () =>{
    
    it('Navigate between home page and newsletter page', function() {
        cy.visit('https://fabrykatestow.pl')

        //Find element and click it
        cy.get('#nv-primary-navigation-main').contains('Newsletter').click({force: true})

        cy.wait(3000)

        //Go back one page
        cy.go('back')

        cy.wait(3000)

        //Go forward one page
        cy.go('forward')

        cy.wait(3000)

        //Go back n pages
        cy.go(-1)

        cy.wait(3000)

        //Go forward n pages
        cy.go(1)

    })
})