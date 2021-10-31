
beforeEach(() => {
    cy.visit('http://localhost:1234/')
})

describe('home page', () => {
    it('loads the pages correctly', () => {
      cy.visit('http://localhost:1234/')
    })
  })

describe('navigation bar', () => {
    it('renders the burger button', () => {
      cy.get('.burger').should('exist');
    })

    it('shows the three manu items after clicking on burger', () => {
      cy.get('.burger').as('burger');

      cy.get('.navigation').within(() => {
        cy.contains('li', 'Portada').should('not.be', 'visible');
        cy.contains('li', 'Presentación').should('not.be', 'visible');
        cy.contains('li', 'Categorias').should('not.be', 'visible');

        cy.get('@burger').click().wait(100);

        cy.contains('li', 'Portada').should('be.visible');
        cy.contains('li', 'Presentación').should('be.visible');
        cy.contains('li', 'Categorias').should('be.visible');
      })
    })
})