import { EmojiPicker } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPicker } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return <EmojiPicker data={emojiData} withSearch={false} />;
}
`;

function Demo() {
  return <EmojiPicker data={demoEmojiData} withSearch={false} />;
}

export const noSearch: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
