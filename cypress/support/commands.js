
//
//
import "cypress-real-events";
//
//
//
// -- This is a register command --
Cypress.Commands.add('register', (firstName, lastName, email, password) => { 
    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a").click();
    cy.get('#firstname').type(firstName);
    cy.get("#lastname").type(lastName);
    cy.get("#email_address").type(email);
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
    cy.get("#form-validate > div > div.primary > button").click();
})
//
//
//
// -- This is a login command --
 Cypress.Commands.add('login', (email, password) => { 
    cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a").click();
    cy.get('#email').type(email);
    cy.get("#pass").type(password);
    cy.get("#send2").click();
})
//
//
//