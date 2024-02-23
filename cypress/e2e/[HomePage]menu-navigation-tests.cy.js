describe('Main navigation actions', () => {
  const navigateAndVerify = (buttonSelector, expectedText, targetUrl) => {
    cy.get(buttonSelector).should('have.text', expectedText).click({ force: true });
    cy.url().should('include', targetUrl)
    cy.go('back');
  };

  const hoverAndVerifySubMenu = (mainButtonSelector, subMenuSelector, subMenuText, targetUrl) => {
    cy.get(mainButtonSelector).realHover();
    cy.get(subMenuSelector).should('have.text', subMenuText).click({ force: true });
    cy.url().should('include', targetUrl);
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('check the function of the "Whats New" button', () => {
    navigateAndVerify('#ui-id-3', "What's New", '/what-is-new.html')
  });

  it('checks submenu items under "Women button', () => {
    const womenButton = '#ui-id-4'
    hoverAndVerifySubMenu(womenButton, '#ui-id-11', 'Jackets', '/women/tops-women/jackets-women.html');
    hoverAndVerifySubMenu(womenButton, '#ui-id-12', 'Hoodies & Sweatshirts', '/women/tops-women/hoodies-and-sweatshirts-women.html');
    hoverAndVerifySubMenu(womenButton, '#ui-id-13', 'Tees', '/women/tops-women/tees-women.html');
    hoverAndVerifySubMenu(womenButton, '#ui-id-14', 'Bras & Tanks', '/women/tops-women/tanks-women.html');
    hoverAndVerifySubMenu(womenButton, '#ui-id-15', 'Pants', '/women/bottoms-women/pants-women.html');
    hoverAndVerifySubMenu(womenButton, '#ui-id-16', 'Shorts', '/women/bottoms-women/shorts-women.html');
  });

  it('checks submenu items under "Men" button', () => {
    const menButton = '#ui-id-5'
    hoverAndVerifySubMenu(menButton, '#ui-id-19', 'Jackets', '/men/tops-men/jackets-men.html');
    hoverAndVerifySubMenu(menButton, '#ui-id-20', 'Hoodies & Sweatshirts', '/men/tops-men/hoodies-and-sweatshirts-men.html');
    hoverAndVerifySubMenu(menButton, '#ui-id-21', 'Tees', '/men/tops-men/tees-men.html');
    hoverAndVerifySubMenu(menButton, '#ui-id-22', 'Tanks', '/men/tops-men/tanks-men.html');
    hoverAndVerifySubMenu(menButton, '#ui-id-23', 'Pants', '/pants-men.html');
    hoverAndVerifySubMenu(menButton, '#ui-id-24', 'Shorts', '/men/bottoms-men/shorts-men.html');

    hoverAndVerifySubMenu(menButton, '#ui-id-22', 'Tanks', '/men/tops-men/tanks-men.html');
    hoverAndVerifySubMenu(menButton, '#ui-id-23', 'Pants', '/pants-men.html');
    hoverAndVerifySubMenu(menButton, '#ui-id-24', 'Shorts', '/men/bottoms-men/shorts-men.html');
  });

  it('checks submenu items under "Gear" button', () => {
    const gearButton = '#ui-id-6'
    hoverAndVerifySubMenu(gearButton, '#ui-id-25', 'Bags', '/gear/bags.html');
    hoverAndVerifySubMenu(gearButton, '#ui-id-26', 'Fitness Equipment', '/gear/fitness-equipment.html');
    hoverAndVerifySubMenu(gearButton, '#ui-id-27', 'Watches', '/gear/watches.html');
  });

  it('checks submenu items under "Training" button', () => {
    const trainingButton = '#ui-id-7'
    hoverAndVerifySubMenu(trainingButton, '#ui-id-28', 'Video Download', '/training/training-video.html');
  });

  it('check the function of the "Sale" button', () => {
    navigateAndVerify('#ui-id-8', 'Sale', '/sale.html')
  });

});