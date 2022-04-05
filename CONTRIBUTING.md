# Contributing to Mantine

Thank you for showing interest in contributing to Mantine. All of your contributions are extremely valuable to the success of this project!

## Ways to contribute

- **Improve documentation** - fix incomplete or missing docs, bad wording, examples, or explanations
- **Give feedback** - we are constantly working to make Mantine a better experience, so please feel free to share what you like, dislike, or any improvements you'd like to see via [GitHub Discussions](https://github.com/mantinedev/mantine/discussions/new) or [Discord](https://discord.gg/eUZpPbpxb4)
- **Share Mantine** - help us spread the word by sharing [Mantine](https://mantine.dev/), or even [Tweet about Mantine directly](https://twitter.com/intent/tweet?text=Mantine%20%E2%80%93%20new%20React%20library%20with%20100%2B%20components%20and%20hooks.%20It%20has%20native%20dark%20theme%20support%20and%20focuses%20on%20accessibility%20and%20usability.%0A%0Ahttp%3A%2F%2Fmantine.dev%0A%0A%23reactjs%20)
- **GitHub Issues** - work on an [outstanding issue](https://github.com/mantinedev/mantine/labels/help%20wanted) to help us keep Mantine a sturdy, reliable UI solution
- **Suggest New Features** - please feel free to dicuss any new features you'd like to see by creating a [GitHub issue](https://github.com/mantinedev/mantine/labels/help%20wanted) or sending a [Discord](https://discord.gg/eUZpPbpxb4) message

## Contributing workflow

- After deciding which [GitHub issue](https://github.com/mantinedev/mantine/labels/help%20wanted) or feature you'd like to work on, create a local branch to track your changes
- If applicable, add unit tests while implementing your code
- Ensure that all commits follow our [commit convention](#commit-convention)
- It is highly recommended that you run the `npm test` command to ensure new contributions integrate with the old before initiating a merge request
- Create a merge request and keep up-to-date with any feedback you receive from a maintainer

If you are unable to finish your task, please let us know in the GitHub Issue in which your work was initiated. The Mantine community is friendly; we won't judge or ask any questions if you decide to cancel your submission.

## Commit convention

Mantine is a monorepo, so it is important to write the correct commit messages to keep the git history clean. All commits made in this repository are divided into 3 groups:

- **package commits** - related to a particular package
- **docs commits** - related to documentation
- **core commits** - only related to repository tooling (**not** associated with any package)

The commit message consists of 3 parts:

```sh
[area] Optional title: Message
```

Examples:

- `[core] Fix documentation deployment script` – Change made in repository script, it is not related to documentation or any package
- `[docs] Update report issues link` – Change related to documentation website
- `[@mantine/core] Button: Add theme focus styles` – Change in `@mantine/core` package at Button component
- `[@mantine/hooks] use-list-state: Add remove handler` – Change in `@mantine/hooks` package at use-list-state hook

## Git branches

- **master**: the current version, or alternatively, patches for current *minor* version (1.0.x)
- **next-minor**: contains the next minor version (1.x.0) (more often than not, you'll want to create a PR directly to this branch)

## Get started with Mantine locally

- Fork the [Mantine repository](https://github.com/mantinedev/mantine)
- Install the [editorconfig](https://editorconfig.org/) extension for your editor
- Install dependencies with yarn – `yarn`
- Take an initial peek at our components by running `npm run storybook`

## npm scripts

All npm scripts are located inside the [package.json](https://github.com/mantinedev/mantine/blob/master/package.json) file.
Individual packages *do not* have dedicated scripts.

### Development scripts

- `docs` – starts the docs development server
- `storybook` - starts the storybook development server

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
