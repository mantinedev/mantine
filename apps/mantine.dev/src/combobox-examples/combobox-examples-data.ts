import type { ExampleItem, ExamplesGroup } from '@/components/ExamplesShell';
import { COMBOBOX_EXAMPLES_COMPONENTS } from './examples';

export interface ComboboxExample extends ExampleItem {
  id: keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;
  type:
    | 'select'
    | 'autocomplete'
    | 'multiselect'
    | 'dropdown'
    | 'button'
    | 'animations'
    | 'virtualization'
    | 'treeselect'
    | 'other';
}

export const COMBOBOX_EXAMPLES_GROUPS: ExamplesGroup[] = [
  { type: 'select', label: 'Select' },
  { type: 'autocomplete', label: 'Autocomplete' },
  { type: 'multiselect', label: 'Multiselect' },
  { type: 'button', label: 'Button' },
  { type: 'dropdown', label: 'Dropdown' },
  { type: 'animations', label: 'Animations' },
  { type: 'virtualization', label: 'Virtualization' },
  { type: 'treeselect', label: 'Tree select' },
  { type: 'other', label: 'Other' },
];

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
      'Limiting the number of options rendered at a time is the most efficient way to deal with large data sets. The example below filters a data set of 100,000 options and stops after the first 7 matches, so only 7 options are rendered at a time.',
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
      'Limiting the number of options rendered at a time is the most efficient way to deal with large data sets. The example below filters a data set of 100,000 options and stops after the first 7 matches, so only 7 options are rendered at a time.',
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
    id: 'DropdownFloatingHeight',
    name: 'Fit dropdown to viewport',
    description: 'Dropdown grows to fill the available viewport height',
    fullDescription:
      'Set floatingHeight="viewport" to make the dropdown fill the space below the input instead of flipping. The options list is bounded with the --combobox-floating-options-max-height CSS variable.',
    type: 'dropdown',
  },
  {
    id: 'SelectCategoryFilter',
    name: 'Category filter',
    description: 'Switch options category with controls in the dropdown header',
    fullDescription:
      'SegmentedControl in the dropdown header filters options by category. Focus stays on the input when it is clicked, Tab moves focus to the control, and Left and Right arrow keys switch categories without leaving the input. Changes are announced with a live region.',
    type: 'dropdown',
  },
  {
    id: 'SelectOptionDetails',
    name: 'Option details panel',
    description: 'Preview details of the highlighted option next to the list',
    fullDescription:
      'The panel subscribes to the highlighted option with store.subscribeToSelectedOptionId and shows details of the option under the mouse or keyboard cursor. When nothing is highlighted, the panel shows the selected value.',
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
    description: 'Animate the highlighted option',
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
    id: 'ReorderablePillsMultiSelect',
    name: 'Reorderable pills multiselect',
    description: 'Multiselect with drag-and-drop pill reordering',
    fullDescription:
      'Built from Combobox primitives with the usePillsReorder hook. Each pill becomes draggable and dropping one before or after another reorders the value array automatically.',
    type: 'multiselect',
  },
  {
    id: 'MultiSelectSelectAll',
    name: 'Select all',
    description: 'Header checkbox that selects or clears all visible options',
    fullDescription:
      'The checkbox in the dropdown header applies to the options that match the current search and shows an indeterminate state when only some of them are selected. The header is reachable with Tab, so the action works with the keyboard as well.',
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
  {
    id: 'MobileBottomSheet',
    name: 'Mobile bottom sheet',
    description: 'Dropdown on desktop, bottom Drawer on small screens',
    fullDescription:
      'Below the sm breakpoint the options are rendered inside a bottom Drawer with a search input instead of the dropdown. Combobox.EventsTarget keeps keyboard navigation working inside the drawer. Resize the window to see both modes.',
    type: 'other',
  },
  {
    id: 'VirtualizedTanstack',
    name: 'Virtualized select (TanStack)',
    description: 'Virtualized options list with @tanstack/react-virtual',
    type: 'virtualization',
  },
  {
    id: 'VirtualizedSearchableTanstack',
    name: 'Searchable virtualized select (TanStack)',
    description: 'Searchable virtualized options list with @tanstack/react-virtual',
    type: 'virtualization',
  },
  {
    id: 'VirtualizedOptions',
    name: 'Virtualized select (react-virtuoso)',
    description: 'Virtualized options list with react-virtuoso',
    type: 'virtualization',
  },
  {
    id: 'TreeSelectCombobox',
    name: 'Tree select',
    description: 'Select with expandable tree options',
    fullDescription:
      'A tree select built from Combobox primitives. Nodes with children can be expanded or collapsed with connecting tree lines.',
    type: 'treeselect',
  },
  {
    id: 'TreeMultiSelectCombobox',
    name: 'Tree multi select',
    description: 'Multi select with tree hierarchy and checkboxes',
    fullDescription:
      'A multi-select tree with checkbox indicators. Checking a parent checks all children. Supports indeterminate state for partially checked groups.',
    type: 'treeselect',
  },
  {
    id: 'TreeSelectSearchable',
    name: 'Searchable tree select',
    description: 'Tree select with search filtering',
    fullDescription:
      'A searchable tree select that filters nodes as you type. Matching nodes and their ancestors are displayed with all parent groups auto-expanded.',
    type: 'treeselect',
  },
  {
    id: 'TreeSelectCheckbox',
    name: 'Tree select with checkboxes',
    description: 'Multi-select tree where each node is independently checkable',
    fullDescription:
      'A multi-select tree with checkbox indicators. Each node, including parent groups, is an independent value that can be checked or unchecked – selecting a parent does not affect its children. Expand or collapse groups with the chevron or the Left and Right arrow keys.',
    type: 'treeselect',
  },
  {
    id: 'TreeSelectVirtualized',
    name: 'Virtualized tree select',
    description: 'Virtualized tree select with large data set',
    fullDescription:
      'A virtualized tree select using @tanstack/react-virtual to efficiently render a large tree with 292 nodes. Supports expand/collapse with chevron icons.',
    type: 'treeselect',
  },
];
