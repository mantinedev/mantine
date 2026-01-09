# AppShell
Package: @mantine/core
Import: import { AppShell } from '@mantine/core';
Description: Responsive shell for your application with header, navbar, aside and footer

## Examples

This page includes only documentation. All associated `AppShell` components have a fixed
position; examples are included in a separate documentation section.

<ExamplesButton link="/app-shell?e=BasicAppShell" label="Open AppShell examples page" />

## Usage

`AppShell` is a layout component that can be used to implement a common Header / Navbar / Footer / Aside
layout pattern. All `AppShell` components have `position: fixed` style, so they do not scroll with
the page.

[Basic AppShell example](https://mantine.dev/app-shell?e=BasicAppShell) with header and navbar.
The navbar is hidden on mobile by default and toggled with the burger button.

```tsx
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />

        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar>Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
```

## AppShell components

* `AppShell` – root component that wraps all other sections and configures the overall layout.
* `AppShell.Header` – fixed header at the top, controlled by the `header` prop.
* `AppShell.Navbar` – fixed navbar on the left, controlled by the `navbar` prop.
* `AppShell.Aside` – fixed aside on the right, controlled by the `aside` prop.
* `AppShell.Footer` – fixed footer at the bottom, controlled by the `footer` prop.
* `AppShell.Main` – main content area, statically positioned and offset by the other sections.
* `AppShell.Section` – utility for grouping content inside `AppShell.Navbar` or `AppShell.Aside`, useful for scrollable areas.

## Configuration

The `AppShell` component accepts `header`, `footer`, `navbar`, and `aside` props to configure the corresponding sections.
You must set these props if you want to use the associated components.
For example, to use the `AppShell.Header` component, you need to set the `header` prop on the `AppShell` component.

`header` and `footer` configuration objects share the same type:

```tsx
interface Configuration {
  /** Height of the section: number, string or
   ** object with breakpoints as keys and height as values */
  height: AppShellSize | AppShellResponsiveSize;

  /** When collapsed is true, the section is hidden
   ** from the viewport and doesn't affect AppShell.Main offset */
  collapsed?: boolean;

  /** Controls whether AppShell.Main should be offset by this section.
   ** Useful for scenarios like hiding a header based on scroll position. */
  offset?: boolean;
}
```

`navbar` and `aside` configuration objects type:

```tsx
interface Configuration {
  /** Width of the section: number, string, or
   ** object with breakpoints as keys and widths as values */
  width: AppShellSize | AppShellResponsiveSize;

  /** Breakpoint at which section switches to mobile mode.
   ** In mobile mode, the section always has 100% width and its
   ** collapsed state is controlled by `collapsed.mobile`
   ** instead of `collapsed.desktop` */
  breakpoint: MantineBreakpoint | (string & {}) | number;

  /** Determines whether the section should be collapsed */
  collapsed?: { desktop?: boolean; mobile?: boolean };
}
```

## layout prop

`layout` prop controls how `AppShell.Header`/`AppShell.Footer` and `AppShell.Navbar`/`AppShell.Aside`
are positioned relative to each other. It accepts `alt` and `default` values:

* `alt` – `AppShell.Navbar`/`AppShell.Aside` extends the full viewport height, while `AppShell.Header`/`AppShell.Footer` width equals the viewport width minus the width of `AppShell.Navbar` and `AppShell.Aside` ([example](https://mantine.dev/app-shell?e=AltLayout))
* `default` – `AppShell.Navbar`/`AppShell.Aside` height equals the viewport height minus `AppShell.Header`/`AppShell.Footer` height, and `AppShell.Header`/`AppShell.Footer` spans the full viewport width ([example](https://mantine.dev/app-shell?e=FullLayout))

## Height configuration

`height` property in `header` and `footer` configuration objects works the following way:

* If you pass a number, the value will be converted to [rem](https://mantine.dev/styles/rem) and used as
  height at all viewport sizes.
* To change height based on viewport width, use an object with breakpoints as keys and height as
  values. This works the same way as [style props](https://mantine.dev/styles/style-props#responsive-styles).

Example with height as a number: `height` is converted to [rem](https://mantine.dev/styles/rem),
`height` is the same at all viewport sizes:

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell header={{ height: 48 }}>
      <AppShell.Header>Header</AppShell.Header>
    </AppShell>
  );
}
```

Example with height as an object with breakpoints:

* `height` is 48 when viewport width is \< `theme.breakpoints.sm`
* `height` is 60 when viewport width is >= `theme.breakpoints.sm` and \< `theme.breakpoints.lg`
* `height` is 76 when viewport width is >= `theme.breakpoints.lg`

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell header={{ height: { base: 48, sm: 60, lg: 76 } }}>
      <AppShell.Header>Header</AppShell.Header>
    </AppShell>
  );
}
```

## Width configuration

`width` property in `navbar` and `aside` configuration objects works the following way:

* If you pass a number, the value will be converted to [rem](https://mantine.dev/styles/rem) and used as
  width when the viewport is larger than `breakpoint`.
* To change width based on viewport width, use an object with breakpoints as keys and width as
  values. This works the same way as [style props](https://mantine.dev/styles/style-props#responsive-styles).
  Note that width is always 100% when the viewport is smaller than `breakpoint`.

Example with width as a number: `width` is converted to [rem](https://mantine.dev/styles/rem),
`width` is the same at viewport sizes larger than `breakpoint`,
`width` is 100% when viewport width is less than `breakpoint`:

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell navbar={{ width: 48, breakpoint: 'sm' }}>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
    </AppShell>
  );
}
```

Example with width as an object with breakpoints:

* `width` is 100% when viewport width is \< `theme.breakpoints.sm`
* `width` is 200 when viewport width is >= `theme.breakpoints.sm` and \< `theme.breakpoints.lg`
* `width` is 300 when viewport width is >= `theme.breakpoints.lg`

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      navbar={{ width: { sm: 200, lg: 300 }, breakpoint: 'sm' }}
    >
      <AppShell.Navbar>Navbar</AppShell.Navbar>
    </AppShell>
  );
}
```

## padding prop

The `padding` prop controls the padding of the `AppShell.Main` component. It's important to use this prop
instead of setting padding directly on `AppShell.Main` because this padding is also used to offset
the `AppShell.Header`, `AppShell.Navbar`, `AppShell.Aside`, and `AppShell.Footer` components.

The `padding` prop works the same way as [style props](https://mantine.dev/styles/style-props#responsive-styles) and
accepts numbers, strings, and objects with breakpoints as keys and padding values. You can
reference `theme.spacing` values or use any valid CSS values.

Example with static `padding` prop:

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return <AppShell padding="md">{/* AppShell content */}</AppShell>;
}
```

Example with responsive `padding` prop:

* `padding` is 10 when viewport width is \< `theme.breakpoints.sm`
* `padding` is 15 when viewport width is >= `theme.breakpoints.sm` and \< `theme.breakpoints.lg`
* `padding` is `theme.spacing.xl` when viewport width is >= `theme.breakpoints.lg`

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell padding={{ base: 10, sm: 15, lg: 'xl' }}>
      {/* AppShell content */}
    </AppShell>
  );
}
```

## Header offset configuration

The `header` prop includes an `offset` property that allows you to control
whether the `AppShell.Main` component is offset by the header's height.
This is particularly useful when you want to collapse the `AppShell.Header`
based on scroll position. For example, you can use the [use-headroom](https://mantine.dev/hooks/use-headroom)
hook to hide the header when the user scrolls down and show it when
scrolling up ([example](https://mantine.dev/app-shell?e=Headroom)).

```tsx
import { AppShell, rem } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      padding="md"
    >
      <AppShell.Header>Header</AppShell.Header>

      <AppShell.Main
        pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}
      >
        {/* Content */}
      </AppShell.Main>
    </AppShell>
  );
}
```

## Collapsed navbar/aside configuration

The `navbar` and `aside` props include a `collapsed` property that accepts an object with the format `{ mobile: boolean; desktop: boolean }`.
This allows you to configure the collapsed state differently based on viewport width.

[Example](https://mantine.dev/app-shell?e=CollapseDesktop) with separate collapsed states for mobile and desktop:

```tsx
import { AppShell, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function CollapseDesktop() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] =
    useDisclosure(true);

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Button onClick={toggleDesktop} visibleFrom="sm">
          Toggle navbar
        </Button>
        <Button onClick={toggleMobile} hiddenFrom="sm">
          Toggle navbar
        </Button>
      </AppShell.Main>
    </AppShell>
  );
}
```

## withBorder prop

The `withBorder` prop is available on `AppShell` and associated sections: `AppShell.Header`, `AppShell.Navbar`, `AppShell.Aside` and `AppShell.Footer`.
By default, `withBorder` prop is `true` – all components have a border on the side that is adjacent to the `AppShell.Main` component.
For example, `AppShell.Header` is located at the top of the page – it has a border on the bottom side,
`AppShell.Navbar` is located on the left side of the page – it has a border on the right side.

To remove the border from all components, set `withBorder={false}` on the `AppShell`:

```tsx
import { AppShell } from '@mantine/core';

// None of the components will have a border
function Demo() {
  return (
    <AppShell withBorder={false}>{/* AppShell content */}</AppShell>
  );
}
```

To remove the border from a specific component, set `withBorder={false}` on that component:

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell>
      <AppShell.Header withBorder={false}>Header</AppShell.Header>
    </AppShell>
  );
}
```

## zIndex prop

The `zIndex` prop is available on `AppShell` and its associated sections: `AppShell.Header`, `AppShell.Navbar`, `AppShell.Aside`, and `AppShell.Footer`.
By default, all sections have a `z-index` of `100`.

To change the `z-index` of all sections, set the `zIndex` prop on the `AppShell` component:

```tsx
import { AppShell } from '@mantine/core';

// All sections will have z-index of 200
function Demo() {
  return <AppShell zIndex={200}>{/* AppShell content */}</AppShell>;
}
```

To change `z-index` of a specific section, set `zIndex` prop on that section:

```tsx
import { AppShell } from '@mantine/core';

// AppShell.Header has z-index of 100
// AppShell.Navbar and AppShell.Aside have z-index of 300
function Demo() {
  return (
    <AppShell>
      <AppShell.Header zIndex={100}>Header</AppShell.Header>
      <AppShell.Navbar zIndex={300}>Navbar</AppShell.Navbar>
      <AppShell.Aside zIndex={300}>Aside</AppShell.Aside>
    </AppShell>
  );
}
```

## Control transitions

Use the `transitionDuration` and `transitionTimingFunction` props on the `AppShell` component to control section animations:

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      {/* AppShell content */}
    </AppShell>
  );
}
```

## disabled prop

Set the `disabled` prop on the `AppShell` component to prevent all sections except `AppShell.Main` from rendering.
This is useful when you want to hide the shell on certain pages of your application.

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return <AppShell disabled>{/* AppShell content */}</AppShell>;
}
```

## AppShell.Section component

`AppShell.Section` is used to create organized areas within `AppShell.Navbar` and `AppShell.Aside`.
Since these components are flexbox containers with `flex-direction: column`, the `AppShell.Section`
component with the `grow` prop will expand to fill available space and can be made scrollable by setting
`component={ScrollArea}`.

In the following example:

* The first and last sections (header and footer) take only the space needed for their content
* The middle section with `grow` takes all remaining space and becomes scrollable when content exceeds the available height

```tsx
import { AppShell, ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <AppShell navbar={{ width: 300, breakpoint: 0 }}>
      <AppShell.Navbar>
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          Navbar main section, it will
        </AppShell.Section>
        <AppShell.Section>
          Navbar footer – always at the bottom
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
```

## Semantic elements

Important: do not use `<main>` inside `AppShell.Main`, it is allowed
to use only one `<main>` element per page.

## CSS variables

Example of using CSS variables in styles:

```scss
.main {
  min-height: calc(100dvh - var(--app-shell-header-height));
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| aside | AppShellAsideConfiguration | - | <code>Aside</code> configuration, controls width, breakpoints and collapsed state. Required if you use <code>Aside</code> component. |
| disabled | boolean | - | If set, <code>Navbar</code>, <code>Aside</code>, <code>Header</code> and <code>Footer</code> components are hidden |
| footer | AppShellFooterConfiguration | - | <code>Footer</code> configuration, controls height, offset and collapsed state. Required if you use <code>Footer</code> component. |
| header | AppShellHeaderConfiguration | - | <code>Header</code> configuration, controls height, offset and collapsed state. Required if you use <code>Header</code> component. |
| layout | "default" | "alt" | - | Determines how <code>Navbar</code>/<code>Aside</code> are arranged relative to <code>Header</code>/<code>Footer</code> |
| mode | "fixed" | "static" | - | Determines positioning mode of all sections |
| navbar | AppShellNavbarConfiguration | - | <code>Navbar</code> configuration, controls width, breakpoints and collapsed state. Required if you use <code>Navbar</code> component. |
| offsetScrollbars | boolean | - | If set, <code>Header</code> and <code>Footer</code> components include styles to offset scrollbars. Based on <code>react-remove-scroll</code>. |
| padding | MantineSpacing | AppShellResponsiveSize | - | Padding of the main section. Important: use <code>padding</code> prop instead of <code>p</code>. |
| transitionDuration | number | - | Duration of all transitions in ms |
| transitionTimingFunction | TransitionTimingFunction | - | Timing function of all transitions |
| withBorder | boolean | - | If set, the associated components have a border |
| zIndex | string | number | - | <code>z-index</code> of all associated elements |


#### Styles API

AppShell component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**AppShell selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-AppShell-root | Root element (`AppShell` component) |
| navbar | .mantine-AppShell-navbar | `AppShell.Navbar` root element |
| header | .mantine-AppShell-header | `AppShell.Header` root element |
| main | .mantine-AppShell-main | `AppShell.Main` root element |
| aside | .mantine-AppShell-aside | `AppShell.Aside` root element |
| footer | .mantine-AppShell-footer | `AppShell.Footer` root element |
| section | .mantine-AppShell-section | `AppShell.Section` root element |

**AppShell CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --app-shell-transition-duration | Controls transition duration of all children |

**AppShell data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-resizing | User is resizing the window | - |
| root | data-layout | - | Value of the  |
| root | data-disabled | - | - |