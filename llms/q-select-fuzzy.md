# How can I add fuzzy search to Select component?
Learn how to integrate third-party fuzzy search libraries with Mantine Select component

## Options filtering

[Select](https://mantine.dev/core/select) and other components based on
[Combobox](https://mantine.dev/core/combobox) component support custom
options filtering with `filter` prop. You can use it to integrate
third-party fuzzy search libraries like [fuse.js](https://fusejs.io/)
or customize filtering logic to better suit your needs.

## Example with a custom filter function that matches options by words instead of a letter sequence:

```tsx
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
```

## Example with fuse.js

An example of adding fuzzy search with [fuse.js](https://fusejs.io/) to the Select component:

#### Example: SelectFuzzy

```tsx
import Fuse from 'fuse.js';
import { Select } from '@mantine/core';
import { data } from './data.json';

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={data}
      filter={({ options, search }) => {
        const fuse = new Fuse(options, { keys: ['label', 'value'] });
        return search ? fuse.search(search).map((item) => item.item) : options;
      }}
    />
  );
}
```

