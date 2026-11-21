import { EmojiPicker } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPicker } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return (
    <EmojiPicker
      data={emojiData}
      onEmojiSelect={(emoji) => console.log(emoji)}
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPicker
      data={demoEmojiData}
      // eslint-disable-next-line no-console
      onEmojiSelect={(emoji) => console.log(emoji)}
    />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
