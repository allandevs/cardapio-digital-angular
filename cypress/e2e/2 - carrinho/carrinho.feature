Feature: Adicionar item ao carrinho
  Como usuário
  Eu quero adicionar um item ao meu carrinho
  Para poder comprá-lo posteriormente

  Background:
    Given que estou na página de detalhes de um item
    When clico no botão "Adicionar R$ 37,90"
    Then o item  deve ser adicionado ao meu carrinho
    And clico em "Ver pedido"


  Scenario: Adicionar item ao carrinho com sucesso
    Then devo ser redirecionado para a rota de pedido

  Scenario: Remover item do pedido com sucesso
    When remover o item do pedido
