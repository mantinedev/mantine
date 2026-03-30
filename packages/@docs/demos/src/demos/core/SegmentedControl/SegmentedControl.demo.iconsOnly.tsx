import { ArrowSquareOutIcon, CodeIcon, EyeIcon } from '@phosphor-icons/react';
import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import { EyeIcon, CodeIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  const iconProps = {
    style: { display: 'block' },
    size: 20,

  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <EyeIcon {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <CodeIcon {...iconProps} />
              <VisuallyHidden>CodeIcon</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <ArrowSquareOutIcon {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
`;

function Demo() {
  const iconProps = {
    style: { display: 'block' },
    size: 20,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <EyeIcon {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <CodeIcon {...iconProps} />
              <VisuallyHidden>CodeIcon</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <ArrowSquareOutIcon {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}

export const iconsOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
