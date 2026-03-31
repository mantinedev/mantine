# What is the difference between searchable Select and Autocomplete?
Searchable Select and Autocomplete are similar components, but they serve different purposes.

## Searchable select

Use [Select](https://mantine.dev/core/select/) component in the following cases:

* You want to restrict the user to a list of predefined options
* You want to display all available options to the user and allow searching through them
* You want to discard user input on blur if an option was not selected from the dropdown
* The `value` and `label` of the option are not the same, for example, `{ value: 'US', label: 'United States' }`

For example, you can use [Select](https://mantine.dev/core/select/) to select a country from the list of all countries:

#### Example: SelectCountry

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={[
        { value: 'ca', label: 'Canada' },
        { value: 'br', label: 'Brazil' },
        { value: 'in', label: 'India' },
        { value: 'mx', label: 'Mexico' },
        { value: 'au', label: 'Australia' },
        { value: 'kr', label: 'South Korea' },
        { value: 'id', label: 'Indonesia' },
        { value: 'tr', label: 'Turkey' },
        { value: 'nl', label: 'Netherlands' },
        { value: 'ch', label: 'Switzerland' },
        { value: 'sa', label: 'Saudi Arabia' },
        { value: 'se', label: 'Sweden' },
        { value: 'pl', label: 'Poland' },
        { value: 'ar', label: 'Argentina' },
        { value: 'be', label: 'Belgium' },
        { value: 'th', label: 'Thailand' },
        { value: 'at', label: 'Austria' },
        { value: 'ae', label: 'United Arab Emirates' },
        { value: 'hk', label: 'Hong Kong' },
        { value: 'dk', label: 'Denmark' },
        { value: 'sg', label: 'Singapore' },
        { value: 'my', label: 'Malaysia' },
        { value: 'no', label: 'Norway' },
        { value: 'ng', label: 'Nigeria' },
        { value: 'cz', label: 'Czech Republic' },
        { value: 'za', label: 'South Africa' },
        { value: 'ro', label: 'Romania' },
      ]}
    />
  );
}
```


In the example above, the user can select a country from the list of all countries, but cannot enter any other value.

## Autocomplete

Use [Autocomplete](https://mantine.dev/core/autocomplete/) component in the following cases:

* You want to allow the user to enter any value
* You want to display suggestions to the user based on the input value
* You want to preserve user input on blur if an option was not selected from the dropdown
* The `value` and `label` of the option are the same, for example, `'United States'`

For example, you can use [Autocomplete](https://mantine.dev/core/autocomplete/) to ask the user to enter a city:

#### Example: AutocompleteCity

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your city"
      placeholder="Your city"
      data={[
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
        'San Diego',
        'Dallas',
        'San Jose',
      ]}
    />
  );
}
```


In the example above, suggestions are based on the input value,
but the user can enter any value, and it will be preserved on blur.
