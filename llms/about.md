# About

# About Mantine

Mantine is a React components library focused on providing great user and developer experience.
Mantine development was started in January 2021 and the 1.0 version was released on [May 3rd, 2021](https://github.com/mantinedev/mantine/releases/tag/1.0.0),
and since then, [more than 200 releases have been published](https://github.com/mantinedev/mantine/releases).

## Releases cycle

All `@mantine/*` packages follow [semver](https://semver.org/):

* Patches (1.0.X) are usually released every one or two weeks
* Minor versions (1.X.0) are usually released once every 1-2 months
* Major versions (X.0.0) are released when breaking changes are required, usually a new major version is released once every 1-2 years

## Previous versions documentation

* [v1.mantine.dev](https://v1.mantine.dev/)
* [v2.mantine.dev](https://v2.mantine.dev/)
* [v3.mantine.dev](https://v3.mantine.dev/)
* [v4.mantine.dev](https://v4.mantine.dev/)
* [v5.mantine.dev](https://v5.mantine.dev/)
* [v6.mantine.dev](https://v6.mantine.dev/)
* [v7.mantine.dev](https://v7.mantine.dev/)

## Project maintenance

Mantine is built and maintained by [Vitaly Rtishchev](https://github.com/rtivital) and [more than 500 other contributors](https://github.com/mantinedev/mantine/graphs/contributors).
Most of new features and components/hooks are added to the library based on feedback from the community –
you can participate in new features discussions on [GitHub](https://github.com/mantinedev/mantine/discussions) or [Discord](https://discord.gg/wbH82zuWMN).

## Stats

Stats are counted automatically each time new version is published:

* {count.components} components (all `@mantine/*` packages)
* {count.hooks} hooks (`@mantine/hooks` package)
* {count.pages} documentation pages
* {count.demos} demos

## Mantine logo

Download Mantine logos in `.svg` format:

<LogoAssets />

You can also install `@mantinex/mantine-logo` package and import `MantineLogo` component.
Note that the package depends on `@mantine/core` and `@mantine/hooks` packages.

```bash
yarn add @mantinex/mantine-logo
```

```bash
npm install @mantinex/mantine-logo
```

#### Example: logo

```tsx
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return <MantineLogo />;
}
```

