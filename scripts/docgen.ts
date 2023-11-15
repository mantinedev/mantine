import path from 'path';
import fs from 'fs-extra';
import { generateDeclarations } from 'mantine-docgen-script';

function getPackagePaths(packageFolder: string) {
  return fs
    .readdirSync(packageFolder)
    .filter((p) => fs.pathExistsSync(path.join(packageFolder, p, `${p}.tsx`)))
    .map((p) => path.join(packageFolder, p, `${p}.tsx`));
}

export interface DeclarationPath {
  path: string;
  type: 'package' | 'file';
}

export function getDeclarationsList(paths: DeclarationPath[]): string[] {
  return paths.reduce<string[]>((acc, info) => {
    if (info.type === 'package') {
      const items = getPackagePaths(info.path);
      return [...acc, ...items];
    }

    if (info.type === 'file') {
      return [...acc, info.path];
    }

    return acc;
  }, []);
}

const EXTRA_FILES_PATHS = [
  // Input
  'src/mantine-core/src/components/Input/InputLabel/InputLabel.tsx',
  'src/mantine-core/src/components/Input/InputWrapper/InputWrapper.tsx',
  'src/mantine-core/src/components/Input/InputDescription/InputDescription.tsx',
  'src/mantine-core/src/components/Input/InputError/InputError.tsx',

  // Button
  'src/mantine-core/src/components/Button/ButtonGroup/ButtonGroup.tsx',

  // ActionIcon
  'src/mantine-core/src/components/ActionIcon/ActionIconGroup/ActionIconGroup.tsx',

  // Popover
  'src/mantine-core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  'src/mantine-core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Slider
  'src/mantine-core/src/components/Slider/Slider/Slider.tsx',
  'src/mantine-core/src/components/Slider/RangeSlider/RangeSlider.tsx',

  // Switch
  'src/mantine-core/src/components/Switch/SwitchGroup/SwitchGroup.tsx',

  // Checkbox
  'src/mantine-core/src/components/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Radio
  'src/mantine-core/src/components/Radio/RadioGroup/RadioGroup.tsx',

  // Tabs
  'src/mantine-core/src/components/Tabs/TabsTab/TabsTab.tsx',
  'src/mantine-core/src/components/Tabs/TabsList/TabsList.tsx',
  'src/mantine-core/src/components/Tabs/TabsPanel/TabsPanel.tsx',

  // Accordion
  'src/mantine-core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  'src/mantine-core/src/components/Accordion/AccordionControl/AccordionControl.tsx',

  // Pill
  'src/mantine-core/src/components/Pill/PillGroup/PillGroup.tsx',

  // PillsInput
  'src/mantine-core/src/components/PillsInput/PillsInputField/PillsInputField.tsx',

  // Combobox
  'src/mantine-core/src/components/Combobox/ComboboxOption/ComboboxOption.tsx',
  'src/mantine-core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'src/mantine-core/src/components/Combobox/ComboboxTarget/ComboboxTarget.tsx',
  'src/mantine-core/src/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.tsx',
  'src/mantine-core/src/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.tsx',
  'src/mantine-core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'src/mantine-core/src/components/Combobox/ComboboxGroup/ComboboxGroup.tsx',

  // AppShell
  'src/mantine-core/src/components/AppShell/AppShellAside/AppShellAside.tsx',
  'src/mantine-core/src/components/AppShell/AppShellNavbar/AppShellNavbar.tsx',
  'src/mantine-core/src/components/AppShell/AppShellHeader/AppShellHeader.tsx',
  'src/mantine-core/src/components/AppShell/AppShellFooter/AppShellFooter.tsx',
  'src/mantine-core/src/components/AppShell/AppShellSection/AppShellSection.tsx',

  // Grid
  'src/mantine-core/src/components/Grid/GridCol/GridCol.tsx',

  // HoverCard
  'src/mantine-core/src/components/HoverCard/HoverCardTarget/HoverCardTarget.tsx',

  // Menu
  'src/mantine-core/src/components/Menu/MenuItem/MenuItem.tsx',
  'src/mantine-core/src/components/Menu/MenuTarget/MenuTarget.tsx',

  // Progress
  'src/mantine-core/src/components/Progress/ProgressSection/ProgressSection.tsx',
  'src/mantine-core/src/components/Progress/ProgressRoot/ProgressRoot.tsx',

  // Chip
  'src/mantine-core/src/components/Chip/ChipGroup/ChipGroup.tsx',

  // Card
  'src/mantine-core/src/components/Card/CardSection/CardSection.tsx',

  // Stepper
  'src/mantine-core/src/components/Stepper/StepperStep/StepperStep.tsx',

  // Timeline
  'src/mantine-core/src/components/Timeline/TimelineItem/TimelineItem.tsx',

  // List
  'src/mantine-core/src/components/List/ListItem/ListItem.tsx',

  // Spotlight
  'src/mantine-spotlight/src/Spotlight.tsx',
  'src/mantine-spotlight/src/SpotlightAction.tsx',
  'src/mantine-spotlight/src/SpotlightActionsGroup.tsx',
  'src/mantine-spotlight/src/SpotlightRoot.tsx',
  'src/mantine-spotlight/src/SpotlightSearch.tsx',

  // Carousel
  'src/mantine-carousel/src/Carousel.tsx',

  // Dropzone
  'src/mantine-dropzone/src/Dropzone.tsx',
  'src/mantine-dropzone/src/DropzoneFullScreen.tsx',

  // CodeHighlight
  'src/mantine-code-highlight/src/CodeHighlight.tsx',
  'src/mantine-code-highlight/src/CodeHighlightTabs.tsx',
  'src/mantine-code-highlight/src/InlineCodeHighlight.tsx',

  // Nprogress
  'src/mantine-nprogress/src/NavigationProgress.tsx',

  // Modals
  'src/mantine-modals/src/ModalsProvider.tsx',

  // Tiptap
  'src/mantine-tiptap/src/RichTextEditor.tsx',

  // Notifications
  'src/mantine-notifications/src/Notifications.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(process.cwd(), 'src/mantine-core/src/components') },
  { type: 'package', path: path.join(process.cwd(), 'src/mantine-dates/src/components') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(process.cwd(), filePath),
  })),
];

generateDeclarations({
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs/.docgen'),
  componentsPaths: getDeclarationsList(PATHS),
  excludeProps: [],
  typesReplacement: {},
});
