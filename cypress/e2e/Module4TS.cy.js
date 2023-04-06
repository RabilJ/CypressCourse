describe('module 4 test scenario', () =>{
    
    it('Get 5 elements of id class attribute text', function() {
    cy.visit('https://fabrykatestow.pl')

    //ID
    cy.get('#wp-block-library-css')
    cy.get('#classic-theme-styles-css')
    cy.get('#coutdowntimer_style-css')
    cy.get('#neve-style-css')
    cy.get('#neve-style-inline-css')
    //CLASS
    cy.get('.yoast-schema-graph')
    cy.get('.wrapper')
    cy.get('.header')
    cy.get('.elementor-section-wrap')
    cy.get('.elementor-row')
    //TEKST
    cy.get('div').contains('Nie trać czasu!')
    cy.get('div').contains('Pomożemy Ci z tym, nawet jak nie wiesz, od czego zacząć i jakich narzędzi używać')
    cy.get('span').contains('Sprawdź nasze kursy')
    cy.get('div').contains('Panel kursanta')
    cy.get('h2').contains('SZKOŁa ONLINE DLA TESTERÓW')
    //ATTRIBUTE
    cy.get('meta[property="og:locale"]')
    cy.get('meta[property="og:type"]')
    cy.get('meta[property="og:title"]')
    cy.get('meta[property="og:description"]')
    cy.get('meta[property="og:url"]')
})
})
    
    