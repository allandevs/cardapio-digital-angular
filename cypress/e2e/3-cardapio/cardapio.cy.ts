import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
Given('I open the website', () => {
  cy.visit('http://localhost:4200/');
});

Then('I should see the title {string}', title => {
  cy.title().should('include', title);
});
