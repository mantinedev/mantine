# Button
Package: @mantine/core
Import: import { Button } from '@mantine/core';
Description: Button component to render button or link

## Usage

#### Example: configurator

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Button</Button>;
}
```


## Full width

If `fullWidth` prop is set `Button` will take 100% of parent width:

#### Example: fullWidth

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
```


## Left and right sections

`leftSection` and `rightSection` allow adding icons or any other element to the left and right side of the button.
When a section is added, padding on the corresponding side is reduced.

Note that `leftSection` and `rightSection` are flipped in [RTL](https://mantine.dev/styles/rtl) mode
(`leftSection` is displayed on the right and `rightSection` is displayed on the left).

#### Example: sections

```tsx
import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
```


## Sections position

`justify` prop sets `justify-content` of `inner` element. You can use it to change the alignment of
left and right sections. For example, to spread them across the button set `justify="space-between"`.

If you need to align just one section to the side of the button set `justify` to `space-between`
and add empty `<span />` to the opposite section.

#### Example: sectionsJustify

```tsx
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button justify="" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify=""
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
```


## Compact size

`Button` supports `xs` – `xl` and `compact-xs` – `compact-xl` sizes. `compact` sizes have
the same font-size as `xs` – `xl` but reduced padding and height.

#### Example: compact

```tsx
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="md">Regular md</Button>
      <Button size="compact-md">Compact md</Button>
    </Group>
  );
}
```


<Gradient component="Button" />

## Gradient

Button supports Mantine color format in color prop. Color can be specified as:
- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')

#### Example: gradient

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
    >
      Gradient button
    </Button>
  );
}
```


## Disabled state

To make `Button` disabled, set `disabled` prop, this will prevent any interactions with the button
and add disabled styles. If you want the button to just look disabled but still be interactive,
set `data-disabled` prop instead. Note that disabled styles are the same for all variants.

#### Example: disabled

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
```


## Disabled state when Button is link

`<a />` element does not support `disabled` attribute. To make `Button` disabled when it is
rendered as a link, set `data-disabled` attribute instead and prevent default behavior in
`onClick` event handler.

#### Example: disabledLink

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
```


## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]`
selectors:

* `&:disabled` is used to style the button when `disabled` prop is set and
  also when the button is disabled by the parent component (for example, when `disabled` prop is set on a
  `<fieldset />` element which contains `Button`).
* `&[data-disabled]` is used to style the button when it is not actually disabled but should look like
  it is (for example, `data-disabled` should be used if you need to use [Tooltip](https://mantine.dev/core/tooltip) with disabled `Button`
  or when `Button` is used as a link)

#### Example: disabledStyles

```tsx
// Demo.module.css
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}

// Demo.tsx
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
```


## Disabled button with Tooltip

`onMouseLeave` event [is not triggered](https://github.com/facebook/react/issues/18753) when `Button` is disabled, so if you need to use
[Tooltip](https://mantine.dev/core/tooltip) with disabled `Button` you need to set `data-disabled` prop on `Button`
instead of `disabled`. Note that it is also required to change `onClick` event handler to
`(event) => event.preventDefault()` as `Button` is not actually disabled and will still trigger
`onClick` event.

#### Example: disabledTooltip

```tsx
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
```


## Loading state

When `loading` prop is set, `Button` will be disabled and [Loader](https://mantine.dev/core/loader) with overlay will be rendered
in the center of the button. [Loader](https://mantine.dev/core/loader) color depends on `Button` variant.

#### Example: loading

```tsx
import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```


## Loader props

You can customize [Loader](https://mantine.dev/core/loader) with `loaderProps` prop, it accepts all props that
[Loader](https://mantine.dev/core/loader) component has:

#### Example: loaderProps

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
```


#### Example: stylesApi

```tsx
import { Button } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button leftSection={<IconAt size={16} />}>Your email</Button>;
}
```


Example of customizing `Button` with [Styles API](https://mantine.dev/styles/styles-api) and [data-\* attributes](https://mantine.dev/styles/data-attributes):

#### Example: dataAttributes

```tsx
// Demo.module.css
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: 4px;

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: 1px solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: 1px solid var(--mantine-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - 8px);

    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mantine-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}

// Demo.tsx
import { Button, ButtonProps, Group } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight size={18} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight size={18} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
```


## Custom variants

To add new `Button` variants, use [data-variant](https://mantine.dev/styles/variants-sizes) attribute.
Usually new variants are added on [theme](https://mantine.dev/theming/theme-object), this way they are
available in all `Button` components in your application.

#### Example: customVariant

```tsx
// Demo.tsx
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}

// Demo.module.css
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
    border-width: 0;
  }
}
```


## Customize variants colors

You can customize colors for `Button` and other components variants by adding
[variantColorResolver](https://mantine.dev/theming/colors#colors-variant-resolver) to your theme.

#### Example: variantColorsResolver

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


<AutoContrast component="Button" />

## autoContrast

Button supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on Button or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

```tsx
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="lime.4">Default</Button>
      <Button color="lime.4" autoContrast>
        Auto contrast
      </Button>
    </Group>
  );
}
```


## Button.Group

#### Example: group

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
```


