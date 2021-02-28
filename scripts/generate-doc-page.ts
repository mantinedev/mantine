import path from 'path';
import fs from 'fs-extra';

const files = fs
  .readdirSync(path.join(__dirname, '../src/mantine-core/src'))
  .filter((p) => fs.pathExistsSync(path.join(__dirname, '../src/mantine-core/src', p, `${p}.tsx`)));

const getContent = (component: string) => `---
category: Mantine core
---

import PropsTable from '../../components/PropsTable/PropsTable';
import docs from '../../../.docgen/mantine-core/${component}.json';

# ${component}

This is a text input component description placeholder

## Import

\`\`\`tsx
import { ${component} } from '@mantine/core';
\`\`\`

<PropsTable data={docs} />
`;

files.forEach((filePath) => {
  fs.writeFileSync(
    path.join(__dirname, '../docs/src/pages/components/', `${filePath}.mdx`),
    getContent(filePath)
  );
});
