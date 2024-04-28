import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Que o site  está aberto', () => {
  cy.visit('/');
});

Then('Deve apresentar o título {string}', title => {
  cy.contains(title).should('exist');
});
