# Accordion
Package: @mantine/core
Import: import { Accordion } from '@mantine/core';
Description: Divide content into collapsible sections

## Usage

Accordion allows users to expand and collapse sections of content.
It helps manage large amounts of information in a limited space
by showing only the section headers initially and revealing content on interaction.

Accordion is commonly used for:

* FAQ sections: displaying questions as headers with answers revealed on click
* Forms: organizing long forms into sections, for example, personal info, shipping, and payment
* Menus: nested navigation in sidebars or mobile views

#### Example: configurator

```tsx
// Demo.tsx
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples">
      {items}
    </Accordion>
  );
}

// data.ts
export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
```


## Change chevron

Use the `chevron` prop to change the chevron icon. When `chevron` is set,
`chevronIconSize` prop is ignored. To remove the chevron icon, use `chevron={null}`.

To customize chevron styles, use [Styles API](https://mantine.dev/styles/styles-api/) with
[data-rotate](https://mantine.dev/styles/data-attributes/) attribute. It is set when the item
is opened if the `disableChevronRotation` prop is not set.

Example of a custom chevron icon with rotation styles:

#### Example: chevron

```tsx
// Demo.module.css
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: 16px;
  height: 16px;
}

// data.ts
export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
```


## Custom control label

You can use any React node as a label for `Accordion.Control` component.
When you use nested elements in `Accordion.Control`, it is recommended to
set `aria-label` attribute to make the control accessible for screen readers.

#### Example: label

```tsx
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control aria-label={item.label}>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained" radius="md">
      {items}
    </Accordion>
  );
}
```


## With icons

Use `icon` prop to display any element on the left section of the `Accordion.Control`:

#### Example: icons

```tsx
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="filled" radius="md" defaultValue="photos">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<IconPhoto size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<IconPrinter size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<IconCameraSelfie size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```


## Change transition

To change transition duration, set `transitionDuration` prop:



To disable transitions, set `transitionDuration` to 0:



## Default opened items

For `multiple={false}`, set `defaultValue` as string:

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  // Second item will be opened by default
  return (
    <Accordion defaultValue="item-2">
      <Accordion.Item value="item-1">{/* item-1 */}</Accordion.Item>
      <Accordion.Item value="item-2">{/* item-2 */}</Accordion.Item>
    </Accordion>
  );
}
```

For `multiple={true}`, set `defaultValue` as an array of strings:

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  // Both items are opened by default
  return (
    <Accordion multiple defaultValue={['item-1', 'item-2']}>
      <Accordion.Item value="item-1">{/* item-1 */}</Accordion.Item>
      <Accordion.Item value="item-2">{/* item-2 */}</Accordion.Item>
    </Accordion>
  );
}
```

## Control opened state

For `multiple={false}`, set `value` as string:

```tsx
import { useState } from 'react';
import { Accordion } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Accordion value={value} onChange={setValue}>
      <Accordion.Item value="item-1">{/* item-1 */}</Accordion.Item>
      <Accordion.Item value="item-2">{/* item-2 */}</Accordion.Item>
    </Accordion>
  );
}
```

For `multiple={true}`, set `value` as an array of strings:

```tsx
import { useState } from 'react';
import { Accordion } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Accordion multiple value={value} onChange={setValue}>
      <Accordion.Item value="item-2">{/* item-2 */}</Accordion.Item>
      <Accordion.Item value="item-2">{/* item-2 */}</Accordion.Item>
    </Accordion>
  );
}
```

## Compose controls

Putting a button or a link inside `Accordion.Control` is a common mistake when
using Accordion. `Accordion.Control` root element is `button`. Putting interactive
elements inside other interactive elements is forbidden – you will receive a DOM
validation error from React if you try to implement the following component:

```tsx
import { Accordion } from '@mantine/core';

// ❌ Incorrect usage: do not do this
function Demo() {
  return (
    <Accordion.Item value="item-1">
      <Accordion.Control>
        <Group>
          <span>Control 1</span>
          <button>My action</button>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>Panel 1</Accordion.Panel>
    </Accordion.Item>
  );
}
```

Instead of putting interactive elements inside the `Accordion.Control`, render them
next to it. For example, you can add [ActionIcon](https://mantine.dev/core/action-icon/) or [Menu](https://mantine.dev/core/menu/)
on the right side of the original control. If you need to display an interactive element
over the `Accordion.Control`, use `position: absolute` instead.

#### Example: sideControls

```tsx
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconDots size={20} />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```


## Disabled items

Set the `disabled` prop on the `Accordion.Control` component to disable it.
When you disable items, users cannot activate them with mouse or keyboard,
and arrow key navigation will skip them:

#### Example: disabled

```tsx
// Demo.tsx
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}

// data.ts
export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
```


## Unstyled Accordion

Set the `unstyled` prop on the Accordion component to remove all non-essential
library styles. Use `unstyled` prop to style the component with
[Styles API](https://mantine.dev/styles/styles-api/) without overriding any styles.

#### Example: unstyled

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
```


#### Example: stylesApi

```tsx
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion value="Apples" order={2}>
      {items}
    </Accordion>
  );
}
```


Example of using [Styles API](https://mantine.dev/styles/styles-api/) to customize Accordion styles:

#### Example: customize

```tsx
// Demo.module.css
.root {
  border-radius: var(--mantine-radius-sm);
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
}

.item {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border: 1px solid transparent;
  position: relative;
  z-index: 0;
  transition: transform 150ms ease;

  &[data-active] {
    transform: scale(1.03);
    z-index: 1;
    background-color: var(--mantine-color-body);
    border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
    box-shadow: var(--mantine-shadow-md);
    border-radius: var(--mantine-radius-md);
  }
}

.chevron {
  &[data-rotate] {
    transform: rotate(-90deg);
  }
}

// data.ts
export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
```


## TypeScript

`AccordionProps` type exported from `@mantine/core` is a generic, it accepts boolean type that
describes `multiple` state:

```tsx
import type { AccordionProps } from '@mantine/core';

type MultipleAccordionProps = AccordionProps<true>;
type DefaultAccordionProps = AccordionProps<false>;
```

## Accessibility

Accordion component implement [WAI-ARIA accessibility recommendations](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html).

Set `order` on `Accordion` component to wrap accordion controls with `h2`-`h6` headings.
The following example wraps controls with `h3` tags:

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  return <Accordion order={3}>{/* ...items */}</Accordion>;
}
```

Keyboard interactions:


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| chevron | React.ReactNode | - | Custom chevron icon |
| chevronIconSize | string | number | - | Size of the default chevron icon. Ignored when <code>chevron</code> prop is set. |
| chevronPosition | AccordionChevronPosition | - | Position of the chevron relative to the item label |
| chevronSize | string | number | - | Size of the chevron icon container |
| defaultValue | string | string[] | null | - | Uncontrolled component default value |
| disableChevronRotation | boolean | - | If set, chevron rotation is disabled |
| loop | boolean | - | If set, arrow keys loop though items (first to last and last to first) |
| multiple | boolean | - | If set, multiple items can be opened at the same time |
| onChange | (value: AccordionValue<Multiple>) => void | - | Called when value changes, payload type depends on <code>multiple</code> prop |
| order | 2 | 3 | 4 | 5 | 6 | - | Heading order, has no effect on visuals |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius. Numbers are converted to rem. |
| transitionDuration | number | - | Transition duration in ms |
| value | string | string[] | null | - | Controlled component value |


#### Styles API

Accordion component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Accordion selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Accordion-root | Root element |
| item | .mantine-Accordion-item | `Accordion.Item` root element |
| control | .mantine-Accordion-control | `Accordion.Control` root element |
| chevron | .mantine-Accordion-chevron | `Accordion.Control` chevron container element |
| label | .mantine-Accordion-label | `Accordion.Control` label |
| icon | .mantine-Accordion-icon | `Accordion.Control` icon |
| itemTitle | .mantine-Accordion-itemTitle | `Accordion.Control` title (h2-h6) tag |
| panel | .mantine-Accordion-panel | `Accordion.Panel` root element |
| content | .mantine-Accordion-content | Wrapper element of `Accordion.Panel` `children` |

**Accordion CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --accordion-chevron-size | Controls chevron container element `width` and `min-width` |
| root | --accordion-radius | Controls `border-radius` in various elements, depending on variant |
| root | --accordion-transition-duration | Controls all animations `transition-duration` |