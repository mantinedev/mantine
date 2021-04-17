import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/mantine-core/src') },
  {
    type: 'file',
    path: path.join(
      __dirname,
      '../src/mantine-notifications/src/NotificationsProvider/NotificationsProvider.tsx'
    ),
  },
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
