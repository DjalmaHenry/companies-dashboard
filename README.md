<h1 align=center>Companies Dashboard</h1>

O **Companies Dashboard** é um projeto desenvolvido em Ruby on Rails focado na gestão de empresas, permitindo o gerenciamento de empresas e seus equipamentos associados.

<a href="LINK_DO_VIDEO">
  <img src="IMAGEM_MINIATURA_DO_VIDEO" alt="Vídeo de Demonstração" />
</a>

<img width="1440" alt="Screenshot 2023-10-14 at 19 45 18" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/b3c8c2b5-aa95-4c2b-b220-7616c57452b3">
<img width="1440" alt="Screenshot 2023-10-14 at 19 40 51" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/88bf5503-c6e2-40a7-9503-fee29c5798a6">
<img width="1440" alt="Screenshot 2023-10-14 at 19 43 34" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/d8763e53-e80e-4135-baf0-f9ea8066f207">
<img width="1440" alt="Screenshot 2023-10-14 at 19 43 59" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/207246b4-d7a5-4a50-9090-65d33302e412">
<img width="1440" alt="Screenshot 2023-10-14 at 19 44 11" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/576da6da-56b5-4ef9-b943-07bc450178df">
<img width="1440" alt="Screenshot 2023-10-14 at 20 58 32" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/569c9c29-2619-4b27-ba11-8d5fe2d9d15e">
<img width="1440" alt="Screenshot 2023-10-14 at 19 44 55" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/e5da4866-bfd4-474e-a589-04eaece90705">
<img width="318" alt="Screenshot 2023-10-14 at 19 51 04" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/5da69d08-2831-499b-82ca-b617d2b432e7">
<img width="322" alt=" " src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/50ee70f4-2b3e-4321-83f0-bffccb0e9e87">
<img width="311" alt="Screenshot 2023-10-14 at 19 41 04" src="https://github.com/DjalmaHenry/companies-dashboard/assets/45500812/25a23638-a63e-45a4-8263-802325d1f878">



## Recursos

- **Autenticação**: Autenticação de usuários com mensagens de validação de erro.
- **Tabela de empresas e equipamentos**: Visualização de empresas e equipamentos associados com suporte a paginação.
- **Formulários**: Criação de empresas, equipamentos e usuários com validação integrada.

## Tecnologias Utilizadas

- **Linguagem**: Ruby
- **Framework**: Rails
- **Banco de Dados**: PostgreSQL
- **Gem's**:
  - `devise` para autenticação.
  - `formtastic` para formatação e validação de formulários.
  - `will_paginate` para paginação.

## Deploy

A aplicação foi hospedada no Fly.io. Você pode acessá-la através do link:
[https://companiesdashboard.fly.dev/](https://companiesdashboard.fly.dev/)

## Rodando localmente

Para rodar o projeto localmente, siga os seguintes passos:

1. Clone o repositório:
   ```bash
   git clone LINK_DO_REPOSITÓRIO
   cd NOMEDAPASTA
   ```
2. Instale as dependências:
   ```bash
   bundle install
   ```
3. Crie o banco de dados e aplique as migrações:
   ```bash
   rails db:create db:migrate
   ```
4. Crie um usuário padrão para acesso local:
   ```bash
   rake user:create
   ```
5. Inicie o servidor:
   ```bash
   rails s
   ```
6. Acesse o projeto no seu navegador em `http://localhost:3000/` e faça login com:
   - **Login**: user@email.com
   - **Senha**: 123456a
