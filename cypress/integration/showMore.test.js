beforeEach(() => {
    cy.visit('http://localhost:1234/categorias.html')
});

describe('categories page', () => {
    it('renders page correctly', () => {
      cy.url('eq', 'http://localhost:1234/categorias.html')
    })
  })

describe('show more button', () => {
    it('shows message when clicking on button', () => {
      cy.get('div.showMoreContainer').within(() => {
        cy.contains('p', 'Ups, parece que no hay más contenido.').should('not.exist');
        cy.contains('button', 'Ver más').as('btn').click();
        cy.contains('p', 'Ups, parece que no hay más contenido.').should('exist');
        cy.get('@btn').click();
        cy.contains('p', 'Ups, parece que no hay más contenido.').should('not.exist');

      })
    })
});