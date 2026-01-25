import { Pill, TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TagsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Custom pills"
      description="Tags are rendered with a star prefix"
      placeholder="Enter tag"
      defaultValue={['React', 'Angular']}
      renderPill={({ value, onRemove }) => (
        <Pill withRemoveButton onRemove={onRemove}>
          ★ {value}
        </Pill>
      )}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Custom pills"
      description="Tags are rendered with a star prefix"
      placeholder="Enter tag"
      defaultValue={['React', 'Angular']}
      renderPill={({ value, onRemove }) => (
        <Pill withRemoveButton onRemove={onRemove}>
          ★ {value}
        </Pill>
      )}
    />
  );
}

export const renderPill: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
};
