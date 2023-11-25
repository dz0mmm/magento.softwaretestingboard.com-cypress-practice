describe('Main navigation actions', () => {
  it('Checking the function of the buttons "Whats New", "Women", "Men", "Gear", "Training" and "Sale"', () => {
    cy.visit('/')

    //[Button]What's New
    cy.get('#ui-id-3').should('have.text', "What's New").click();
    cy.url().should('include', '/what-is-new.html');
    cy.go('back');

    //[Button]Women
    cy.get('#ui-id-4').should('have.text', 'Women').realHover();
    cy.get('#ui-id-9 > span:nth-child(2)').should('have.text', 'Tops').realHover();
    cy.get('#ui-id-11').should('have.text', 'Jackets').click();
    cy.url().should('include', '/women/tops-women/jackets-women.html');

    cy.get('#ui-id-4').should('have.text', 'Women').realHover();
    cy.get('#ui-id-9 > span:nth-child(2)').should('have.text', 'Tops').realHover();
    cy.get('#ui-id-12').should('have.text', 'Hoodies & Sweatshirts').click({ force: true });
    cy.url().should('include', '/women/tops-women/hoodies-and-sweatshirts-women.html');

    cy.get('#ui-id-4').should('have.text', 'Women').realHover();
    cy.get('#ui-id-9 > span:nth-child(2)').should('have.text', 'Tops').realHover();
    cy.get('#ui-id-13').should('have.text', 'Tees').click({ force: true });
    cy.url().should('include', '/women/tops-women/tees-women.html');

    cy.get('#ui-id-4').should('have.text', 'Women').realHover();
    cy.get('#ui-id-9 > span:nth-child(2)').should('have.text', 'Tops').realHover();
    cy.get('#ui-id-14').should('have.text', 'Bras & Tanks').click({ force: true });
    cy.url().should('include', '/women/tops-women/tanks-women.html');

    cy.get('#ui-id-4').should('have.text', 'Women').realHover();
    cy.get('#ui-id-10 > span:nth-child(2)').should('have.text', 'Bottoms').realHover();
    cy.get('#ui-id-15').should('have.text', 'Pants').click({ force: true });
    cy.url().should('include', '/women/bottoms-women/pants-women.html');

    cy.get('#ui-id-4').should('have.text', 'Women').realHover();
    cy.get('#ui-id-10 > span:nth-child(2)').should('have.text', 'Bottoms').realHover();
    cy.get('#ui-id-16').should('have.text', 'Shorts').click({ force: true });
    cy.url().should('include', '/women/bottoms-women/shorts-women.html');

    //[Button]Men
    cy.get('#ui-id-5').should('have.text', 'Men').realHover();
    cy.get('#ui-id-17 > span:nth-child(2)').should('have.text', 'Tops');
    cy.get('#ui-id-19').should('have.text', 'Jackets').click({ force: true });
    cy.url().should('include', '/men/tops-men/jackets-men.html');

    cy.get('#ui-id-5').should('have.text', 'Men').realHover();
    cy.get('#ui-id-17 > span:nth-child(2)').should('have.text', 'Tops');
    cy.get('#ui-id-20').should('have.text', 'Hoodies & Sweatshirts').click({ force: true });
    cy.url().should('include', '/men/tops-men/hoodies-and-sweatshirts-men.html');

    cy.get('#ui-id-5').should('have.text', 'Men').realHover();
    cy.get('#ui-id-17 > span:nth-child(2)').should('have.text', 'Tops');
    cy.get('#ui-id-21').should('have.text', 'Tees').click({ force: true });
    cy.url().should('include', '/men/tops-men/tees-men.html');

    cy.get('#ui-id-5').should('have.text', 'Men').realHover();
    cy.get('#ui-id-17 > span:nth-child(2)').should('have.text', 'Tops');
    cy.get('#ui-id-22').should('have.text', 'Tanks').click({ force: true });
    cy.url().should('include', '/men/tops-men/tanks-men.html');

    cy.get('#ui-id-5').should('have.text', 'Men').realHover();
    cy.get('#ui-id-18 > span:nth-child(2)').should('have.text', 'Bottoms');
    cy.get('#ui-id-23').should('have.text', 'Pants').click({ force: true });
    cy.url().should('include', '/men/bottoms-men/pants-men.html');

    cy.get('#ui-id-5').should('have.text', 'Men').realHover();
    cy.get('#ui-id-18 > span:nth-child(2)').should('have.text', 'Bottoms')
    cy.get('#ui-id-24').should('have.text', 'Shorts').click({ force: true });
    cy.url().should('include', '/men/bottoms-men/shorts-men.html');

    //[Button]Gear
    cy.get('#ui-id-6').should('have.text', 'Gear').realHover();
    cy.get('#ui-id-25').should('have.text', 'Bags').click({ force: true });
    cy.url().should('include', '/gear/bags.html');

    cy.get('#ui-id-6').should('have.text', 'Gear').realHover();
    cy.get('#ui-id-26').should('have.text', 'Fitness Equipment').click({ force: true });
    cy.url().should('include', '/gear/fitness-equipment.html');

    cy.get('#ui-id-6').should('have.text', 'Gear').realHover();
    cy.get('#ui-id-27').should('have.text', 'Watches').click({ force: true });
    cy.url().should('include', '/gear/watches.html');

    //[Button]Training
    cy.get('#ui-id-7').should('have.text', 'Training').realHover();
    cy.get('#ui-id-28').should('have.text', 'Video Download').click({ force: true });
    cy.url().should('include', '/training/training-video.html');

    //[Button]Sale
    cy.get('#ui-id-8').should('have.text', 'Sale').click({force: true});
    cy.url().should('include', '/sale.html');
    cy.go('back');
  })
})