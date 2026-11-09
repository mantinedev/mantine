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
      scrollAreaProps={{ style: { height: 500 }, type: 'always' }}
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPicker
      data={demoEmojiData}
      scrollAreaProps={{ style: { height: 500 }, type: 'always' }}
    />
  );
}

export const scrollArea: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
