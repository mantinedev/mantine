import { ComboboxExample } from '../../combobox-examples-data';

export interface ComboboxExamplesGroup {
  group: string;
  items: ComboboxExample[];
}

export function getGroupedData(data: ComboboxExample[]): ComboboxExamplesGroup[] {
  const items: Record<ComboboxExample['type'], ComboboxExample[]> = {
    select: [],
    autocomplete: [],
    multiselect: [],
    dropdown: [],
    button: [],
    animations: [],
    other: [],
  };

  data.forEach((item) => {
    items[item.type].push(item);
  });

  return [
    { group: 'Select', items: items.select },
    { group: 'Autocomplete', items: items.autocomplete },
    { group: 'Multiselect', items: items.multiselect },
    { group: 'Button', items: items.button },
    { group: 'Dropdown', items: items.dropdown },
    { group: 'Animations', items: items.animations },
    { group: 'Other', items: items.other },
  ];
}
