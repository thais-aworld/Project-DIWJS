# 📚 Sistema de Alunos (Full-stack)

Sistema completo desenvolvido para o gerenciamento de cadastros de alunos, composto por uma interface moderna em React (Front-end) e integrado a uma API em Node.js (Back-end).


# 🚀 Tecnologias Utilizadas

## Front-end
React - Biblioteca JavaScript para construção de interfaces

Vite - Ferramenta de build rápida e moderna

React Router DOM - Gerenciamento de rotas e navegação

CSS3 - Estilização personalizada com tema escuro (Dark Mode)


## Back-end
Node.js - Ambiente de execução JavaScript para o servidor

Express - Framework para construção de rotas e APIs


# ✨ Funcionalidades

👥 Listagem de Alunos: Visualização de todos os alunos cadastrados em formato de tabela.

➕ Novo Cadastro: Formulário para inclusão de novos registros (Nome, CPF, Data de Nascimento e Endereço).

✏️ Edição de Alunos: Atualização de dados de alunos já cadastrados utilizando passagem de estado via rotas.

🗑️ Exclusão: Remoção de registros do sistema com comunicação direta à API.

🎨 Tema Escuro Nativo: Interface estilizada para melhor experiência visual.


# 📂 Estrutura do Projeto

Project-DIWJS/
├── backend/            # Código da API em Node.js e conexão com o banco de dados
└── frontend/           # Aplicação web em React
    ├── src/
    │   ├── api/        # Configuração e chamadas de requisições HTTP (alunorequest)
    │   ├── componentes/# Componentes reutilizáveis (Formulários, etc.)
    │   ├── paginas/    # Páginas principais da aplicação (Início, Tabela, Cadastro)
    │   ├── App.jsx     # Configuração das rotas principais
    │   └── main.jsx    # Ponto de entrada da aplicação React
    └── public/         # Arquivos estáticos 


# ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1. Configurando e Rodando o Back-end

## Entre na pasta do back-end
cd backend

## Instale as dependências
npm install

## Inicie o servidor do back-end
npm run dev


2. Configurando e Rodando o Front-end
   
## Entre na pasta do front-end
cd frontend
 
## Instale as dependências
npm install

## Inicie o servidor de desenvolvimento do Vite
npm run dev

## Abra o navegador e acesse o endereço fornecido pelo Vite (geralmente http://localhost:5173).


# 👩‍💻 Desenvolvido por

Thais Amorim