Note that you must not wrap child `Button` components with any additional elements:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group>
      <div>
        <Button>This will not work</Button>
      </div>
      <Button>Buttons will have incorrect borders</Button>
    </Button.Group>
  );
}
```

## Button.GroupSection

Use `Button.GroupSection` component to render sections that are not buttons inside `Button.Group`:

#### Example: groupSection

```tsx
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}
```


<Polymorphic defaultElement="button" changeToElement="a" component="Button" withNext />

## Polymorphic component

Button is a polymorphic component – its default root element is button, but it can be changed to any other element or component with component prop:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button component="a" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Button } from '@mantine/core';

function Demo() {
  return <Button component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, ButtonProps does not extend React.ComponentPropsWithoutRef<'button'> although button is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

<GetElementRef component="Button" refType="button" />

## Get element ref

```tsx
import { useRef } from 'react';
import { Button } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <Button ref={ref} />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| children | React.ReactNode | - | Button content |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color |
| disabled | boolean | - | Sets <code>disabled</code> attribute, applies disabled styles |
| fullWidth | boolean | - | If set, the button takes 100% width of its parent container |
| gradient | MantineGradient | - | Gradient configuration used when <code>variant="gradient"</code> |
| justify | JustifyContent | - | Sets <code>justify-content</code> of <code>inner</code> element, can be used to change distribution of sections and label |
| leftSection | React.ReactNode | - | Content displayed on the left side of the button label |
| loaderProps | LoaderProps | - | Props added to the <code>Loader</code> component (only visible when <code>loading</code> prop is set) |
| loading | boolean | - | If set, the <code>Loader</code> component is displayed over the button |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| rightSection | React.ReactNode | - | Content displayed on the right side of the button label |
| size | MantineSize | (string & {}) | "compact-xs" | "compact-sm" | "compact-md" | "compact-lg" | "compact-xl" | - | Controls button <code>height</code>, <code>font-size</code> and horizontal <code>padding</code> |


#### Styles API

Button component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Button selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Button-root | Root element |
| loader | .mantine-Button-loader | Loader component, displayed only when `loading` prop is set |
| inner | .mantine-Button-inner | Contains all other elements, child of the `root` element |
| section | .mantine-Button-section | Left and right sections of the button |
| label | .mantine-Button-label | Button children |

**Button CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --button-bg | Controls `background` |
| root | --button-bd | Control `border` |
| root | --button-hover | Controls `background` when hovered |
| root | --button-color | Control text `color` |
| root | --button-hover-color | Control text `color` when hovered |
| root | --button-radius | Controls `border-radius` |
| root | --button-height | Controls `height` of the button |
| root | --button-padding-x | Controls horizontal `padding` of the button |
| root | --button-fz | Controls `font-size` of the button |
| root | --button-justify | Controls `justify-content` of `inner` element |

**Button data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-disabled | - | - |

**Button.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-ButtonGroup-group | Root element |

**Button.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| group | --button-border-width | `border-width` of child `Button` components |

**Button.Group data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| group | data-orientation | - | Value of  |