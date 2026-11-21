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
      placeholder="Select emoji"
      closeOnSelect={false}
    />
  );
}
`;

function Demo() {
  return <EmojiPickerInput data={demoEmojiData} placeholder="Select emoji" closeOnSelect={false} />;
}

export const closeOnSelect: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
