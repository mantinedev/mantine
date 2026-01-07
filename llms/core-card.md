# Card
Package: @mantine/core
Import: import { Card } from '@mantine/core';
Description: Card with sections

## Usage

`Card` is a wrapper around [Paper](https://mantine.dev/core/paper/) component with some additional styles and `Card.Section`
component that allows to split card into sections. If you do not need sections, you use [Paper](https://mantine.dev/core/paper/) component instead.

#### Example: usage

```tsx
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
```


## Polymorphic component

Card is a [polymorphic component](https://mantine.dev/guides/polymorphic/) component, you can change its root element:

#### Example: link

```tsx
import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}
```


## Card.Section

`Card.Section` is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.
`Card.Section` works the following way:

* If component is the first child in Card, then it has negative top, left and right margins
* If it is the last child in Card, then it has negative bottom, left and right margins
* If it is in the middle then, only the left and right margins will be negative

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

`Card.Section` is a [polymorphic component](https://mantine.dev/guides/polymorphic/) component, you can change its root element:

#### Example: linkSection

```tsx
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
```


## withBorder and inheritPadding props

* `withBorder` prop adds top and bottom border to `Card.Section` depending on its position relative to other content and sections
* `inheritPadding` prop adds the same left and right padding to `Card.Section` as set in `Card` component

#### Example: section

```tsx
import { ActionIcon, Card, Group, Image, Menu, SimpleGrid, Text } from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
];

function Demo() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip size={14} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<IconEye size={14} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash size={14} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>

      <Card.Section mt="sm">
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Card content |
| padding | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value to set padding |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius, numbers are converted to rem |
| shadow | MantineShadow | - | Key of <code>theme.shadows</code> or any valid CSS value to set <code>box-shadow</code> |
| withBorder | boolean | - | Adds border to the card |


#### Styles API

Card component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Card selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Card-root | Root element |
| section | .mantine-Card-section | `Card.Section` root element |

**Card CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|

**Card data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| section | data-first-section | - | - |
| section | data-last-section | - | - |
| root | data-with-border | - | - |
| section | data-with-border | - | - |
| section | data-inherit-padding | - | - |