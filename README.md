# Instruções de instalação e execução para avaliação dos testes:

Siga os passos abaixo para configurar e executar o aplicativo:

## Instalar o Node.js:

Certifique-se de ter o Node.js instalado em seu sistema. A versão recomendada é a v18.11.0. Você pode baixar o Node.js em: https://nodejs.org

## Instalar o JSON Server:

O JSON Server é uma dependência necessária para simular uma API RESTful. Para instalá-lo globalmente em seu sistema, abra o terminal e execute o seguinte comando: `npm install -g json-server`

## Instalar o Angular Material (caso necessário):

Se você estiver enfrentando problemas com o Angular Material, certifique-se de instalá-lo corretamente. No terminal, execute o seguinte comando:
`npm install --save @angular/material @angular/cdk @angular/animations`

## Executar o aplicativo:

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Para executar o aplicativo, siga os seguintes comandos:
`npm start`
Este comando iniciará o servidor de desenvolvimento do Angular. O aplicativo estará disponível no navegador acessando http://localhost:4200. O aplicativo será recarregado automaticamente se você modificar qualquer um dos arquivos de origem.

Em uma nova janela do terminal, execute o seguinte comando para iniciar o JSON Server e simular a API RESTful:
`json-server --watch db.json --port 3001`

O JSON Server estará disponível em http://localhost:3001 e fornecerá os dados necessários para o aplicativo.

Observação: Certifique-se de executar o JSON Server antes de iniciar o aplicativo Angular.

Agora você pode usar o aplicativo seguindo as funcionalidades fornecidas.

Este projeto foi gerado com o Angular CLI na versão 16.1.3.

Para obter mais ajuda sobre o Angular CLI, use o comando ng help ou consulte a página Angular CLI Overview and Command Reference.

Espero que isso ajude!
