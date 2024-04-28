import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que estou na página de detalhes de um item', () => {
  cy.visit('/');
  cy.contains('Espetaculoso').click();
});

When('clico no botão {string}', buttonText => {
  cy.contains(buttonText).click();
});

Then('o item  deve ser adicionado ao meu carrinho', () => {
  cy.contains('Ver pedido').should('be.visible');
});

When('clico em {string}', buttonName => {
  cy.contains(buttonName).click();
});

Then('devo ser redirecionado para a rota de pedido', () => {
  cy.url().should('include', '/pedido');
});

When('remover o item do pedido', () => {
  cy.get('button[aria-label="remover item"]').click();
});
