# Changelog760

## Container queries support

You can now use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)
with Mantine components. `rem` and `em` functions from [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md#remem-functions)
are available in container queries staring from `postcss-preset-mantine@1.13.0`.

```tsx
// Demo.module.css
.root {
  min-width: 200px;
  max-width: 100%;
  min-height: 120px;
  container-type: inline-size;
  overflow: auto;
  resize: horizontal;
}

.child {
  background-color: var(--mantine-color-dimmed);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  @container (max-width: 500px) {
    background-color: var(--mantine-color-blue-filled);
  }

  @container (max-width: 300px) {
    background-color: var(--mantine-color-red-filled);
  }
}

// Demo.tsx
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <div className={classes.child}>Resize parent element to see container query in action</div>
    </div>
  );
}
```


## RadarChart component

New [RadarChart](https://mantine.dev/llms/charts-radar-chart.md) component:

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
```


## FocusTrap.InitialFocus component

[FocusTrap.InitialFocus](https://mantine.dev/llms/core-focus-trap.md) is a new component that adds a visually hidden
element which will receive the focus when the focus trap is activated.
Once `FocusTrap.InitialFocus` loses focus, it is removed from the tab order.

For example, it is useful if you do not want to focus any elements inside the [Modal](https://mantine.dev/llms/core-modal.md) when it is opened:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## New MantineProvider props

[MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) now includes more props to control how styles
are generated and injected. These props are useful if you use Mantine as a headless library
and in test environments.

### deduplicateCssVariables

`deduplicateCssVariables` prop determines whether CSS variables should be deduplicated: if a CSS variable has the same value as in the default theme, it is not added in the runtime.
By default, it is set to `true`. If set to `false`, all Mantine CSS variables will be added in `<style />` tag,
even if they have the same value as in the default theme.

```tsx
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider deduplicateCssVariables={false}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

### withStaticClasses

`withStaticClasses` determines whether components should have static classes, for example, `mantine-Button-root`.
By default, static classes are enabled, to disable them set `withStaticClasses` to `false`:

```tsx
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider withStaticClasses={false}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

### withGlobalClasses

`withGlobalClasses` determines whether global classes should be added with `<style />` tag.
Global classes are required for `hiddenFrom`/`visibleFrom` and `lightHidden`/`darkHidden` props to work.
By default, global classes are enabled, to disable them set `withGlobalClasses` to `false`. Note that
disabling global classes may break styles of some components.

```tsx
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider withGlobalClasses={false}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## HeadlessMantineProvider

`HeadlessMantineProvider` is an alternative to [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md)
that should be used when you want to use Mantine as a headless UI library. It removes all
features that are related to Mantine styles:

* Mantine classes are not applied to components
* Inline CSS variables are not added with `style` attribute
* All color scheme related features are removed
* Global styles are not generated

Limitations of `HeadlessMantineProvider`:

* [Color scheme switching](https://mantine.dev/llms/theming-color-schemes.md) will not work. If your application has a dark mode, you will need to implement it on your side.
* Props that are related to styles in all components (`color`, `radius`, `size`, etc.) will have no effect.
* Some components that rely on styles will become unusable ([Grid](https://mantine.dev/llms/core-grid.md), [SimpleGrid](https://mantine.dev/llms/core-simple-grid.md), [Container](https://mantine.dev/llms/core-container.md), etc.).
* `lightHidden`/`darkHidden`, `visibleFrom`/`hiddenFrom` props will not work.
* [Style props](https://mantine.dev/llms/styles-style-props.md) will work only with explicit values, for example `mt="xs"` will not work, but `mt={5}` will.

To use `HeadlessMantineProvider`, follow the [getting started guide](https://mantine.dev/llms/getting-started.md) and replace `MantineProvider` with `HeadlessMantineProvider`.
Note that you do not need to use [ColorSchemeScript](https://mantine.dev/llms/theming-color-schemes.md#colorschemescript) in your application, it will not have any effect,
you can ignore this part of the guide.

```tsx
import { HeadlessMantineProvider } from '@mantine/core';

function App() {
  return (
    <HeadlessMantineProvider>
      {/* Your application */}
    </HeadlessMantineProvider>
  );
}
```

## Sparkline trendColors

[Sparkline](https://mantine.dev/llms/charts-sparkline.md) now supports `trendColors` prop to change chart color depending on the trend.
The prop accepts an object with `positive`, `negative` and `neutral` properties:

* `positive` - color for positive trend (first value is less than the last value in `data` array)
* `negative` - color for negative trend (first value is greater than the last value in `data` array)
* `neutral` - color for neutral trend (first and last values are equal)

`neutral` is optional, if not provided, the color will be the same as `positive`.

```tsx
import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';

const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function Demo() {
  return (
    <Stack gap="sm">
      <Text>Positive trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Negative trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Neutral trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />
    </Stack>
  );
}
```


## RichTextEditor tasks extension

[RichTextEditor](https://mantine.dev/llms/x-tiptap.md#tasks) now supports tasks [tiptap extension](https://tiptap.dev/docs/editor/api/nodes/task-list):

```tsx
import TaskItem from '@tiptap/extension-task-item';
import TipTapTaskList from '@tiptap/extension-task-list';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, getTaskListExtension } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      getTaskListExtension(TipTapTaskList),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'test-item',
        },
      }),
    ],
    content: `
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      `,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TaskList />
            <RichTextEditor.TaskListLift />
            <RichTextEditor.TaskListSink />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
```


## renderOption prop

[Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md), [TagsInput](https://mantine.dev/inputs/tags-input) and [Autocomplete](https://mantine.dev/inputs/autocomplete)
components now support `renderOption` prop that allows to customize option rendering:

```tsx
import { TextAlignCenterIcon, TextAlignJustifyIcon, TextAlignLeftIcon, TextAlignRightIcon, CheckIcon } from '@phosphor-icons/react';
import { Group, Select, SelectProps } from '@mantine/core';

const iconProps = {

  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <TextAlignLeftIcon {...iconProps} />,
  center: <TextAlignCenterIcon {...iconProps} />,
  right: <TextAlignRightIcon {...iconProps} />,
  justify: <TextAlignJustifyIcon {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <CheckIcon style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  return (
    <Select
      label="Select with renderOption"
      placeholder="Select text align"
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      renderOption={renderSelectOption}
    />
  );
}
```


```tsx
import { Group, TagsInput, TagsInputProps, Text } from '@mantine/core';

const data: Record<string, { emoji: string; description: string }> = {
  Apples: {
    emoji: '🍎',
    description: 'Crisp and juicy snacking delight',
  },
  Bread: {
    emoji: '🍞',
    description: 'Freshly baked daily essential',
  },
  Bananas: {
    emoji: '🍌',
    description: 'Perfect for a healthy breakfast',
  },
  Eggs: {
    emoji: '🥚',
    description: 'Versatile protein source for cooking',
  },
  Broccoli: {
    emoji: '🥦',
    description: 'Nutrient-rich green vegetable',
  },
};

const renderTagsInputOption: TagsInputProps['renderOption'] = ({ option }) => (
  <Group>
    <Text span fz={24}>
      {data[option.value].emoji}
    </Text>
    <div>
      <Text>{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {data[option.value].description}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <TagsInput
      data={['Apples', 'Bread', 'Bananas', 'Eggs', 'Broccoli']}
      renderOption={renderTagsInputOption}
      label="Groceries"
      placeholder="Pick tag from list or type to add new"
      maxDropdownHeight={300}
    />
  );
}
```


## Styles improvements

All Mantine components have been migrated to [logical CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
(as a replacement for rtl styles) and [:where](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) pseudo-class
(as a replacement for [private CSS variables](https://help.mantine.dev/q/private-css-variables)). These changes
should not impact the usage of Mantine components, but now Mantine CSS files have smaller size. For example,
`@mantine/core/styles.css` now has ~ 8% smaller size (192kb -> 177kb).

## Pass props to inner recharts components

You can now pass props down to recharts [Bar](https://recharts.org/en-US/api/Bar), [Area](https://recharts.org/en-US/api/Area) and [Line](https://recharts.org/en-US/api/Line) components
with `barProps`, `areaProps` and `lineProps` props on [BarChart](https://mantine.dev/llms/charts-bar-chart.md), [AreaChart](https://mantine.dev/llms/charts-area-chart.md) and [LineChart](https://mantine.dev/llms/charts-line-chart.md) components.

All props accept either an object with props or a function that receives
series data as an argument and returns an object with props.

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={200}
      data={data}
      dataKey="month"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'Smartphones', color: 'blue.6' }]}
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


## PieChart percent labels

[PieChart](https://mantine.dev/llms/charts-pie-chart.md) now supports `percent` labels:

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart withLabelsLine={true} labelsPosition="outside" labelsType="value" withLabels data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```


## Documentation updates

* [Responsive styles guide](https://mantine.dev/llms/styles-responsive.md) now includes new sections about responsive props and container queries
* New [HeadlessMantineProvider section](https://mantine.dev/llms/styles-unstyled.md#headlessmantineprovider) in the unstyled guide
* [ActionIcon](https://mantine.dev/llms/core-action-icon.md) now includes additional documentation section on how to make the button the same size as Mantine inputs
* [AreaChart](https://mantine.dev/llms/charts-area-chart.md) now includes an example of how to rotate x-axis labels
* [Redwood guide](https://mantine.dev/llms/guides-redwood.md) has been updated to the latest redwood version with Vite

## Help center updates

New articles added to the [help center](https://help.mantine.dev):

* [Browser zooms in when input is focused. What should I do?](https://help.mantine.dev/q/browser-zooms-on-focus)
* [It is not possible to pinch to zoom when Modal is opened. What should I do?](https://help.mantine.dev/q/pinch-to-zoom-modal)
* [How can I lock scroll in my application?](https://help.mantine.dev/q/how-to-lock-scroll)
* [Where can I find the roadmap?](https://help.mantine.dev/q/roadmap)
* [How can I change Tabs border color?](https://help.mantine.dev/q/tabs-border-color)
* [How can I change inputs focus styles?](https://help.mantine.dev/q/input-focus-styles)
* [Can I use Mantine with Emotion/styled-components/tailwindcss?](https://help.mantine.dev/q/third-party-styles)
* [Is there a way to add mask to Mantine input?](https://help.mantine.dev/q/input-mask)
* [How to align input with a button in a flex container?](https://help.mantine.dev/q/align-input-button)
* [How can I change component color prop value depending on the color scheme?](https://help.mantine.dev/q/color-scheme-color)

## Other changes

* [use-list-state](https://mantine.dev/llms/hooks-use-list-state.md) hook now supports `swap` handler
* `form.setFieldValue` now supports callback function as an argument
* `px`, `py`, `mx` and `my` [style props](https://mantine.dev/llms/styles-style-props.md) now use logical CSS properties `padding-inline`, `padding-block`, `margin-inline` and `margin-block` instead of `padding-left`, `padding-right`, etc.
* All components now support `me`, `ms`, `ps`, `pe` [style props](https://mantine.dev/llms/styles-style-props.md) to set `margin-inline-end`, `margin-inline-start`, `padding-inline-start` and `padding-inline-end` CSS properties
* [Tooltip](https://mantine.dev/llms/core-tooltip.md), [Popover](https://mantine.dev/llms/core-popover.md) and other components based on `Popover` now support `floatingStrategy` prop to control [Floating UI strategy](https://floating-ui.com/docs/usefloating#strategy)
* All `@mantine/charts` components now support `children` prop, which passes children to the root recharts component
* [use-resize-observer](https://mantine.dev/llms/hooks-use-resize-observer.md) and [use-element-size](https://mantine.dev/llms/hooks-use-element-size.md) hooks now support [ResizeObserver options](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters) as hook argument
* [Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md) and [TagsInput](https://mantine.dev/inputs/tags-input) now support `onClear` prop, the function is called when clear button is clicked
* [MultiSelect](https://mantine.dev/llms/core-multi-select.md) and [TagsInput](https://mantine.dev/inputs/tags-input) now support `onRemove` prop, the function is called with removed item value when one of the items is deselected
* [Redwood template](https://github.com/mantinedev/redwood-template) has been updated to the latest redwood version with Vite
