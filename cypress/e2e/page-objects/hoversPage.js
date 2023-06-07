const figure = '.figure'
const figcaption = '.figcaption'

class HoversPage {

hoverOverElement(){

    //It will use our mouse to move the coursor on to the figure element. It will work with JS, not CSS.
    // cy.get(figure).first().trigger('mouseover').should('be.visible')


    //Invoke uses function on element we previously operated on. It's a workaround for hover element
    cy.get(figcaption).first().should('be.hidden').invoke('show').should('be.visible')

}

}

export default HoversPage;