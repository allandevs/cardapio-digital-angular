# Aplicação Oliver Cardápio Digital

Este projeto está em fase de desenvolvimento utilizando Angular. Ele permite que estabelecimentos, como restaurantes, criem seus cardápios de forma digital, facilitando a visualização e interação dos clientes com os itens disponíveis. Principais recursos e tecnologias incluem:

- Exibição do menu digital
- Gerenciamento de estado com NGXS
- Testes unitários
- Testes automatizados
- Integração contínua
- Criação automática de pull requests usando GitHub Actions

## Funcionalidades

- **Navegação Intuitiva:** Interface amigável e de fácil navegação para os clientes explorarem o cardápio.

- **Categorias e Itens:** Organização eficiente por categorias, facilitando a busca por tipos específicos de alimentos ou bebidas.

- **Pedidos Online:** Capacidade de fazer pedidos diretamente pela aplicação, oferecendo uma experiência de compra integrada.(será desenvolvido na versão 2.0.0)

- **Gestão de Pedidos:** Ferramenta para os estabelecimentos acompanharem os pedidos recebidos, gerenciando o status e a entrega. (será desenvolvido na versão 3.0.0)

## Versão Angular

17.0.2

## Versão App Cardápio Digital

1.0.0

## Iniciando

Estas instruções ajudarão você a obter uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

### Estrutura do Projeto

```
|-- app
    |-- +state
    |-- feature
        |-- cardapio
            |-- [+] components
            |-- [+] views
            |-- cardapio.module.ts
            |-- cardapio.routing.module.ts
            |-- cardapio.service.ts
        |-- pedido
            |-- [+] components
            |-- [+] views
            |-- pedido.module.ts
            |-- pedido.routing.module.ts
    |-- layout
    |-- shared
    |-- utils
    |-- error
```

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js 18x](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (normalmente vem com o Node.js)
- [Angular CLI](https://angular.io/cli)

## Configuração

Siga estes exemplos passo a passo para configurar um ambiente de desenvolvimento:

```bash
git clone https://github.com/allandevs/cardapio-digital-angular.git
cd cardapio-digital-angular
npm install
```

## Servidor de Desenvolvimento

Execute `npm run start` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/`. O aplicativo será recarregado automaticamente ao fazer alterações.

## Construção do Projeto

Execute `npm run build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Execução de Testes Unitários

Execute `npm run test:ci` para executar testes unitários usando o Jest.

## Execução do Lint

Execute `npm run lint` para realizar a análise de erros de código.

## Execução do Cypress

- Executar `npm run cypress:open` possibilita a execução interativa e visualização dos testes escritos com o Cypress através do Cypress Test Runner.

- Já o comando `npm run cypress:run` possibilita a execução sem interação gráfica, e os resultados dos testes são impressos no console. Este modo é adequado para ambientes de integração contínua e execução automatizada, proporcionando uma visualização direta no console do terminal.

## Autor

Allan Fonseca de Oliveira -
