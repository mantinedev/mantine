import { TextBIcon } from '@phosphor-icons/react';
import { Group, Toggle } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextBIcon } from '@phosphor-icons/react';
import { Group, Toggle } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Toggle active variant="filled" color="lime.4" aria-label="Without autoContrast">
        <TextBIcon weight="bold" size="100%" />
      </Toggle>
      <Toggle autoContrast active variant="filled" color="lime.4" aria-label="With autoContrast">
        <TextBIcon weight="bold" size="100%" />
      </Toggle>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Toggle active variant="filled" color="lime.4" aria-label="Without autoContrast">
        <TextBIcon weight="bold" size="100%" />
      </Toggle>
      <Toggle autoContrast active variant="filled" color="lime.4" aria-label="With autoContrast">
        <TextBIcon weight="bold" size="100%" />
      </Toggle>
    </Group>
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
