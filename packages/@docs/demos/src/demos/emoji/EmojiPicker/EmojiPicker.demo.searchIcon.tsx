import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { EmojiPicker } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPicker } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return (
    <EmojiPicker
      data={emojiData}
      searchInputProps={{ leftSection: <MagnifyingGlassIcon /> }}
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPicker data={demoEmojiData} searchInputProps={{ leftSection: <MagnifyingGlassIcon /> }} />
  );
}

export const searchIcon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
