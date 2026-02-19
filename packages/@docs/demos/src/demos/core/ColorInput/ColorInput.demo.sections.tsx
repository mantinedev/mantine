import { EyedropperIcon } from '@phosphor-icons/react';
import { ColorInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@mantine/core';
import { EyedropperIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <EyedropperIcon size={18} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        leftSectionPointerEvents="none"
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  const icon = <EyedropperIcon size={18} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        leftSectionPointerEvents="none"
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
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
