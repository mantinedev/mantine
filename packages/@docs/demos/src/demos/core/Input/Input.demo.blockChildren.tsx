import { Input, SegmentedControl } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Input, SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <Input.Wrapper label="Display" description="How the text is edited" withBlockChildren>
      <SegmentedControl data={['Input', 'Textarea']} />
    </Input.Wrapper>
  );
}
`;

function Demo() {
  return (
    <Input.Wrapper label="Display" description="How the text is edited" withBlockChildren>
      <SegmentedControl data={['Input', 'Textarea']} />
    </Input.Wrapper>
  );
}

export const blockChildren: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
