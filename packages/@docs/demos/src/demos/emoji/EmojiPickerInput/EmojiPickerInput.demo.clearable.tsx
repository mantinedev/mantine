import { EmojiPickerInput } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPickerInput } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return (
    <EmojiPickerInput
      data={emojiData}
      clearable
      defaultValue="grinning"
      label="Clearable"
      placeholder="Select emoji"
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPickerInput
      data={demoEmojiData}
      clearable
      defaultValue="grinning"
      label="Clearable"
      placeholder="Select emoji"
    />
  );
}

export const clearable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
