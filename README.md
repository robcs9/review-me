# review-me
A review survey service in the works. 

### TODO

- [x] Estrutura inicial do Formulário
- [x] Formulário funcional
- [~] Fix buggy form responses (always getting error toasts at '/playground' upon form submission and always failing the first submission at the root route)
- [] Resolver problema de navegação usando path strings (inconsistência devido ao app não estar na raiz do projeto?)
- [] Modelagem de dados e banco
- [] Gerador de Relatórios (jsPDF)
- [] Adicionar efeito de preenchimento ao hover dos ícones estrelas


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
