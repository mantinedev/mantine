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
      withPreview={false}
      withSkinToneSelector={false}
    />
  );
}
`;

function Demo() {
  return <EmojiPicker data={demoEmojiData} withPreview={false} withSkinToneSelector={false} />;
}

export const noPreview: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
