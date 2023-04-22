const url = 'https://jsonplaceholder.typicode.com/posts'

describe('Module 6 Rest Client', () =>{

    //https://jsonplaceholder.typicode.com
    //Resources
    //Routes
    //GET - /posts
    //GET - /posts/1
    //GET - /posts/1/comments
    //GET - /comments?postid=1
    //POST - /posts
    //PUT - /posts/1
    //PATCH - /posts/1
    //DELETE - /posts/1
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
                body: 'This is my API test',
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
})