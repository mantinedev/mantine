import { COMBOBOX_EXAMPLES_COMPONENTS } from './examples';

export interface ComboboxExample {
  /** Demo id, based on it component will render component on the page */
  id: keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;

  /** Name used in search */
  name: string;

  /** Short component description, used in search */
  description: string;

  /** Full component description, displayed on the page */
  fullDescription?: string;

  /** Type based on which components are ordered in the navbar, also used for filtering */
  type: 'select' | 'autocomplete' | 'multiselect' | 'dropdown' | 'button' | 'animations' | 'other';
}

export const COMBOBOX_EXAMPLES_DATA: ComboboxExample[] = [
  {
    id: 'BasicSelect',
    name: 'Basic select',
    description: 'Primitive select component',
    type: 'select',
  },
  {
    id: 'SelectActive',
    name: 'Select with active option',
    description: 'Active option is marked in the dropdown',
    type: 'select',
  },
  {
    id: 'SearchableSelect',
    name: 'Searchable select',
    description: 'Select with search',
    type: 'select',
  },
  {
    id: 'SelectLimit',
    name: 'Select with options limit',
    description: '100 000 options searchable select',
    fullDescription:
      'Limiting the number of options rendered at a time is the most efficient way to deal with large data sets. The example below shows how to use the limit prop to only render 7 options at a time while performing a search in a data set of 100,000 options.',
    type: 'select',
  },
  {
    id: 'SelectOptionComponent',
    name: 'Select with custom option',
    description: 'Select with custom option and value component',
    type: 'select',
  },
  {
    id: 'SelectAsync',
    name: 'Select with async data',
    description: 'Data is requested only when the dropdown is opened',
    type: 'select',
  },
  {
    id: 'SelectClearable',
    name: 'Select with clear button',
    description: 'Clearable select',
    type: 'select',
  },
  {
    id: 'SelectDropdownSearch',
    name: 'Select with search in dropdown',
    description: 'Select with search input in the dropdown',
    type: 'select',
  },
  {
    id: 'SelectOptionOnHover',
    name: 'Select option on hover',
    description: 'Move selection to hovered option',
    fullDescription:
      'Moving selection to hovered option can be useful when you want to combine mouse and keyboard interactions.',
    type: 'select',
  },
  {
    id: 'SelectGroups',
    name: 'Options groups',
    description: 'Select with options groups',
    type: 'select',
  },
  {
    id: 'SelectGroupsSearchable',
    name: 'Searchable select with groups',
    description: 'Options filtering with grouped data',
    type: 'select',
  },
  {
    id: 'SelectGroupsStyles',
    name: 'Custom group styles',
    description: 'Customize groups styles with Styles API',
    type: 'select',
  },
  {
    id: 'SelectCreatable',
    name: 'Creatable select',
    description: 'Select with option to create new options',
    type: 'select',
  },
  {
    id: 'BasicAutocomplete',
    name: 'Basic autocomplete',
    description: 'Primitive autocomplete component',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteLimit',
    name: 'Autocomplete with options limit',
    description: '100 000 options search',
    fullDescription:
      'Limiting the number of options rendered at a time is the most efficient way to deal with large data sets. The example below shows how to use the limit prop to only render 7 options at a time while performing a search in a data set of 100,000 options.',
    type: 'autocomplete',
  },
  {
    id: 'AsyncAutocomplete',
    name: 'Async autocomplete',
    description: 'Autocomplete with async data',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteHighlight',
    name: 'Autocomplete with highlight',
    description: 'Autocomplete with highlighted search query in options',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteSelectFirstOption',
    name: 'Select first option on type',
    description: 'Autocomplete with first option selected when user types',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteDynamic',
    name: 'Dynamic options',
    description: 'Autocomplete with options that depend on the user input',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteClearable',
    name: 'Clearable autocomplete',
    description: 'Autocomplete with clear button',
    type: 'autocomplete',
  },
  {
    id: 'BasicButton',
    name: 'Basic button',
    description: 'Primitive combobox with button target',
    type: 'button',
  },
  {
    id: 'ButtonSearch',
    name: 'Button with search in dropdown',
    description: 'Button with search input in the dropdown',
    type: 'button',
  },
  {
    id: 'ButtonMultiSelect',
    name: 'Button multi select',
    description: 'Button with multiple items selection',
    type: 'button',
  },
  {
    id: 'DropdownScroll',
    name: 'Dropdown scroll',
    description: 'Dropdown with native scrollbars',
    type: 'dropdown',
  },
  {
    id: 'DropdownScrollArea',
    name: 'Dropdown with ScrollArea',
    description: 'Dropdown with ScrollArea.Autosize scrollbars',
    type: 'dropdown',
  },
  {
    id: 'DropdownHeader',
    name: 'Dropdown with header',
    description: 'Dropdown with ScrollArea and header',
    type: 'dropdown',
  },
  {
    id: 'DropdownFooter',
    name: 'Dropdown with footer',
    description: 'Dropdown with ScrollArea and footer',
    type: 'dropdown',
  },
  {
    id: 'DropdownPositionStyles',
    name: 'Dropdown with custom styles',
    description: 'Change dropdown styles with Styles API',
    type: 'dropdown',
  },
  {
    id: 'SelectedStyles',
    name: 'Custom selected styles',
    description: 'Customize selected option styles',
    type: 'dropdown',
  },
  {
    id: 'DropdownAnimation',
    name: 'Dropdown animation',
    description: 'Dropdown with open/close animation',
    type: 'animations',
  },
  {
    id: 'DropdownOptionsAnimation',
    name: 'Dropdown with option animation',
    description: 'Play options animation on dropdown open',
    type: 'animations',
  },
  {
    id: 'SelectedAnimation',
    name: 'Animate selected option',
    description: 'Play options animation on when option is selected',
    type: 'animations',
  },
  {
    id: 'DropdownSmoothScroll',
    name: 'Smooth scroll',
    description: 'Smooth scroll of the options with keyboard navigation',
    type: 'animations',
  },
  {
    id: 'BasicMultiSelect',
    name: 'Basic multiselect',
    description: 'Primitive multiselect component',
    type: 'multiselect',
  },
  {
    id: 'SearchableMultiSelect',
    name: 'Searchable multiselect',
    description: 'Multiselect with search',
    type: 'multiselect',
  },
  {
    id: 'MaxSelectedItems',
    name: 'Max selected options',
    description: 'Limit max number of options that can be selected',
    type: 'multiselect',
  },
  {
    id: 'MultiSelectCheckbox',
    name: 'Multiselect with checkboxes',
    description: 'Multiselect options with checkboxes',
    type: 'multiselect',
  },
  {
    id: 'ActiveOptionsFilter',
    name: 'Hide active options',
    description: 'Remove active options from the dropdown',
    type: 'multiselect',
  },
  {
    id: 'MaxDisplayedItems',
    name: 'Max displayed values',
    description: 'Limit max number of values that can be displayed',
    type: 'multiselect',
  },
  {
    id: 'MultiSelectValueRenderer',
    name: 'Custom value pills',
    description: 'Use a custom component to render selected values',
    type: 'multiselect',
  },
  {
    id: 'MultiSelectCreatable',
    name: 'Creatable multiselect',
    description: 'Multiselect with option to create new options',
    type: 'multiselect',
  },
  {
    id: 'SelectList',
    name: 'Inline options list',
    description: 'Inline list with checkboxes',
    type: 'other',
  },
  {
    id: 'TransferList',
    name: 'Transfer list',
    description: 'Transfer list with search',
    type: 'other',
  },
];
