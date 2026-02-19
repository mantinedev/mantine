import { SquaresFourIcon } from '@phosphor-icons/react';
import { TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TagsInput } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <TagsInput
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <TagsInput
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
`;

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <TagsInput
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <TagsInput
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
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
