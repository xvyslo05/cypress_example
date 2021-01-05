let url = 'https://www.magexo.cz/'

describe('First Magexo Cypress test ever', () => {
  beforeEach(() => {
    cy.visit(url)
    cy.url().should('contain', 'magexo.cz')
    cy.viewport(1920, 1080)
  })

  it('Visit Magexo homepage', () => {
    cy.log('it works')
  })

  it('Get scrolling arrow button', () => {
    cy.get('.js-featured-to-content.featured-to-content.icon-to-content').click({force: true})
    cy.get('.customers-slider-slide-btn').should('be.visible')
  })

  it('Open More info modal', () => {
    cy.get()
  })
})
