import { EmojiPickerInput } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';
import { demoEmojiData } from '../_demo-data';

const code = `
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPickerInput } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return <EmojiPickerInput data={emojiData}{{props}} placeholder="Select emoji" />;
}
`;

function Wrapper(props: any) {
  return <EmojiPickerInput data={demoEmojiData} {...props} placeholder="Select emoji" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
