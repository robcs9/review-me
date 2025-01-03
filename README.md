# review-me
A review survey service in the works. 

### TODO

- [x] Estrutura inicial do Formulário
- [x] Formulário funcional
- [x] Resolver problema de navegação usando os caminhos da estrutura do projeto
- [x] Modelagem de dados e banco
- [x] Integrar implementações do "playground" à rota principal
- [x] Corrigir desaparecimento do campo "qualidade" do FormData durante submissão quando deveria ser undefined ou null
- [x] Fix buggy form responses
- [x] Verificar transições do formModal ao submeter o form
- [] ~~Adicionar efeito de preenchimento ao hover dos ícones estrelas~~
- [] ~~Gerador de Relatórios (jsPDF)~~


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
