import { IconSearch } from '@tabler/icons-react';
import { SpotlightActionData } from '@mantine/spotlight';
import { MantineDemo } from '@mantinex/demo';
import { SpotlightDemoBase } from './_demo-base';

const code = `
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`;

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: `action-${index}`,
    label: `Action ${index}`,
    description: `Action ${index} description`,
  }));

function Demo() {
  return (
    <SpotlightDemoBase
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      scrollable
      maxHeight={350}
      shortcut={null}
      searchProps={{
        leftSection: <IconSearch size={20} stroke={1.5} />,
        placeholder: 'Search...',
      }}
    />
  );
}

export const scrollable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
