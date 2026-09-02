import { useState } from 'react';
import data from '@emoji-mart/data';
import { ActionIcon, Button } from '@mantine/core';
import { emojiMartAdapter } from '../../adapters';
import { EmojiPickerPopover } from './EmojiPickerPopover';

export default { title: 'EmojiPickerPopover' };

const emojiData = emojiMartAdapter(data as any);

export function Usage() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerPopover
        data={emojiData}
        opened={opened}
        onOpenedChange={setOpened}
        onEmojiSelect={(emoji) => setSelected(emoji.emoji)}
      >
        <ActionIcon variant="default" size="lg" onClick={() => setOpened((o) => !o)}>
          {selected || '☺'}
        </ActionIcon>
      </EmojiPickerPopover>
    </div>
  );
}

export function CloseOnSelectFalse() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerPopover
        data={emojiData}
        opened={opened}
        onOpenedChange={setOpened}
        closeOnSelect={false}
      >
        <Button variant="default" onClick={() => setOpened((o) => !o)}>
          Pick (stays open)
        </Button>
      </EmojiPickerPopover>
    </div>
  );
}
