const url = 'https://jsonplaceholder.typicode.com/posts/'

describe('Module 6 Rest Client - Homework', () =>{

    it('It should test json placeholder API - GET', function () {

        cy.request(url).then((response) => {
          const body = JSON.stringify(response.body)
          expect(response.status).to.eq(200)
          cy.log(body)
        })

    })
    
    it('It should test json placeholder API - POST', function () {

        cy.request(
          {
            method: 'POST',
            url: url,
            body: JSON.stringify({
                title: 'food',
                body: 'This is my API test - POST',
                userId: 1
            }),
            headers: {'Content-type': 'application/json'}
          }
        ).then((response) => {
            const body = JSON.stringify(response.body)
            cy.log(body)
            expect(response.status).to.eq(201)
        })
    })

//Homework - PUT, DELETE usage

    it('It should test json placeholder API - DELETE', function () {

        cy.request('DELETE', url + '1').then((response) => {

            const body = JSON.stringify(response.body)
            expect(body).to.be.eq('{}')
            expect(response.status).to.eq(200)
        })
    })

    it('It should test json placeholder API - PUT', function () {

        cy.request(
            {
              method: 'PUT',
              url: url+'1',
              body: JSON.stringify({
                  title: 'food',
                  body: 'This is my API test - PUT',
                  userId: 1,
                  description: 'My description'
              }),
              headers: {'Content-type': 'application/json'}
            }
        ).then((response) => {
              const body = JSON.stringify(response.body)
              cy.log(body)
              expect(response.status).to.eq(200)
              expect(response.body).to.have.property('title', 'food')
              expect(response.body).to.have.property('description')
          })
        
    })
    
})
