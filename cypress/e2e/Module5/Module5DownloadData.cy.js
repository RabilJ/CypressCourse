describe('Module 5 TS 6', () =>{
    
    it('Download cookies', function() {
        cy.visit('https://fabrykatestow.pl')    


        //Get all browser cookies
        cy.getAllCookies()
        //Get cookies on current page
        cy.getCookies()
        //Get specific cookie
        cy.getCookie('_gid')
        //Get local storage
        cy.getAllLocalStorage()

        const a = cy.getAllLocalStorage()

        cy.log('Local storage prompt:')
        console.log(a)

        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()


    })
})