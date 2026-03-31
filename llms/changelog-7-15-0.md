# Changelog7150

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## use-radial-move hook

New [use-radial-move](https://mantine.dev/llms/hooks-use-radial-move.md) hook can be used to create custom radial sliders:

```tsx
// Demo.tsx
import { useState } from 'react';
import { Box } from '@mantine/core';
import { useRadialMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(115);
  const { ref } = useRadialMove(setValue);

  return (
    <Box className={classes.root} ref={ref} style={{ '--angle': `${value}deg` }}>
      <div className={classes.value}>{value}°</div>
      <div className={classes.thumb} />
    </Box>
  );
}

// Demo.module.css
.root {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  --empty-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6));
  --filled-color: light-dark(var(--mantine-color-blue-6), var(--mantine-color-blue-8));

  background-image: conic-gradient(
    var(--filled-color) 0deg,
    var(--filled-color) var(--angle, 0deg),
    var(--empty-color) var(--angle, 0deg)
  );
}

.value {
  background-color: var(--mantine-color-body);
  width: 132px;
  height: 132px;
  border-radius: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumb {
  position: absolute;
  width: 14px;
  height: 160px;
  transform: rotate(var(--angle, 0deg));

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: light-dark(var(--mantine-color-white), var(--filled-color));
    border: 2px solid light-dark(var(--filled-color), var(--mantine-color-white));
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}
```


## BarChart color based on value

[BarChart](https://mantine.dev/llms/charts-bar-chart.md) component now supports `getBarColor` prop to assign color based on value.
`getBarColor` function is called with two arguments: value and series object. It should return a color
string (theme color reference or any valid CSS color value).

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      series={[{ name: 'Laptops', color: 'gray.6' }]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```


## Button.GroupSection and ActionIcon.GroupSection

`ActionIcon.GroupSection` and `Button.GroupSection` are new components that
can be used in `ActionIcon.Group`/`Button.Group` to create sections that are
not `ActionIcon`/`Button` components:

```tsx
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon
        variant="default"
        size="lg"
        onClick={decrement}
        aria-label="Decrement value"
      >
        <CaretDownIcon color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon
        variant="default"
        size="lg"
        onClick={increment}
        aria-label="Increment value"
      >
        <CaretUpIcon color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
```


## TableIcon vertical variant

[TableIcon](https://mantine.dev/llms/core-table.md) component now support `variant="vertical"`:

```tsx
import { Table } from '@mantine/core';

export function Demo() {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160}>Epic name</Table.Th>
          <Table.Td>7.x migration</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Td>Open</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total issues</Table.Th>
          <Table.Td>135</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total story points</Table.Th>
          <Table.Td>874</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Last updated at</Table.Th>
          <Table.Td>September 26, 2024 17:41:26</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
```


## TableIcon tabular numbers

[TableIcon](https://mantine.dev/llms/core-table.md) component now supports `tabularNums` prop to render numbers in tabular style. It sets
`font-variant-numeric: tabular-nums` which makes numbers to have equal width.
This is useful when you have columns with numbers and you want them to be aligned:

```tsx
import { NumberFormatter, Table } from '@mantine/core';

const data = [
  { product: 'Apples', unitsSold: 2214411234 },
  { product: 'Oranges', unitsSold: 9983812411 },
  { product: 'Bananas', unitsSold: 1234567890 },
  { product: 'Pineapples', unitsSold: 9948810000 },
  { product: 'Pears', unitsSold: 9933771111 },
];

function Demo() {
  const rows = data.map((item) => (
    <Table.Tr key={item.product}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>
        <NumberFormatter value={item.unitsSold} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table tabularNums={true}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Units sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## Update function in modals manager

[Modals manager](https://mantine.dev/llms/x-modals.md) now supports `modals.updateModal` and `modals.updateContextModal`
function to update modal after it was opened:

```tsx
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        const modalId = modals.open({
          title: 'Initial Modal Title',
          children: <Text>This text will update in 2 seconds.</Text>,
        });

        setTimeout(() => {
          modals.updateModal({
            modalId,
            title: 'Updated Modal Title',
            children: (
              <Text size="sm" c="dimmed">
                This is the updated content of the modal.
              </Text>
            ),
          });
        }, 2000);
      }}
    >
      Open updating modal
    </Button>
  );
}
```


## useForm submitting state

[use-form](https://mantine.dev/llms/form-use-form.md) hook now supports `form.submitting` field
and `form.setSubmitting` function to track form submission state.

`form.submitting` field will be set to `true` if function passed to
`form.onSubmit` returns a promise. After the promise is resolved or rejected,
`form.submitting` will be set to `false`:

```tsx
import { useState } from 'react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const asyncSubmit = (values: any) =>
  new Promise((resolve) => setTimeout(() => resolve(values), 3000));

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: 'John' },
  });

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    await asyncSubmit(values);
    setCompleted(true);
  };

  if (completed) {
    return (
      <Stack>
        <Text>Form submitted!</Text>
        <Button onClick={() => setCompleted(false)}>Reset to initial state</Button>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Your name"
        key={form.key('name')}
        disabled={form.submitting}
        {...form.getInputProps('name')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
```


You can also manually set `form.submitting` to `true` or `false`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({ mode: 'uncontrolled' });
form.submitting; // -> false

form.setSubmitting(true);
form.submitting; // -> true

form.setSubmitting(false);
form.submitting; // -> false
```

## useForm onSubmitPreventDefault option

[use-form](https://mantine.dev/llms/form-use-form.md) hook now supports `onSubmitPreventDefault` option.
This option is useful if you want to integrate `useForm` hook with [server actions](https://github.com/mantinedev/mantine/issues/7142).
By default, `event.preventDefault()` is called on the form `onSubmit` handler.
If you want to change this behavior, you can pass `onSubmitPreventDefault` option
to `useForm` hook. It can have the following values:

* `always` (default) - always call `event.preventDefault()`
* `never` - never call `event.preventDefault()`
* `validation-failed` - call `event.preventDefault()` only if validation failed

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  onSubmitPreventDefault: 'never',
});
```

## Subtle RichTextEditor variant

[RichTextEditor](https://mantine.dev/llms/x-tiptap.md) component now supports `subtle` variant:

```tsx
import Highlight from '@tiptap/extension-highlight';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

const content = '<p>Subtle rich text editor variant</p>';

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [StarterKit, Highlight],
    content,
  });

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
```


## onExitTransitionEnd and onEnterTransitionEnd

[Modal](https://mantine.dev/llms/core-modal.md) and [Drawer](https://mantine.dev/llms/core-drawer.md) components now support `onExitTransitionEnd` and `onEnterTransitionEnd` props,
which can be used to run code after exit/enter transition is finished. For example, this is useful when you want to clear
data after modal is closed:

```tsx
import { useState } from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [modalData, setModalData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Modal
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setModalData({ title: '', message: '' });
        }}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>
      <Modal
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setModalData({ title: '', message: '' })}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
```


## Week numbers in DatePicker

[DatePicker](https://mantine.dev/llms/dates-date-picker.md) and other components based on Calendar component now support `withWeekNumbers` prop to display week numbers:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
```


## New demo: BarChart with overlay

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import classes from './Demo.module.css';
import { data } from './data';

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --average-bar-color: var(--mantine-color-dark-8);
    --you-bar-color: var(--mantine-color-blue-3);
  }

  @mixin dark {
    --you-bar-color: var(--mantine-color-blue-8);
    --average-bar-color: var(--mantine-color-gray-4);
  }
}

.bar {
  transform: translateX(-1.5px);
}

// data.ts
export const data = [
  { you: 5, average: 3, index: '1' },
  { you: 7, average: 9, index: '2' },
  { you: 8, average: 5, index: '3' },
  { you: 3, average: 6, index: '4' },
  { you: 2, average: 4, index: '5' },
  { you: 6, average: 8, index: '6' },
  { you: 4, average: 7, index: '7' },
  { you: 9, average: 2, index: '8' },
];
```


## Variants types augmentation

[Custom variants](https://mantine.dev/llms/styles-variants-sizes.md#custom-variants-types) types augmentation guide was added to the documentation.

Example of adding custom variant type to [Button](https://mantine.dev/llms/core-button.md) component:

```tsx
import { ButtonVariant, MantineSize } from '@mantine/core';

type ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';

declare module '@mantine/core' {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }
}
```

## Help Center updates

* [How to use Mantine template on GitHub?](https://help.mantine.dev/q/templates-usage) and [How can I submit a template to Mantine documentation?](https://help.mantine.dev/q/submit-template) pages were moved from the documentation to Help Center
* [How that thing is done on mantine.dev website?](https://help.mantine.dev/q/how-that-thing-is-done) question
* [Why is it required to have 10 shades per color?](https://help.mantine.dev/q/ten-shades-per-color) question
* [Why I see color scheme flickering on page load?](https://help.mantine.dev/q/color-scheme-flickering) question
* [How can I test Modal/Drawer/Popover components?](https://help.mantine.dev/q/portals-testing) question
