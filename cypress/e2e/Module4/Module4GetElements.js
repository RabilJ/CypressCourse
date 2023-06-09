describe('Newsletter test scenario #321', () =>{
    
    beforeEach(() =>{
        cy.visit('https://fabrykatestow.pl')
    })

    it('NewsletterClick', () =>{
        cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER').click({force: true})
    })

    it('ValidateElementStructure', () =>{
    // The element: <input id="user_email_login" class="user_email_ajax"></input>

    //BY ID  
        cy.get('#user_email_login')
    //BY Class
        cy.get('.user_email_ajax')
    //By Tag
        cy.get('input')
    //By Attribute
        cy.get('input[name="user_login"]')
        cy.get('input[id="user_email_login"]')
        cy.get('input[class="user_email_ajax"')

    //Custom attribute - created for tester
    //data-e2e
    //data-cy
    //data-test
    //data-testid
    })

    it('customAttributesTest', () =>{
    
        cy.get('button[data-e2e="abc"')
        cy.get('button[data-cy="abc"')
        cy.get('button[data-test="abc"')
        cy.get('button[data-testid="abc"')
    })
})














// <input id="user_email_login" class="user_email_ajax"></input>
// <span class="elementor-button-text">ZAPISZ MNIE NA NEWSLETTER!</span>