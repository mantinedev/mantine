import { EmojiPicker } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPicker } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return <EmojiPicker data={emojiData} emojiSize={48} columns={7} />;
}
`;

function Demo() {
  return <EmojiPicker data={demoEmojiData} emojiSize={48} columns={7} />;
}

export const emojiSize: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
