import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../src/mantine-core/src/Tabs/TabsList/TabsList.tsx',
  '../src/mantine-core/src/Tabs/Tab/Tab.tsx',
  '../src/mantine-core/src/Tabs/TabsPanel/TabsPanel.tsx',
  '../src/mantine-core/src/Tabs/Tabs.tsx',

  // Accordion
  '../src/mantine-core/src/Accordion/AccordionControl/AccordionControl.tsx',
  '../src/mantine-core/src/Accordion/AccordionItem/AccordionItem.tsx',
  '../src/mantine-core/src/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../src/mantine-core/src/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../src/mantine-core/src/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../src/mantine-core/src/Popover/PopoverTarget/PopoverTarget.tsx',
  '../src/mantine-core/src/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // HoverCard
  '../src/mantine-core/src/HoverCard/HoverCardTarget/HoverCardTarget.tsx',
  '../src/mantine-core/src/HoverCard/HoverCardDropdown/HoverCardDropdown.tsx',

  // Menu
  '../src/mantine-core/src/Menu/MenuTarget/MenuTarget.tsx',
  '../src/mantine-core/src/Menu/MenuDropdown/MenuDropdown.tsx',
  '../src/mantine-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/mantine-core/src/Menu/MenuLabel/MenuLabel.tsx',

  // Input
  '../src/mantine-core/src/Input/InputLabel/InputLabel.tsx',
  '../src/mantine-core/src/Input/InputWrapper/InputWrapper.tsx',
  '../src/mantine-core/src/Input/InputDescription/InputDescription.tsx',
  '../src/mantine-core/src/Input/InputError/InputError.tsx',

  // List
  '../src/mantine-core/src/List/ListItem/ListItem.tsx',

  // Avatar
  '../src/mantine-core/src/Avatar/AvatarGroup/AvatarGroup.tsx',

  // Checkbox
  '../src/mantine-core/src/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Switch
  '../src/mantine-core/src/Switch/SwitchGroup/SwitchGroup.tsx',

  // Radio
  '../src/mantine-core/src/Radio/RadioGroup/RadioGroup.tsx',

  // Chip
  '../src/mantine-core/src/Chip/ChipGroup/ChipGroup.tsx',

  // Grid
  '../src/mantine-core/src/Grid/Col/Col.tsx',

  // Button
  '../src/mantine-core/src/Button/ButtonGroup/ButtonGroup.tsx',

  // Timeline
  '../src/mantine-core/src/Timeline/TimelineItem/TimelineItem.tsx',

  // Slider
  '../src/mantine-core/src/Slider/Slider/Slider.tsx',
  '../src/mantine-core/src/Slider/RangeSlider/RangeSlider.tsx',

  // AppShell
  '../src/mantine-core/src/AppShell/Navbar/Navbar.tsx',
  '../src/mantine-core/src/AppShell/Header/Header.tsx',
  '../src/mantine-core/src/AppShell/Footer/Footer.tsx',
  '../src/mantine-core/src/AppShell/Aside/Aside.tsx',

  // Stepper
  '../src/mantine-core/src/Stepper/Step/Step.tsx',

  // Pagination
  '../src/mantine-core/src/Pagination/PaginationRoot/PaginationRoot.tsx',
  '../src/mantine-core/src/Pagination/PaginationItems/PaginationItems.tsx',

  // Carousel
  '../src/mantine-carousel/src/Carousel.tsx',
  '../src/mantine-carousel/src/CarouselSlide/CarouselSlide.tsx',

  // Other
  '../src/mantine-notifications/src/Notifications/Notifications.tsx',
  '../src/mantine-prism/src/Prism/Prism.tsx',
  '../src/mantine-spotlight/src/SpotlightProvider.tsx',
  '../src/mantine-modals/src/ModalsProvider.tsx',
  '../src/mantine-tiptap/src/RichTextEditor.tsx',
  '../src/mantine-nprogress/src/NavigationProgress.tsx',
  '../src/mantine-dropzone/src/Dropzone.tsx',
  '../src/mantine-dropzone/src/DropzoneFullScreen.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/mantine-core/src') },
  { type: 'package', path: path.join(__dirname, '../src/mantine-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/mantine-dropzone/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
