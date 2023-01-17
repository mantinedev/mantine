# Contributing to Mantine

First of all, thank you for showing interest in contributing to Mantine, all your contributions are extremely valuable to the project!

## Ways to contribute

- **Improve documentation:** fix incomplete or missing docs, bad wording, examples or explanations
- **Give feedback:** we are constantly working on making Mantine better, please share how you use Mantine, what features are missing and what is done good via [GitHub Discussions](https://github.com/mantinedev/mantine/discussions/new) or [Discord](https://discord.gg/wbH82zuWMN)
- **Share Mantine:** share link to Mantine docs with everyone who can be interested, [share Mantine on Twitter](https://twitter.com/intent/tweet?text=Mantine%20%E2%80%93%20new%20React%20library%20with%20100%2B%20components%20and%20hooks.%20It%20has%20native%20dark%20theme%20support%20and%20focuses%20on%20accessibility%20and%20usability.%0A%0Ahttp%3A%2F%2Fmantine.dev%0A%0A%23reactjs%20)
- **Contribute to codebase:** propose new feature via [GitHub Issues](https://github.com/mantinedev/mantine/issues/new) or find an [existing one](https://github.com/mantinedev/mantine/labels/help%20wanted) that you are interested in and work on it
- **Give us a code review:** help us identify problems with [source code](https://github.com/mantinedev/mantine/tree/master/src) or make Mantine more performant

## Contributing workflow

- Decide what you want to contribute
- If you want to implement new feature discuss it with maintainer ([GitHub Discussions](https://github.com/mantinedev/mantine/discussions/new) or [Discord](https://discord.gg/wbH82zuWMN)) before jumping into code
- After finalizing issue details work on code, please follow commit convention
- Run tests with `npm test` and submit a PR if everything is fine
- Get a code review and fix all issues noticed by maintainer
- If you cannot finish your task or changed your mind – that's totally fine, just let us know in GitHub issue that you've created in first step. Mantine community is friendly – we won't judge or ask any questions if you decide to cancel your submission
- Your PR is merged, you are awesome!

## Commit convention

Mantine is a monorepo and it is important to write correct commit messages to keep git history clean.
All commits made in this repository are divided in 3 groups:

- **package commits** related to particular package
- **docs commits** related to documentation
- **core commits** only related to repository tooling and not associated with any package

Commit message consists of 3 parts:

```bash
[area] Optional title: Message
```

Examples:

- `[core] Fix documentation deployment script` – Change made in repository script, it is not related to documentation or any package
- `[docs] Update report issues link` – Change related to documentation website
- `[@mantine/core] Button: Add theme focus styles` – Change in `@mantine/core` package at Button component
- `[@mantine/hooks] use-list-state: Add remove handler` – Change in `@mantine/hooks` package at use-list-state hook

## Git branches

- **master** – current version, patches for current minor version (1.0.x)
- **dev** – contains next minor version (1.x.0), most likely you would want to create a PR to this branch

## Get started with Mantine locally

- Install [editorconfig](https://editorconfig.org/) extension for your editor
- Fork [repository](https://github.com/mantinedev/mantine), clone or download your fork
- Install dependencies with yarn – `yarn`
- Build local version of all packages – `npm run build:all`
- Build local version of specific packages – `npm run build @mantine/core @mantine/demos @mantine/hooks`
- To start storybook – `npm run storybook`
- To start docs – `npm run docs`
- To rebuild props descriptions – `npm run docs:docgen`

## npm scripts

All npm scripts are located at [main package.json](https://github.com/mantinedev/mantine/blob/master/package.json),
individual packages do not have dedicated scripts.

### Development scripts

- `docs` – starts docs development server
- `storybook` – starts storybook development server

### Testing scripts

- `syncpack` – runs [syncpack](https://www.npmjs.com/package/syncpack)
- `typecheck` – runs TypeScript typechecking with `tsc --noEmit` on all packages and docs
- `lint` – runs ESLint on src folder
- `jest` – runs tests with jest
- `test` – runs all above testing scripts

### Docs scripts

- `docs:docgen` – generates components types information with [docgen script](https://github.com/mantinedev/mantine/blob/master/scripts/docgen.ts)
- `docs:sizes` – generates bundle size information for all packages
- `docs:clean` – runs `gatsby clean`
- `docs:build` – runs all above docs scripts and build production docs bundle
- `docs:deploy` – runs all above docs scripts and deploys docs to GitHub Pages
