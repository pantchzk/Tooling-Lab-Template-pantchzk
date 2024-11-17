describe(`first test`, () => {
  it(`passes`, () => {
    cy.visit(`index.html`)
    cy.get(`.form-control`).type(`Zack`)
    //cy.get(`textarea`).type(`Zackary Pantchev`)
    
  })
})