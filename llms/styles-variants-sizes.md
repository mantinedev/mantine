# VariantsAndSizes

# Variants and sizes

## Adding custom variants

Most Mantine components support the `variant` prop. It can be used in CSS variables resolver,
and it is also exposed as a `data-variant="{value}"` attribute on the root element of the component.
The easiest way to add custom variants is to add styles that use `[data-variant="{value}"]`.

Example of adding a new variant to the [Input](https://mantine.dev/llms/core-input.md) component:

* `underline` variant styles are added
* `filled` variant is the default variant – you do not need to define any additional styles for it

```tsx
// Demo.tsx
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}

// Demo.module.css
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
```


Note that you can add custom variants to every Mantine component that supports the [Styles API](https://mantine.dev/llms/styles-styles-api.md),
even if there are no variants defined on the library side.

> **Overriding existing variants styles**
>
> Apart from adding new variants, you can also override existing ones, for example, you can change the
> `filled` variant of the [Input](https://mantine.dev/llms/core-input.md) component with `.input[data-variant="filled"]` selector.

## Custom variants types

You can define types for custom variants by creating a `mantine.d.ts` file
in your project and extending the `{x}Props` interface with the new variant type.

Example of adding a custom variant type to the [Button](https://mantine.dev/llms/core-button.md) component:

```tsx
import { ButtonVariant, MantineSize } from '@mantine/core';

type ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';

declare module '@mantine/core' {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }
}
```

## variantColorResolver

[Button](https://mantine.dev/llms/core-button.md), [Badge](https://mantine.dev/llms/core-badge.md), [ActionIcon](https://mantine.dev/llms/core-action-icon.md) and other
components support custom variants with [variantColorResolver](https://mantine.dev/llms/theming-colors.md#colors-variant-resolver)
– it supports both changing colors and adding new variants. Note that `theme.variantColorResolver` is
responsible only for colors. If you need to change other properties, use the `data-variant` attribute.

```tsx
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
```


## Sizes with components CSS variables

You can add custom sizes to any component that supports the `size` prop by providing a custom
CSS variables resolver. Usually this is done in `theme.components`:

```tsx
// MantineProvider.tsx
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': '60px',
              '--button-padding-x': '30px',
              '--button-fz': '24px',
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': '24px',
              '--button-padding-x': '10px',
              '--button-fz': '10px',
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}

// Inline.tsx
import { Button, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': '60px',
        '--button-padding-x': '30px',
        '--button-fz': '24px',
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': '24px',
        '--button-padding-x': '10px',
        '--button-fz': '10px',
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
```


## Sizes with data-size attribute

Every component that supports the `size` prop exposes it as a `data-size="{value}"` attribute on the root element.
You can use it to add custom sizes:

```tsx
// Demo.tsx
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}

// Demo.module.css
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
```


## Sizes with static CSS variables

Mantine component sizes are defined with CSS variables (usually on the root element). For example,
the [ActionIcon](https://mantine.dev/llms/core-action-icon.md) component has the following CSS variables:

```css
.root {
  --ai-size-xs: 18px;
  --ai-size-sm: 22px;
  --ai-size-md: 28px;
  --ai-size-lg: 34px;
  --ai-size-xl: 44px;
}
```

You can override these values with the [Styles API](https://mantine.dev/llms/styles-styles-api.md) or add new size values:

```tsx
// Demo.tsx
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <HeartIcon size={10} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <HeartIcon size={32} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}

// Demo.module.css
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
```


Note that some components have more than one CSS variable for size. For example,
the [Button](https://mantine.dev/llms/core-button.md) component has the following CSS variables:

```css
.root {
  --button-height-xs: 30px;
  --button-height-sm: 36px;
  --button-height-md: 42px;
  --button-height-lg: 50px;
  --button-height-xl: 60px;

  --button-height-compact-xs: 22px;
  --button-height-compact-sm: 26px;
  --button-height-compact-md: 30px;
  --button-height-compact-lg: 34px;
  --button-height-compact-xl: 40px;

  --button-padding-x-xs: 14px;
  --button-padding-x-sm: 18px;
  --button-padding-x-md: 22px;
  --button-padding-x-lg: 26px;
  --button-padding-x-xl: 32px;

  --button-padding-x-compact-xs: 7px;
  --button-padding-x-compact-sm: 8px;
  --button-padding-x-compact-md: 10px;
  --button-padding-x-compact-lg: 12px;
  --button-padding-x-compact-xl: 14px;
}
```

Usually, it is more convenient to use the `data-size` attribute or `vars` on the [theme](https://mantine.dev/llms/theming-theme-object.md)
to customize sizes in this case.
