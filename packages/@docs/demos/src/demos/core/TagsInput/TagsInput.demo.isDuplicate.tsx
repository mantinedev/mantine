import { TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      isDuplicate={(tagValue, currentTags) => currentTags.some((val) => val === tagValue)}
      defaultValue={['Tag', 'TAG', 'tag']}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      isDuplicate={(tagValue, currentTags) => currentTags.some((val) => val === tagValue)}
      defaultValue={['Tag', 'TAG', 'tag']}
    />
  );
}

export const isDuplicate: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
