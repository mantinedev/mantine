import path from 'path';
import fs from 'fs-extra';

const files = fs
  .readdirSync(path.join(__dirname, '../src/mantine-core/src'))
  .filter((p) => fs.pathExistsSync(path.join(__dirname, '../src/mantine-core/src', p, `${p}.tsx`)));

const getContent = (component: string) => `---
package: mantine-core
title: ${component}
slug: /core/${component.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}/
---

import PropsTable from '../../components/PropsTable/PropsTable';
import PageHeader from '../../components/PageHeader/PageHeader';

# ${component}

This is a ${component} component description placeholder

<PageHeader
  source="mantine-core/src/${component}/${component}.tsx"
  docs="core/${component}.mdx"
  package="@mantine/core"
/>

## Import

\`\`\`tsx
import { ${component} } from '@mantine/core';
\`\`\`

<PropsTable component="${component}" />
`;

files.forEach((filePath) => {
  fs.writeFileSync(
    path.join(__dirname, '../docs/src/docs/core/', `${filePath}.mdx`),
    getContent(filePath)
  );
});
