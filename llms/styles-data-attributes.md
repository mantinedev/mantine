# DataAttributes

# data attributes

Mantine components use `data-*` attributes to apply styles. These attributes are used as
modifiers to apply styles based on component state. The general rule of Mantine component
styles: one class with shared styles and any number of `data-*` attributes as modifiers.

Example of applying styles with `data-*` attributes:

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
import { ArrowRightIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentProps<'button'>) {
  return <Button {...props} classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<ArrowRightIcon size={18} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<ArrowRightIcon size={18} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
```


## data attributes values

Most of the `data-*` attributes do not have associated values. They represent boolean
state or a feature. For example, when the `disabled` prop on [Button](https://mantine.dev/llms/core-button.md) is set,
the `data-disabled` attribute is added to the `<button />` element:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button disabled className="my-button">
      Disabled button
    </Button>
  );
}
```

Will output the following HTML:

```html
<button class="my-button" data-disabled>Disabled button</button>
```

You can then use this attribute to apply styles to the disabled button:

```css
.my-button {
  color: var(--mantine-color-black);

  &[data-disabled] {
    color: var(--mantine-color-gray-5);
  }
}
```

When the `disabled` prop is not set, the `data-disabled` attribute is not added to the
button:

```html
<button class="my-button">Not disabled button</button>
```

In some cases, `data-*` attributes have associated values. For example, a [Button](https://mantine.dev/llms/core-button.md)
component's `section` element has an associated `data-position` attribute which can be
`left` or `right`. The following example will render two `section` elements, one with
`data-position="left"` and another with `data-position="right"`:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button leftSection="L" rightSection="R">
      Label
    </Button>
  );
}
```

Will output the following HTML:

```html
<button>
  <span class="section" data-position="left">L</span>
  Label
  <span class="section" data-position="right">R</span>
</button>
```

You can then use this attribute to apply styles to the left and right sections:

```css
.section {
  /* Styles applied to both sections */
  width: 2rem;

  /* Styles applied only to left section */
  &[data-position='left'] {
    background-color: red;
  }

  /* Styles applied only to right section */
  &[data-position='right'] {
    background-color: blue;
  }
}
```

## Components data attributes documentation

Every component that uses `data-*` attributes has a dedicated section under the `Styles API` tab.

The [Button](https://mantine.dev/llms/core-button.md) component `data-*` attributes table:

How to read the table:

* `selector` column – [Styles API](https://mantine.dev/llms/styles-styles-api.md) selector (or multiple selectors) to which data attribute is added
* `attribute` column – data attribute name
* `condition` column – condition based on which the data attribute is added to the element
* `value` column – value of the data attribute

## mod prop

All components support the `mod` prop, which allows adding data attributes to
the root element. CamelCase keys are converted to kebab-case. If a key starts with `data-`,
the prefix is not duplicated.

Examples of using `mod` prop:

```tsx
import { Box } from '@mantine/core';

<Box mod="data-button" />;
// -> <div data-button />

<Box mod={{ opened: true }} />;
// -> <div data-opened />

<Box mod={{ someValue: 'hello' }} />;
// -> <div data-some-value="hello" />

<Box mod={{ opened: false }} />;
// -> <div />

<Box mod={['button', { opened: true }]} />;
// -> <div data-button data-opened />

<Box mod={{ orientation: 'horizontal' }} />;
// -> <div data-orientation="horizontal" />
```
