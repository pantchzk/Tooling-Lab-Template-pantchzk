describe(`first test`, () => {
  it(`passes`, () => {
    cy.visit(`index.html`);
    cy.get(`.form-control`).type(`Zack`);
    let acceptedValues = [ `rock`, `paper`, `scissors` ];
    let randomIndexNumber = Math.floor(Math.random() * 3); 
    cy.get(`#start-game-button`).click();
    cy.get(`#user-selection`).select(acceptedValues[randomIndexNumber]);
    cy.get(`#go-button`).click();

    cy.log(cy.get(`#game-history`).contains(`Zack`));
    //Runs successfully if game-history contains name that was input earlier
  })
})