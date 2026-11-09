import { EmojiPicker } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPicker } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return <EmojiPicker data={emojiData}{{props}} />;
}
`;

function Wrapper(props: any) {
  return <EmojiPicker data={demoEmojiData} {...props} />;
}

export const size: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' }],
};
