# Changelog830

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

## MiniCalendar component

New [MiniCalendar](https://mantine.dev/llms/dates-mini-calendar.md) component:

```tsx
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return <MiniCalendar value={value} onChange={onChange} numberOfDays={6} />;
}
```


## Progress vertical orientation

[Progress](https://mantine.dev/llms/core-progress.md) now supports vertical orientation:

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Progress value={80} orientation="vertical" h={200} />
      <Progress value={60} color="orange" size="xl" orientation="vertical" h={200} animated />

      <Progress.Root size="xl" autoContrast orientation="vertical" h={200}>
        <Progress.Section value={40} color="lime.4">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="yellow.4">
          <Progress.Label>Apps</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="cyan.7">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Group>
  );
}
```


## Heatmap splitMonths

[Heatmap](https://mantine.dev/llms/charts-heatmap.md) now supports `splitMonths` prop to visually separate months with a spacer column and render only days that belong to each month in its columns.

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      splitMonths
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```


## Improved clearable prop handling

[Select](https://mantine.dev/llms/core-select.md), [MultiSelect](https://mantine.dev/llms/core-multi-select.md), and other components with
`clearable` prop now allow displaying the clear button next to the right section:

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue="React"
      clearable
    />
  );
}
```


## Tiptap 3 support

[@mantine/tiptap](https://mantine.dev/llms/x-tiptap.md) now supports [Tiptap 3](https://tiptap.dev/docs). It is
recommended to update all `@tiptap/*` packages to version 3.2.0 or later.

Your application might require some modifications related to Tiptap 3.
If you want to update your application to TipTap 3, follow
[migration guide](https://mantine.dev/llms/guides-tiptap-3-migration.md).

## LLMs.txt

You can now use LLMs.txt file with Cursor and other IDEs.
The file is automatically updated with each release and includes
every demo and documentation page from mantine.dev. It is about 1.8mb.
You can find the latest version of LLMs.txt [here](https://mantine.dev/llms.txt)
and further documentation [here](https://mantine.dev/llms/guides-llms.md).

## Other changes

* [MultiSelect](https://mantine.dev/llms/core-multi-select.md) now supports `clearSearchOnChange` prop to clear search input when an item is selected.
* [Reordering list items example](https://mantine.dev/llms/form-recipes.md#list-items-reordering) now uses [dnd-kit](https://dndkit.com/) instead of `@hello-pangea/dnd`
* [TimePicker](https://mantine.dev/llms/dates-time-picker.md) now supports `reverseTimeControlsList` prop to reverse the order of time controls in the dropdown. Use this option if you want the order of controls to match keyboard controls (up and down arrow) direction.
* [DirectionProvider](https://mantine.dev/llms/styles-rtl.md) now automatically subscribes to the `dir` attribute mutations of the root element (usually `<html />`)  and updates internal state automatically.
* [Select](https://mantine.dev/llms/core-select.md) and [MultiSelect](https://mantine.dev/llms/core-multi-select.md) now retain references to selected options that are no longer present in `data` prop.
* Active color swatch now has check icon in [ColorPicker](https://mantine.dev/llms/core-color-picker.md) and [ColorInput](https://mantine.dev/llms/core-color-input.md) components.
