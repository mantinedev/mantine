# Affix
Package: @mantine/core
Import: import { Affix } from '@mantine/core';
Description: Renders children inside portal at fixed position

## Usage

`Affix` renders a div element with a fixed position inside the [Portal](https://mantine.dev/core/portal) component.
Use it to display elements fixed at any position on the screen, for example, scroll to top button:

#### Example: usage

```tsx
import { IconArrowUp } from '@tabler/icons-react';
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
              leftSection={<IconArrowUp size={16} />}
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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| portalProps | BasePortalProps | - | Props passed down to the <code>Portal</code> component. Ignored when <code>withinPortal</code> is <code>false</code>. |
| position | AffixPosition | - | Affix position on screen |
| withinPortal | boolean | - | Determines whether the component is rendered within <code>Portal</code> |
| zIndex | React.CSSProperties["zIndex"] | - | Root element <code>z-index</code> property |


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