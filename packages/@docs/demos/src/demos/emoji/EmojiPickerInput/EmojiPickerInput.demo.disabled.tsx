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
      disabled
      defaultValue="grinning"
      label="Disabled"
      placeholder="Select emoji"
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPickerInput
      data={demoEmojiData}
      disabled
      defaultValue="grinning"
      label="Disabled"
      placeholder="Select emoji"
    />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
