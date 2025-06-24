# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## instalação  de ferrmanetas e bibliotecas

Node.js
npx create-react-app my-app --template typescript
npm i @types/styled-components

npm install styled-components @types/styled-components ---> *apos instalação desse componente é necessario instalar para corrigir erros 'npm i'.

npm init -y ---> instala na pasta do servidor

npm install react-router-dom @types/react-router-dom
npm install node
npm install -g nodemon 'executar comando ---->  nodemon app.js'
npm i express cors 
npm i mysql2
npm install -g ts-node | tsc --init |  npm install -g typescript |  // corrigir compatibilidade typscript
npm i express-handlebars
npm install axios
npm install formik yup --> para formularios

npm install react-bootstrap  ---> bibliotecas bootstrap

### resolvendo problema do vital  ---------------###





npm install --cache /tmp/empty-cache
Remove-Item -Recurse -Force node_modules, package-lock.json
npm cache verify
npm cache clean --force
npm update
npm install

npm install react-hook-form --> relatorios