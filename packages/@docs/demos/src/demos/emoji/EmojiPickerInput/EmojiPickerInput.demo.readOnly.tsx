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
      readOnly
      defaultValue="grinning"
      label="Read only"
      placeholder="Select emoji"
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPickerInput
      data={demoEmojiData}
      readOnly
      defaultValue="grinning"
      label="Read only"
      placeholder="Select emoji"
    />
  );
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
