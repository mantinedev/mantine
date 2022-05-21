import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../src/mantine-core/src/components/Tabs/TabsList/TabsList.tsx',
  '../src/mantine-core/src/components/Tabs/Tab/Tab.tsx',
  '../src/mantine-core/src/components/Tabs/TabsPanel/TabsPanel.tsx',
  '../src/mantine-core/src/components/Tabs/Tabs.tsx',

  // Accordion
  '../src/mantine-core/src/components/Accordion/AccordionControl/AccordionControl.tsx',
  '../src/mantine-core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  '../src/mantine-core/src/components/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../src/mantine-core/src/components/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../src/mantine-core/src/components/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../src/mantine-core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  '../src/mantine-core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // HoverCard
  '../src/mantine-core/src/components/HoverCard/HoverCardTarget/HoverCardTarget.tsx',
  '../src/mantine-core/src/components/HoverCard/HoverCardDropdown/HoverCardDropdown.tsx',

  // Menu
  '../src/mantine-core/src/components/Menu/MenuTarget/MenuTarget.tsx',
  '../src/mantine-core/src/components/Menu/MenuDropdown/MenuDropdown.tsx',
  '../src/mantine-core/src/components/Menu/MenuItem/MenuItem.tsx',
  '../src/mantine-core/src/components/Menu/MenuLabel/MenuLabel.tsx',

  // List
  '../src/mantine-core/src/components/List/ListItem/ListItem.tsx',

  // Avatar
  '../src/mantine-core/src/components/Avatar/AvatarGroup/AvatarGroup.tsx',

  // Checkbox
  '../src/mantine-core/src/components/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Radio
  '../src/mantine-core/src/components/Radio/RadioGroup/RadioGroup.tsx',

  // Chip
  '../src/mantine-core/src/components/Chip/ChipGroup/ChipGroup.tsx',

  // Grid
  '../src/mantine-core/src/components/Grid/Col/Col.tsx',

  // Other
  '../src/mantine-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../src/mantine-core/src/components/Menu/MenuItem/MenuItem.tsx',
  '../src/mantine-core/src/components/Menu/MenuLabel/MenuLabel.tsx',
  '../src/mantine-core/src/components/Timeline/TimelineItem/TimelineItem.tsx',
  '../src/mantine-core/src/components/Slider/Slider/Slider.tsx',
  '../src/mantine-core/src/components/Slider/RangeSlider/RangeSlider.tsx',
  '../src/mantine-core/src/components/Stepper/Step/Step.tsx',
  '../src/mantine-core/src/components/AppShell/Navbar/Navbar.tsx',
  '../src/mantine-core/src/components/AppShell/Header/Header.tsx',
  '../src/mantine-core/src/components/AppShell/Footer/Footer.tsx',
  '../src/mantine-core/src/components/AppShell/Aside/Aside.tsx',
  '../src/mantine-core/src/components/Grid/Col/Col.tsx',
  '../src/mantine-prism/src/Prism/Prism.tsx',
  '../src/mantine-spotlight/src/SpotlightProvider.tsx',
  '../src/mantine-modals/src/ModalsProvider.tsx',
  '../src/mantine-rte/src/components/RichTextEditor/RichTextEditor.tsx',
  '../src/mantine-nprogress/src/NProgress.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/mantine-core/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/mantine-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/mantine-dropzone/src') },
  { type: 'package', path: path.join(__dirname, '../src/mantine-labs/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
