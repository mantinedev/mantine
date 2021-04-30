# Mantine Hooks

React hooks for [Mantine](https://mantine.dev/) components library.
Package includes hooks that are used to build components in @mantine/ scoped packages.
You can use these hooks in your applications with or without other @mantine/ packages.

## Documentation

[See full documentation on Mantine website](https://mantine.dev/hooks/getting-started/)

## Installation

```sh
# With yarn
yarn add @mantine/hooks

# With npm
npm install @mantine/hooks
```

## Included hooks

- [use-click-outside](https://mantine.dev/hooks/use-click-outside/) – capture click and touch events from outside of given container
- [use-clipboard](https://mantine.dev/hooks/use-clipboard/) – provides convenient interface to work with clipboard api
- [use-color-scheme](https://mantine.dev/hooks/use-color-scheme/) – detect system color scheme
- [use-document-title](https://mantine.dev/hooks/use-document-title/) - set document.title property
- [use-focus-tap](https://mantine.dev/hooks/use-focus-tap/) – trap focus at given node
- [use-form](https://mantine.dev/hooks/use-form/) – bare minimum form state management
- [use-id](https://mantine.dev/hooks/use-id/) – ensure id for form controls binding
- [use-list-state](https://mantine.dev/hooks/use-list-state/) – hook for convenient array state management
- [use-local-storage-value](https://mantine.dev/hooks/use-local-storage-value/) – use value from localStorage as react state, sync state across tabs
- [use-media-query](https://mantine.dev/hooks/use-media-query/) – execute and subscribe to window.matchMedia queries
- [use-queue](https://mantine.dev/hooks/use-queue/) – add data to queue if given limit is exceeded
- [use-reduced-motion](https://mantine.dev/hooks/use-reduced-motion/) – check if user prefers to reduce motion
- [use-scroll-lock](https://mantine.dev/hooks/use-scroll-lock/) – lock document.body scroll at current position
- [use-window-event](https://mantine.dev/hooks/use-window-event/) – adds event listener to window object on component mount and removes it on unmount

## Licence

All Mantine packages have MIT licence. All Mantine dependencies also have MIT licence, except react-transition-group package which has BSD-3-Clause license.
