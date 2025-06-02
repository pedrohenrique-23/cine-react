
# 🎬 CineReact

O **CineReact** é uma aplicação web de filmes desenvolvida com **React.js** e **Firebase**, que permite aos usuários navegarem por títulos populares, favoritar filmes, visualizar detalhes e gerenciar sua lista personalizada. O projeto consome a **TMDb API** para exibir os dados dos filmes em tempo real.

> 🚀 Este projeto foi desenvolvido do zero de forma individual por mim como prática para consolidar meus conhecimentos em desenvolvimento front-end.

---

## ✨ Funcionalidades

- ✅ Autenticação de usuários (login e cadastro) com Firebase Authentication
- ✅ Navegação protegida por rotas privadas
- ✅ Listagem de filmes populares usando a API do TMDb
- ✅ Modal com detalhes do filme ao clicar em qualquer card
- ✅ Sistema de favoritos com persistência no Firestore (por usuário)
- ✅ Página exclusiva de "Meus Favoritos"
- ✅ Remoção de favoritos com atualização em tempo real
- ✅ Design responsivo e com foco em usabilidade

---

## 🛠️ Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Firebase (Auth + Firestore)](https://firebase.google.com/)
- [TMDb API](https://www.themoviedb.org/documentation/api)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- CSS Modules

---

## 🔧 Como Executar o Projeto Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/pedrohenrique-23/cine-react.git
cd cine-react
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o Firebase:**

Crie um arquivo `.env` na raiz do projeto com as suas credenciais do Firebase:

```
VITE_API_KEY=SUACHAVE
VITE_AUTH_DOMAIN=SEUDOMINIO.firebaseapp.com
VITE_PROJECT_ID=SEUID
VITE_STORAGE_BUCKET=SEUBUCKET
VITE_MESSAGING_SENDER_ID=SENDER_ID
VITE_APP_ID=SEU_APP_ID
```

4. **Execute a aplicação:**

```bash
npm run dev
```

5. Acesse `http://localhost:5173`

---

## 🧠 Aprendizados

Durante o desenvolvimento do CineReact, aprofundei meus conhecimentos em:
- **React moderno com hooks**
- **Gerenciamento de estado global com Context API**
- **Integração com serviços externos (APIs e Firebase)**
- **Autenticação e segurança de rotas**
- **UX responsivo e boas práticas de componentização**

---

## 📌 Próximas melhorias

- 🎯 Sistema de avaliações/comentários por filme
- 🎯 Melhorias no design da UI/UX geral
- 🎯 Página de perfil com dados do usuário

---

## 📃 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Feito com 💻 por **Pedro Henrique do Nascimento Silva**

- 🌐 [Portfólio](https://portfolio-opal-psi-45.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/pedro-silva-05794833b/)
- 💻 [GitHub](https://github.com/pedrohenrique-23)
