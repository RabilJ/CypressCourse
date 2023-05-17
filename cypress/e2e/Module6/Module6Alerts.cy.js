const url = 'https://register.rediff.com/register/register.php'

describe('TS1 - Alert test', function() {

    it('It should test URL alert', () => {
        cy.visit(url)
        cy.get('[value="Create my account >>"]').click()

        cy.on('window:alert', (t) =>{
            expect(t).to.contains('Your full name')
        })
    })
})