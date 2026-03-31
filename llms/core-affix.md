# Affix
Package: @mantine/core
Import: import { Affix } from '@mantine/core';
Description: Renders children inside portal at fixed position

## Usage

`Affix` renders a div element with a fixed position inside the [Portal](https://mantine.dev/llms/core-portal.md) component.
Use it to display elements fixed at any position on the screen, for example, scroll to top button:

```tsx
import { ArrowUpIcon } from '@phosphor-icons/react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<ArrowUpIcon size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
```



#### Props

**Affix props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| portalProps | BasePortalProps | - | Props passed down to the `Portal` component. Ignored when `withinPortal` is `false`. |
| position | AffixPosition | - | Affix position on screen |
| withinPortal | boolean | - | Determines whether the component is rendered within `Portal` |
| zIndex | React.CSSProperties["zIndex"] | - | Root element `z-index` property |


#### Styles API

Affix component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Affix selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Affix-root | Root element |

**Affix CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --affix-z-index | Controls `z-index` property |
| root | --affix-top | Controls `top` property |
| root | --affix-bottom | Controls `bottom` property |
| root | --affix-left | Controls `left` property |
| root | --affix-right | Controls `right` property |
