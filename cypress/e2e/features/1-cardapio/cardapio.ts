import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
Given('I open the website', () => {
  cy.visit('/');
});

Then('I should see the title {string}', title => {
  cy.title().should('include', title);
});
