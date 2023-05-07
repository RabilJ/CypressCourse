import "cypress-localstorage-commands"

const url = 'https://fabrykatestow.pl/'

describe('Work with local and session storage', function() {

    before(() => {
    cy.visit(url)
    })
    
    
    it('It should test Local and Session Storages commands', () => {
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.clearLocalStorage('test')
    cy.getAllLocalStorage()
    cy.getAllSessionStorage()

    cy.setLocalStorage('test', '1')
    cy.setLocalStorage('test1', '2')
    cy.setLocalStorage('test2', '3')

    cy.getLocalStorage('test2').should('deep.equal', '3')
    cy.getLocalStorage('test1').should('deep.equal', '2')
    cy.getLocalStorage('test').should('deep.equal', '1')
    
    
    
})
    
})