# EightToNine

# 8.x → 9.x migration guide

## Prerequisites

Mantine 9.x requires React 19.2 or later. If your project uses an older React version,
you need to update it before migrating to Mantine 9.x. If you cannot update React to 19.2+
yet, you can continue using Mantine 8.x until you are ready to update React and migrate to Mantine 9.x.

## Update dependencies

* Update all `@mantine/*` packages to version 9.0.2
* If you use `@mantine/tiptap` package, update all `@tiptap/*` packages to the latest `3.x` version
* If you use `@mantine/charts` package, update `recharts` to the latest `3.x` version

## use-form TransformValues type

The second generic type of the `useForm` hook is now the type of transformed values
instead of the transform function type. New usage example:

```tsx
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  locationId: string;
}

interface TransformedValues {
  name: string;
  locationId: number;
}

function Demo() {
  const form = useForm<FormValues, TransformedValues>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      locationId: '2',
    },

    transformValues: (values) => ({
      ...values,
      locationId: Number(values.locationId),
    }),
  });
}
```

## Text color prop

The `color` prop of the [Text](https://mantine.dev/llms/core-text.md) and [Anchor](https://mantine.dev/llms/core-anchor.md) components was removed.
Use the `c` [style prop](https://mantine.dev/llms/styles-style-props.md) instead:

```tsx
import { Text } from '@mantine/core';

// ❌ No longer works
function Demo() {
  return <Text color="red">Text</Text>;
}

// ✅ Use the c style prop
function Demo() {
  return <Text c="red">Text</Text>;
}
```

## Light variant color changes

In Mantine 9, the `light` variant CSS variables were changed to use solid color values
instead of transparency. If you need to keep 8.x behavior during migration,
use `v8CssVariablesResolver`:

```tsx
import {
  Button,
  MantineProvider,
  v8CssVariablesResolver,
} from '@mantine/core';

function Demo() {
  return (
    <MantineProvider cssVariablesResolver={v8CssVariablesResolver}>
      <Button variant="light" color="blue.6">
        Uses 8.x light variant colors
      </Button>
    </MantineProvider>
  );
}
```

## Form resolvers

In 9.x, `@mantine/form` has built-in support for [Standard Schema](https://standardschema.dev/).
If your schema library supports Standard Schema (Zod v4, Valibot, ArkType), use the built-in
`schemaResolver` instead of a dedicated resolver package:

Example with 8.x:

```tsx
import { z } from 'zod';
// ❌ No longer works; zodResolver is not exported from @mantine/form
import { useForm, zodResolver } from '@mantine/form';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});

const form = useForm({
  initialValues: { email: '' },
  validate: zodResolver(schema),
});
```

Example with 9.x using Standard Schema (recommended):

```tsx
import { z } from 'zod/v4';
import { useForm, schemaResolver } from '@mantine/form';

const schema = z.object({
  email: z.email({ error: 'Invalid email' }),
});

const form = useForm({
  initialValues: { email: '' },
  validate: schemaResolver(schema, { sync: true }),
});
```

## TypographyStylesProvider

* The [TypographyStylesProvider](https://mantine.dev/llms/core-typography.md) component was renamed to [Typography](https://mantine.dev/llms/core-typography.md):

```tsx
// ❌ No longer works
import { TypographyStylesProvider } from '@mantine/core';

// ✅ Use the Typography component
import { Typography } from '@mantine/core';
```

## Popover and Tooltip positionDependencies prop

The [Popover](https://mantine.dev/llms/core-popover.md) and [Tooltip](https://mantine.dev/llms/core-tooltip.md) components no longer accept the `positionDependencies` prop; it is no longer required
– the position is now calculated automatically.

```tsx
import { Popover } from '@mantine/core';

// ❌ positionDependencies is no longer needed
function Demo(props) {
  return (
    <Popover position="top" positionDependencies={[props.a, props.b]}>
      {/* ... */}
    </Popover>
  );
}

// ✅ The position is recalculated automatically
function Demo(props) {
  return (
    <Popover position="top">
      {/* ... */}
    </Popover>
  );
}
```

## use-fullscreen hook changes

The [use-fullscreen](https://mantine.dev/llms/hooks-use-fullscreen.md) hook was split into two hooks: `useFullscreenElement` and `useFullscreenDocument`.
This change was required to fix a stale ref issue in the previous implementation.

New usage with the `document` element:

```tsx
import { useFullscreenDocument } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreenDocument();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
```


New usage with a custom target element:

```tsx

import { useFullscreenElement } from '@mantine/hooks';
import { Button, Stack } from '@mantine/core';

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreenElement();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
        alt="For demo"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}

```


## use-mouse hook changes

The [use-mouse](https://mantine.dev/llms/hooks-use-mouse.md) hook was split into two hooks: `useMouse` and `useMousePosition`.
This change was required to fix a stale ref issue in the previous implementation.

Previous usage with the `document` element:

```tsx
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}
```

New usage with `document`:

```tsx
import { Text, Code } from '@mantine/core';
import { useMousePosition } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMousePosition();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}
```


## use-mutation-observer hook changes

The [use-mutation-observer](https://mantine.dev/llms/hooks-use-mutation-observer.md) hook now uses the new callback ref approach.
This change was required to fix stale ref issues and improve compatibility with dynamic node changes.

Previous usage (8.x):

```tsx
import { useMutationObserver } from '@mantine/hooks';

useMutationObserver(
  (mutations) => console.log(mutations),
  { childList: true },
  // ❌ The third argument is no longer supported; use `useMutationObserverTarget` instead
  document.getElementById('external-element')
);
```

New usage (9.x):

```tsx
import { useMutationObserverTarget } from '@mantine/hooks';

// ✅ Rename the hook to `useMutationObserverTarget`
useMutationObserverTarget(
  (mutations) => console.log(mutations),
  { childList: true },
  // ✅ Pass the target element as the third argument
  document.getElementById('external-element')
);
```

## Rename hooks types

`@mantine/hooks` types were renamed for consistency; rename them in your codebase:

* `UseScrollSpyReturnType` → `UseScrollSpyReturnValue`
* `StateHistory` → `UseStateHistoryValue`
* `OS` → `UseOSReturnValue`

## Collapse in -> expanded

The [Collapse](https://mantine.dev/llms/core-collapse.md) component now uses the `expanded` prop instead of `in`:

```tsx
import { Collapse } from '@mantine/core';

// ❌ No longer works
function Demo() {
  return (
    <Collapse in={false}>
      {/* ... */}
    </Collapse>
  );
}

// ✅ Use the expanded prop
function Demo() {
  return (
    <Collapse expanded={false}>
      {/* ... */}
    </Collapse>
  );
}
```

## Spoiler initialState -> defaultExpanded

The [Spoiler](https://mantine.dev/llms/core-spoiler.md) component's `initialState` prop was renamed to `defaultExpanded` for consistency with other Mantine components:

```tsx
import { Spoiler } from '@mantine/core';

// ❌ No longer works
function Demo() {
  return (
    <Spoiler initialState={false} showLabel="Show" hideLabel="Hide">
      {/* ... */}
    </Spoiler>
  );
}

// ✅ Use the defaultExpanded prop
function Demo() {
  return (
    <Spoiler defaultExpanded={false} showLabel="Show" hideLabel="Hide">
      {/* ... */}
    </Spoiler>
  );
}
```

## Grid gutter -> gap

The [Grid](https://mantine.dev/llms/core-grid.md) component `gutter` prop was renamed to `gap` for consistency with other layout components
(like [Flex](https://mantine.dev/llms/core-flex.md) and [SimpleGrid](https://mantine.dev/llms/core-simple-grid.md)). Additionally, new `rowGap` and `columnGap` props
were added to allow separate control of vertical and horizontal spacing:

```tsx
import { Grid } from '@mantine/core';

// ❌ No longer works
function Demo() {
  return (
    <Grid gutter="xl">
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}

// ✅ Use the gap prop
function Demo() {
  return (
    <Grid gap="xl">
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}

// ✅ New: Separate row and column gaps
function Demo() {
  return (
    <Grid rowGap="xl" columnGap="sm">
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```

## Grid overflow="hidden" no longer required

The [Grid](https://mantine.dev/llms/core-grid.md) component no longer uses negative margins for spacing between columns.
It now uses native CSS `gap` property, so you can safely remove `overflow="hidden"` from your
`Grid` components — it is no longer needed to prevent content overflow:

```tsx
import { Grid } from '@mantine/core';

// ❌ overflow="hidden" is no longer needed
function Demo() {
  return (
    <Grid overflow="hidden">
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}

// ✅ Remove overflow="hidden"
function Demo() {
  return (
    <Grid>
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```

## useLocalStorage and useSessionStorage return type

The `useLocalStorage` and `useSessionStorage` hooks now correctly include `undefined` in the
return type when no `defaultValue` is provided. Previously, calling these hooks without
`defaultValue` would type the value as `T` (e.g., `string`), even though at runtime
the value could be `undefined`.

If you relied on the incorrect type, update your code to handle `undefined`:

```tsx
import { useLocalStorage } from '@mantine/hooks';

// ❌ In 8.x, `value` was typed as `string` (incorrect)
const [value, setValue] = useLocalStorage({ key: 'my-key' });

// ✅ In 9.x, `value` is typed as `string | undefined`
const [value, setValue] = useLocalStorage({ key: 'my-key' });

// ✅ Provide defaultValue to keep the previous non-undefined type
const [value, setValue] = useLocalStorage({
  key: 'my-key',
  defaultValue: '',
});
```

The same change applies to `readLocalStorageValue`, `useSessionStorage`, and `readSessionStorageValue`.

## Default border-radius change

In 8.x, the default border-radius (`theme.defaultRadius`) was `sm` (`4px`).
In 9.x, the default border-radius was changed to `md` (`8px`).
To keep the previous behavior, set `defaultRadius` to `sm` in the theme:

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  defaultRadius: 'sm',
});

function Demo() {
  return <MantineProvider theme={theme}>{/* Your app */}</MantineProvider>;
}
```

## Notifications pauseResetOnHover default change

In 8.x, hovering over a notification paused the auto close timer only for that notification.
In 9.x, the default behavior changed – hovering over any notification now pauses the auto close timer of all
visible notifications. To keep the previous behavior, set `pauseResetOnHover="notification"`:

```tsx
import { Notifications } from '@mantine/notifications';

function Demo() {
  return <Notifications pauseResetOnHover="notification" />;
}
```
