# Changelog820

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## Styles API attributes

You now can pass attributes to inner elements of all components that support Styles API with `attributes` prop.
For example, it can be used to add data attributes for testing purposes:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      attributes={{
        root: { 'data-test-id': 'root' },
        label: { 'data-test-id': 'label' },
        inner: { 'data-test-id': 'inner' },
      }}
    >
      Button
    </Button>
  );
}
```

## Container grid strategy

[Container](https://mantine.dev/llms/core-container.md) now supports `strategy="grid"` prop which enables more
features.

Differences from the default `strategy="block"`:

* Uses `display: grid` instead of `display: block`
* Does not include default inline padding
* Does not set `max-width` on the root element (uses grid template columns instead)

Features supported by `strategy="grid"`:

* Everything that is supported by `strategy="block"`
* Children with `data-breakout` attribute take the entire width of the container's parent element
* Children with `data-container` inside `data-breakout` have the same width as the main grid column

Example of using breakout feature:

```tsx
import { Box, Container } from '@mantine/core';

function Demo() {
  return (
    <Container strategy="grid" size={500}>
      <Box bg="var(--mantine-color-indigo-light)" h={50}>
        Main content
      </Box>

      <Box data-breakout bg="var(--mantine-color-indigo-light)" mt="xs">
        <div>Breakout</div>

        <Box data-container bg="indigo" c="white" h={50}>
          <div>Container inside breakout</div>
        </Box>
      </Box>
    </Container>
  );
}
```


## Tooltip target

New [Tooltip](https://mantine.dev/llms/core-tooltip.md) `target` prop is an alternative to `children`. It accepts a string (selector),
an HTML element or a ref object with HTML element. Use `target` prop when you do
not render tooltip target as JSX element.

Example of using `target` prop with a string selector:

```tsx
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip target="#hover-me" label="Tooltip over button" />
      <Button id="hover-me">Hover me to see tooltip</Button>
    </>
  );
}
```


## HoverCard.Group

[HoverCard](https://mantine.dev/llms/core-hover-card.md) now supports delay synchronization between multiple instances using `HoverCard.Group` component:

```tsx
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <HoverCard.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>First</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">First hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Second</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Second hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Third</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Third hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
    </HoverCard.Group>
  );
}
```


## use-selection hook

New [use-selection](https://mantine.dev/llms/hooks-use-selection.md) hook:

```tsx
import { Checkbox, Table } from '@mantine/core';
import { useSelection } from '@mantine/hooks';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const positions = useMemo(() => elements.map((element) => element.position), [elements]);

  const [selection, handlers] = useSelection({
    data: positions,
    defaultSelection: [39, 56],
  });

  const rows = elements.map((element) => {
    const isSelected = selection.includes(element.position);
    return (
      <Table.Tr key={element.name} bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}>
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={isSelected}
            onChange={(event) => {
              if (event.target.checked) {
                handlers.select(element.position);
              } else {
                handlers.deselect(element.position);
              }
            }}
          />
        </Table.Td>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.mass}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              aria-label="Select deselect all rows"
              indeterminate={handlers.isSomeSelected()}
              checked={handlers.isAllSelected()}
              onChange={() => {
                if (handlers.isAllSelected()) {
                  handlers.resetSelection();
                } else {
                  handlers.setSelection(elements.map((el) => el.position));
                }
              }}
            />
          </Table.Th>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## autoSelectOnBlur prop

[Select](https://mantine.dev/llms/core-select.md) and [Autocomplete](https://mantine.dev/llms/core-autocomplete.md) components now support `autoSelectOnBlur` prop.
Use it to automatically select the highlighted option when the input loses focus.
To see this feature in action: select an option with up/down arrows, then click outside the input:

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      autoSelectOnBlur
      searchable
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```


## Source edit mode in RichTextEditor

[RichTextEditor](https://mantine.dev/llms/x-tiptap.md) now supports source edit mode:

```tsx
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { useState } from 'react';

function Demo() {
  const [isSourceCodeModeActive, onSourceCodeTextSwitch] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit],
    shouldRerenderOnTransaction: true,
    content: '<p>Source code control example</p><p>New line with <strong>bold text</strong></p><p>New line with <em>italic</em> <em>text</em></p>',
  });

  return (
    <RichTextEditor editor={editor} onSourceCodeTextSwitch={onSourceCodeTextSwitch}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.SourceCode icon={BoldIcon} />
        </RichTextEditor.ControlsGroup>
        {!isSourceCodeModeActive && (
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
          </RichTextEditor.ControlsGroup>
        )}
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
```


## Recharts 3 support

You can now use the latest [Recharts 3](https://recharts.org/en-US/) version with Mantine charts.
`@mantine/charts` package was validated to work with both Recharts 2 and Recharts 3 versions.
Note that, there might still be some minor issues with Recharts 3, you are welcome to report issues on GitHub.

## Other changes

* [Accordion](https://mantine.dev/llms/core-accordion.md) default `chevronSize` prop value was changed to `auto` to allow using dynamic icon sizes
* [Accordion](https://mantine.dev/llms/core-accordion.md) now supports `chevronIconSize` prop to configure size of the default chevron icon
* [AffixPosition](https://mantine.dev/llms/core-affix.md) type is now exported from `@mantine/core` package
* `errorProps`, `labelProps` and `descriptionProps` props of all inputs now have stricter types and better IDE autocomplete
* `TypographyStylesProvider` was renamed to just `Typography` to simplify usage. `TypographyStylesProvider` name is still available but marked as deprecated – it will be removed in `9.0.0` release.
* [Slider](https://mantine.dev/llms/core-slider.md) and [RangeSlider](https://mantine.dev/llms/core-range-slider.md) components now have separate documentation pages
