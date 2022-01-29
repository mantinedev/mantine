import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  '../src/mantine-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../src/mantine-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/mantine-core/src/Menu/MenuLabel/MenuLabel.tsx',
  '../src/mantine-core/src/RadioGroup/Radio/Radio.tsx',
  '../src/mantine-core/src/components/Chips/Chip/Chip.tsx',
  '../src/mantine-core/src/components/Timeline/TimelineItem/TimelineItem.tsx',
  '../src/mantine-core/src/components/Slider/Slider/Slider.tsx',
  '../src/mantine-core/src/components/Slider/RangeSlider/RangeSlider.tsx',
  '../src/mantine-core/src/components/Stepper/Step/Step.tsx',
  '../src/mantine-core/src/components/Avatar/AvatarsGroup/AvatarsGroup.tsx',
  '../src/mantine-core/src/components/AppShell/Navbar/Navbar.tsx',
  '../src/mantine-core/src/components/AppShell/Header/Header.tsx',
  '../src/mantine-core/src/components/Grid/Col/Col.tsx',
  '../src/mantine-prism/src/Prism.tsx',
  '../src/mantine-modals/src/ModalsProvider.tsx',
  '../src/mantine-rte/src/components/RichTextEditor/RichTextEditor.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/mantine-core/src/components') },
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
