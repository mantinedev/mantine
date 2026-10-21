# Select

`Select` is the input for one of many options; `Radio.Group` or `SegmentedControl` handle 2 to 5,
see [radio](radio.md).

- `searchable` only when the list is long: more than about 15 options (countries, users, cities,
  currencies), or when it grows with data. A select with a dozen fixed options (timezones in a
  team app, languages, statuses) is not searchable: the search field adds a cursor, a
  `nothingFoundMessage` and a filtering behavior the user does not need to scan twelve rows.
- `placeholder` is the label text or "Pick a timezone"-style hint; `allowDeselect={false}` when
  the field is required and has a default, so a click on the selected option cannot empty it.
- Options are `{ value, label }` with the label a human reads (`Berlin`, not `Europe/Berlin`);
  a secondary detail goes in `renderOption`, not in the label string.
- `clearable` only for optional fields.

```tsx
<Select label="Timezone" placeholder="Timezone" data={TIMEZONES} allowDeselect={false} withAsterisk />
<Select label="Assignee" placeholder="Search people" data={people} searchable nothingFoundMessage="No matching people" />
```
