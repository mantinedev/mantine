import { CheckIcon, CopyIcon } from '@phosphor-icons/react';
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { CopyIcon, CheckIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'CopyIcon'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

`;

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'CopyIcon'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export const timeout: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
