🚗 Concessionária - Sistema Completo (Frontend + Backend)

Este projeto é uma aplicação completa para gerenciamento de veículos de uma concessionária, incluindo login com dois perfis (admin e cliente), CRUD de carros, exibição de catálogo, e integração com backend em Java (Spring Boot).

O objetivo é permitir que apenas o administrador gerencie o cadastro de veículos, enquanto o usuário comum pode apenas visualizar.

📌 Funcionalidades
👤 Autenticação

Login simples usando:
admin / admin
cliente / cliente

Permissões:
Admin: pode criar, editar e excluir carros.
Cliente: pode apenas visualizar o catálogo.

🚘 Gerenciamento de Carros (Admin)
Criar novo carro
Editar informações existentes
Excluir veículos
Upload via URL de imagem (Google, ImgBB, Firebase, etc.)
Todos os campos:
Chassi
Marca
Modelo
Ano
Cor
Preço
KM
URL da imagem

🛒 Catálogo de Carros (Cliente + Admin)
Visualização limpa e moderna
Cards com imagem, valor, informações técnicas
Layout responsivo
Exibição automática dos carros cadastrados no backend

⚙️ Tecnologias Utilizadas
🔹 Frontend
React.js (JavaScript)
React Router DOM
CSS

🔹 Backend
Java 23
Spring Boot
Spring Web
Spring Data JPA
postgreSQL

🚀 Como Rodar o Projeto
Configuração do Banco de Dados (PostgreSQL)

Este projeto utiliza PostgreSQL como banco de dados principal.
Portanto, é obrigatório alterar o arquivo application.properties do Spring Boot para que o backend funcione corretamente.
src/main/resources/application.properties

🔧 Backend (Java Spring Boot)
cd backend
mvn spring-boot:run

💻 Frontend (React)
cd frontend
cd concessionaria
npm install
npm run dev

🔐 Regras de Acesso
Tipo de usuário	Acessos permitidos
Admin	Login, cadastro, edição, exclusão e visualização
Cliente	Apenas visualização

🧑‍💻 Autor Gabriel Pomini de Souza
Projeto desenvolvido com foco em aprendizado, organização e boas práticas.