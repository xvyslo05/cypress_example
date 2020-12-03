let url = 'https://www.magexo.cz/'

describe('First Magexo Cypress test ever', () => {
  it('Visit Magexo homepage', () => {
    cy.visit(url)

    cy.url().should('contain', 'magexo.cz')

    cy.log('it works')
  })

  it.skip('Get scrolling arrow button', () => {
    cy.get('.js-featured-to-content.featured-to-content.icon-to-content')

    cy.get('customers-slider-slide-btn').should('be.visible')
  })


})
