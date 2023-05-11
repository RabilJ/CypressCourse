const url = 'https://fabrykatestow.pl/'

describe('Advanced Cookies - TS1', function() {

    it('It should work with cookies', () => {

        cy.visit(url)

        //It clears all browser cookies
        cy.clearAllCookies()

        //It clears specific cookie on current domain
        cy.clearCookie('foo')

        //Clear all cookies on current domain
        cy.clearCookies()

        //Set custom cookie
        cy.setCookie('foo','bar')

        //Get specific cookie
        cy.getCookie('foo')

        //Get all cookies from current domain
        cy.getCookies()

        //Get all cookies from the browser
        cy.getAllCookies()

    })
})