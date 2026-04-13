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
  const [opened, setOpened] = useState(false);
  const [emoji, setEmoji] = useState<string | null>(null);

  return (
    <EmojiPickerPopover
      data={emojiData}
      opened={opened}
      onOpenedChange={setOpened}
      onEmojiSelect={(e) => setEmoji(e.emoji)}
      columns={6}
      withPreview={false}
      withCategoryNav={false}
    >
      <ActionIcon variant="default" size="lg" onClick={() => setOpened((o) => !o)}>
        {emoji || '☺'}
      </ActionIcon>
    </EmojiPickerPopover>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const [emoji, setEmoji] = useState<string | null>(null);

  return (
    <EmojiPickerPopover
      data={demoEmojiData}
      opened={opened}
      onOpenedChange={setOpened}
      onEmojiSelect={(e) => setEmoji(e.emoji)}
      columns={6}
      withPreview={false}
      withCategoryNav={false}
    >
      <ActionIcon variant="default" size="lg" onClick={() => setOpened((o) => !o)}>
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
