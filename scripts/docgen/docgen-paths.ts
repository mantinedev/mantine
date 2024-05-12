import { getPath, getPaths } from '../utils/get-path';
import { getDeclarationsPaths } from './get-declarations-paths';

const FILES_PATHS = getPaths([
  // Input
  'packages/@mantine/core/src/components/Input/InputLabel/InputLabel.tsx',
  'packages/@mantine/core/src/components/Input/InputWrapper/InputWrapper.tsx',
  'packages/@mantine/core/src/components/Input/InputDescription/InputDescription.tsx',
  'packages/@mantine/core/src/components/Input/InputError/InputError.tsx',

  // Button
  'packages/@mantine/core/src/components/Button/ButtonGroup/ButtonGroup.tsx',

  // ActionIcon
  'packages/@mantine/core/src/components/ActionIcon/ActionIconGroup/ActionIconGroup.tsx',

  // Popover
  'packages/@mantine/core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  'packages/@mantine/core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Slider
  'packages/@mantine/core/src/components/Slider/Slider/Slider.tsx',
  'packages/@mantine/core/src/components/Slider/RangeSlider/RangeSlider.tsx',

  // Switch
  'packages/@mantine/core/src/components/Switch/SwitchGroup/SwitchGroup.tsx',

  // Checkbox
  'packages/@mantine/core/src/components/Checkbox/CheckboxGroup/CheckboxGroup.tsx',
  'packages/@mantine/core/src/components/Checkbox/CheckboxIndicator/CheckboxIndicator.tsx',
  'packages/@mantine/core/src/components/Checkbox/CheckboxCard/CheckboxCard.tsx',

  // Radio
  'packages/@mantine/core/src/components/Radio/RadioGroup/RadioGroup.tsx',
  'packages/@mantine/core/src/components/Radio/RadioIndicator/RadioIndicator.tsx',
  'packages/@mantine/core/src/components/Radio/RadioCard/RadioCard.tsx',

  // Tabs
  'packages/@mantine/core/src/components/Tabs/TabsTab/TabsTab.tsx',
  'packages/@mantine/core/src/components/Tabs/TabsList/TabsList.tsx',
  'packages/@mantine/core/src/components/Tabs/TabsPanel/TabsPanel.tsx',

  // Accordion
  'packages/@mantine/core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  'packages/@mantine/core/src/components/Accordion/AccordionControl/AccordionControl.tsx',

  // Pill
  'packages/@mantine/core/src/components/Pill/PillGroup/PillGroup.tsx',

  // PillsInput
  'packages/@mantine/core/src/components/PillsInput/PillsInputField/PillsInputField.tsx',

  // Pagination
  'packages/@mantine/core/src/components/Pagination/PaginationRoot/PaginationRoot.tsx',
  'packages/@mantine/core/src/components/Pagination/PaginationItems/PaginationItems.tsx',
  'packages/@mantine/core/src/components/Pagination/PaginationDots/PaginationDots.tsx',
  'packages/@mantine/core/src/components/Pagination/PaginationEdges/PaginationEdges.tsx',
  'packages/@mantine/core/src/components/Pagination/PaginationControl/PaginationControl.tsx',

  // Combobox
  'packages/@mantine/core/src/components/Combobox/ComboboxOption/ComboboxOption.tsx',
  'packages/@mantine/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@mantine/core/src/components/Combobox/ComboboxTarget/ComboboxTarget.tsx',
  'packages/@mantine/core/src/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.tsx',
  'packages/@mantine/core/src/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.tsx',
  'packages/@mantine/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@mantine/core/src/components/Combobox/ComboboxGroup/ComboboxGroup.tsx',

  // AppShell
  'packages/@mantine/core/src/components/AppShell/AppShellAside/AppShellAside.tsx',
  'packages/@mantine/core/src/components/AppShell/AppShellNavbar/AppShellNavbar.tsx',
  'packages/@mantine/core/src/components/AppShell/AppShellHeader/AppShellHeader.tsx',
  'packages/@mantine/core/src/components/AppShell/AppShellFooter/AppShellFooter.tsx',
  'packages/@mantine/core/src/components/AppShell/AppShellSection/AppShellSection.tsx',

  // Grid
  'packages/@mantine/core/src/components/Grid/GridCol/GridCol.tsx',

  // HoverCard
  'packages/@mantine/core/src/components/HoverCard/HoverCardTarget/HoverCardTarget.tsx',

  // Menu
  'packages/@mantine/core/src/components/Menu/MenuItem/MenuItem.tsx',
  'packages/@mantine/core/src/components/Menu/MenuTarget/MenuTarget.tsx',

  // Progress
  'packages/@mantine/core/src/components/Progress/ProgressSection/ProgressSection.tsx',
  'packages/@mantine/core/src/components/Progress/ProgressRoot/ProgressRoot.tsx',

  // Chip
  'packages/@mantine/core/src/components/Chip/ChipGroup/ChipGroup.tsx',

  // Card
  'packages/@mantine/core/src/components/Card/CardSection/CardSection.tsx',

  // Stepper
  'packages/@mantine/core/src/components/Stepper/StepperStep/StepperStep.tsx',

  // Timeline
  'packages/@mantine/core/src/components/Timeline/TimelineItem/TimelineItem.tsx',

  // List
  'packages/@mantine/core/src/components/List/ListItem/ListItem.tsx',

  // Spotlight
  'packages/@mantine/spotlight/src/Spotlight.tsx',
  'packages/@mantine/spotlight/src/SpotlightAction.tsx',
  'packages/@mantine/spotlight/src/SpotlightActionsGroup.tsx',
  'packages/@mantine/spotlight/src/SpotlightRoot.tsx',
  'packages/@mantine/spotlight/src/SpotlightSearch.tsx',

  // Carousel
  'packages/@mantine/carousel/src/Carousel.tsx',

  // Dropzone
  'packages/@mantine/dropzone/src/Dropzone.tsx',
  'packages/@mantine/dropzone/src/DropzoneFullScreen.tsx',

  // CodeHighlight
  'packages/@mantine/code-highlight/src/CodeHighlight.tsx',
  'packages/@mantine/code-highlight/src/CodeHighlightTabs.tsx',
  'packages/@mantine/code-highlight/src/InlineCodeHighlight.tsx',

  // Nprogress
  'packages/@mantine/nprogress/src/NavigationProgress.tsx',

  // Modals
  'packages/@mantine/modals/src/ModalsProvider.tsx',

  // Tiptap
  'packages/@mantine/tiptap/src/RichTextEditor.tsx',

  // Notifications
  'packages/@mantine/notifications/src/Notifications.tsx',
]);

export const DOCGEN_PATHS = getDeclarationsPaths([
  { type: 'package', path: getPath('packages/@mantine/core/src/components') },
  { type: 'package', path: getPath('packages/@mantine/dates/src/components') },
  { type: 'package', path: getPath('packages/@mantine/charts/src') },
  ...FILES_PATHS.map((filePath) => ({ type: 'file' as const, path: filePath })),
]);
