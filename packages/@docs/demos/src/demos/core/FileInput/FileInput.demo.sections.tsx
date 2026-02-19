import { FileTextIcon } from '@phosphor-icons/react';
import { FileInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileInput } from '@mantine/core';
import { FileTextIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <FileTextIcon size={18} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  const icon = <FileTextIcon size={18} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
