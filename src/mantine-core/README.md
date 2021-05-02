# Mantine

Mantine is a MIT licensed open source react components and hooks library with focus on usability, accessibility and developer experience.

![Banner](https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/mantine-ph.png)

## Links

- [Documentation](https://mantine.dev/)
- [Examples](https://mantine.dev/pages/examples/)
- [Components by category](https://mantine.dev/core/getting-started/#components-by-category)
- [Hooks list](https://mantine.dev/hooks/getting-started/#included-hooks)
- [Notifications system](https://mantine.dev/others/notifications/)
- [Contributing](https://mantine.dev/pages/contribute/)
- [Ask question or give feedback](https://github.com/mantinedev/mantine/discussions)
- [Sign up for monthly newsletter](https://buttondown.email/mantine)
- [Follow Mantine on Twitter](https://twitter.com/mantinedev)

## Features

- **Customization** – colors, fonts, shadows and many other parts are customizable to fit your design needs
- **Dark theme** – mantine supports dark theme by default in all components
- **Accessibility and usability** – all components follow accessibility best practices and feature full keyboard support
- **TypeScript** – all @mantine/ scoped packages are built with TypeScript and support it by default
- **Ready for production** – mantine is well tested and works in all modern browsers
- **Developer experience** – mantine comes with more than 50 components and 15 hooks to cover you in most cases
- **No annoying focus ring** – with new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
- **React JSS** – take advantage of all react-jss features: automatic critical css extraction during ssr, lazy evaluation, dynamic theming and others
- **React and Preact** – mantine works flawlessly with preact

## Installation

```sh
# With yarn
yarn add @mantine/core @mantine/hooks react-jss

# With npm
yarn add @mantine/core @mantine/hooks react-jss

# With install-peerdeps
npx install-peerdeps @mantine/core
```

## Usage

Now you can import and use any component from @mantine/core:

```tsx
import { Button } from '@mantine/core';

function App() {
  return <Button>Mantine button</Button>;
}
```

## Licence

All Mantine packages have MIT licence. All Mantine dependencies also have MIT licence, except react-transition-group package which has BSD-3-Clause license.
