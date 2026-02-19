import { ArrowSquareOutIcon, CodeIcon, EyeIcon } from '@phosphor-icons/react';
import { Center, SegmentedControl } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Center, SegmentedControl } from '@mantine/core';
import { EyeIcon, CodeIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <EyeIcon size={16} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <CodeIcon size={16} />
              <span>CodeIcon</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <ArrowSquareOutIcon size={16} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <EyeIcon size={16} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <CodeIcon size={16} />
              <span>CodeIcon</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <ArrowSquareOutIcon size={16} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}

export const labels: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
