import { CaretDownIcon, HashIcon } from '@phosphor-icons/react';
import { NativeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NativeSelect } from '@mantine/core';
import { CaretDownIcon, HashIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<HashIcon size={16} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<CaretDownIcon size={16} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<HashIcon size={16} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<CaretDownIcon size={16} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
