import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  '../src/mantine-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../src/mantine-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/mantine-core/src/RadioGroup/Radio/Radio.tsx',
  '../src/mantine-core/src/Tabs/Tab/Tab.tsx',
  '../src/mantine-core/src/Card/CardsGrid/CardsGrid.tsx',
  '../src/mantine-tag-picker/src/TagPickerContainer.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/mantine-core/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
