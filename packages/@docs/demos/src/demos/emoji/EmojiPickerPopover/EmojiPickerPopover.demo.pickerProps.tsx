import { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { EmojiPickerPopover } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPickerPopover } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  const [emoji, setEmoji] = useState<string | null>(null);

  return (
    <EmojiPickerPopover
      data={emojiData}
      onEmojiSelect={(e) => setEmoji(e.emoji)}
      columns={6}
      withPreview={false}
      withCategoryNav={false}
    >
      <ActionIcon variant="default" size="lg">
        {emoji || '☺'}
      </ActionIcon>
    </EmojiPickerPopover>
  );
}
`;

function Demo() {
  const [emoji, setEmoji] = useState<string | null>(null);

  return (
    <EmojiPickerPopover
      data={demoEmojiData}
      onEmojiSelect={(e) => setEmoji(e.emoji)}
      columns={6}
      withPreview={false}
      withCategoryNav={false}
    >
      <ActionIcon variant="default" size="lg">
        {emoji || '☺'}
      </ActionIcon>
    </EmojiPickerPopover>
  );
}

export const pickerProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
