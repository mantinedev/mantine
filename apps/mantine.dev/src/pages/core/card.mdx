import { CardDemos } from '@docs/demos';
import { Layout } from '@/layout';
import { MDX_DATA } from '@/mdx';

export default Layout(MDX_DATA.Card);

## Usage

`Card` is a wrapper around the [Paper](/core/paper/) component with some additional styles and a `Card.Section`
component that allows you to split the card into sections. If you do not need sections, you can use the [Paper](/core/paper/) component instead.

<Demo data={CardDemos.usage} />

## Horizontal orientation

<Demo data={CardDemos.horizontal} demoProps={{ defaultExpanded: false }} />

## Polymorphic component

Card is a [polymorphic component](/guides/polymorphic/), you can change its root element:

<Demo data={CardDemos.link} />

## Card.Section

`Card.Section` is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.
`Card.Section` works in the following way:

- If the component is the first child in Card, then it has negative top, left and right margins
- If it is the last child in Card, then it has negative bottom, left and right margins
- If it is in the middle, then only the left and right margins will be negative

```tsx
import { Card, Text } from '@mantine/core';

function Demo() {
  return (
    <Card padding="xl">
      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>First section</Card.Section>

      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}
      <Text>Some other content</Text>

      {/* right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>Middle section</Card.Section>

      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>Last section</Card.Section>
    </Card>
  );
}
```

Note that `Card` relies on mapping direct children and you cannot use fragments or other wrappers for `Card.Section`:

```tsx
import { Card } from '@mantine/core';

function Demo() {
  return (
    <Card padding="xl">
      <div>
        <Card.Section>Won't work</Card.Section>
      </div>

      <>
        <Card.Section>Won't work either</Card.Section>
      </>

      <Card.Section>Works fine</Card.Section>
    </Card>
  );
}
```

## Polymorphic Card.Section

`Card.Section` is a [polymorphic component](/guides/polymorphic/), you can change its root element:

<Demo data={CardDemos.linkSection} />

## withBorder and inheritPadding props

- `withBorder` prop adds top and bottom borders to `Card.Section` depending on its position relative to other content and sections
- `inheritPadding` prop adds the same left and right padding to `Card.Section` as set in the `Card` component

<Demo data={CardDemos.section} />
