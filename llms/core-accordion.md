# Accordion
Package: @mantine/core
Import: import { Accordion } from '@mantine/core';
Description: Divide content into collapsible sections

## Usage

Accordion allows users to expand and collapse sections of content.
It helps manage large amounts of information in a limited space
by showing only section headers initially and revealing content upon interaction.

Accordion is commonly used for:

* FAQ sections: displaying questions as headers with answers revealed when clicked
* Forms: organizing long forms into sections, for example, personal info, shipping, and payment
* Menus: nested navigation in sidebars or mobile views

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
    <Accordion variant="default" radius="md" chevronPosition="right" chevronIconSize={16} disableChevronRotation={false} order={3} defaultValue="Apples">
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


## order prop

The `order` prop (used in all demos on this page) sets the heading level for the `Accordion.Control` root element.
According to [WAI-ARIA recommendations](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html),
it is required to use `h2`-`h6` heading levels to fit correctly within the outline of the page.

All examples on this page use `order={3}`, which means that all `button` elements of
`Accordion.Control` are wrapped with an `h3` tag (`h2` tags are used for the documentation sections).

The `order` prop is not enforced by the library but is required if your application
must meet accessibility standards.

## Change chevron

Use the `chevron` prop to change the chevron icon. When `chevron` is set,
the `chevronIconSize` prop is ignored. To remove the chevron icon, use `chevron={null}`.

To customize chevron styles, use [Styles API](https://mantine.dev/llms/styles-styles-api.md) with the
[data-rotate](https://mantine.dev/llms/styles-data-attributes.md) attribute. This attribute is set when the item
is opened if the `disableChevronRotation` prop is not set.

Example of a custom chevron icon with rotation styles:

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

```tsx
import { Flex, Avatar, Text, Accordion } from '@mantine/core';

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
    <Flex component="span" gap="md" align="center" wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" alt={label} />
      <div>
        <Text span>{label}</Text>
        <Text span display="block" size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Flex>
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
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
```


## With icons

Use the `icon` prop to display any element in the left section of the `Accordion.Control`:

```tsx
import { ImageIcon, PrinterIcon, CameraIcon } from '@phosphor-icons/react';
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="filled" defaultValue="photos" order={3}>
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<ImageIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<PrinterIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<CameraIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          CameraIcon settings
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
      <Accordion.Item value="item-1">{/* item-1 */}</Accordion.Item>
      <Accordion.Item value="item-2">{/* item-2 */}</Accordion.Item>
    </Accordion>
  );
}
```

## Compose controls

Putting a button or link inside `Accordion.Control` is a common mistake when
using Accordion. The `Accordion.Control` root element is a `button`. Putting interactive
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
next to it. For example, you can add an [ActionIcon](https://mantine.dev/llms/core-action-icon.md) or [Menu](https://mantine.dev/llms/core-menu.md)
to the right side of the original control. If you need to display an interactive element
over the `Accordion.Control`, use `position: absolute` instead.

```tsx
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { DotsThreeIcon } from '@phosphor-icons/react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray" aria-label="More options">
        <DotsThreeIcon size={20} />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" order={3}>
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
When you disable items, users cannot activate them with the mouse or keyboard,
and arrow key navigation will skip them:

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
    <Accordion defaultValue="Apples" order={3}>
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


## TypeScript

The `AccordionProps` type exported from `@mantine/core` is a generic that accepts a boolean type
describing the `multiple` state:

```tsx
import type { AccordionProps } from '@mantine/core';

type MultipleAccordionProps = AccordionProps<true>;
type DefaultAccordionProps = AccordionProps<false>;
```

## Accessibility

The Accordion component implements the [WAI-ARIA accessibility pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Keyboard interactions


#### Props

**Accordion props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| chevron | React.ReactNode | - | Custom chevron icon |
| chevronIconSize | string \| number | - | Size of the default chevron icon. Ignored when `chevron` prop is set. Use `chevronSize` instead when using custom chevron. |
| chevronPosition | "left" \| "right" | - | Position of the chevron relative to the item label |
| chevronSize | string \| number | - | Size of the chevron icon container |
| defaultValue | string \| string[] \| null | - | Uncontrolled component default value |
| disableChevronRotation | boolean | - | If set, chevron rotation is disabled |
| keepMounted | boolean | - | If set to `false`, panels are unmounted when collapsed. By default, panels stay mounted when collapsed. |
| loop | boolean | - | If set, arrow keys loop through items (first to last and last to first) |
| multiple | boolean | - | If set, multiple items can be opened at the same time |
| onChange | (value: AccordionValue<Multiple>) => void | - | Called when value changes, payload type depends on `multiple` prop |
| order | 2 \| 3 \| 4 \| 5 \| 6 | - | Sets heading level (h2-h6) for `Accordion.Control` elements to meet WAI-ARIA requirements. Has no visual effect. |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. |
| transitionDuration | number | - | Transition duration in ms |
| value | string \| string[] \| null | - | Controlled component value |

**Accordion.Item props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | required | Value that is used to manage the accordion state |

**Accordion.Control props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| chevron | React.ReactNode | - | Custom chevron icon |
| children | React.ReactNode | - | Control label |
| disabled | boolean | - | Sets `disabled` attribute, prevents interactions |
| icon | React.ReactNode | - | Icon displayed next to the label |


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
