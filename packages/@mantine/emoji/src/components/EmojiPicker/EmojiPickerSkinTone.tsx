import { useState } from 'react';
import { Popover, UnstyledButton } from '@mantine/core';
import { useEmojiPickerContext } from './EmojiPicker.context';

const SKIN_TONE_EMOJIS = ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿'];

const SKIN_TONE_LABEL_KEYS = [
  'skinToneDefault',
  'skinToneLight',
  'skinToneMediumLight',
  'skinToneMedium',
  'skinToneMediumDark',
  'skinToneDark',
] as const;

export function EmojiPickerSkinTone() {
  const ctx = useEmojiPickerContext();
  const [opened, setOpened] = useState(false);

  return (
    <Popover opened={opened} onChange={setOpened} position="top" withArrow withinPortal={false}>
      <Popover.Target>
        <UnstyledButton
          {...ctx.getStyles('skinToneButton')}
          aria-label={ctx.labels.skinTone}
          title={ctx.labels.skinTone}
          onClick={() => setOpened((o) => !o)}
        >
          {SKIN_TONE_EMOJIS[ctx.skinTone]}
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown p={4}>
        <div {...ctx.getStyles('skinToneSelector')}>
          {SKIN_TONE_EMOJIS.map((emoji, index) => (
            <UnstyledButton
              key={index}
              {...ctx.getStyles('skinToneButton')}
              aria-label={ctx.labels[SKIN_TONE_LABEL_KEYS[index]]}
              title={ctx.labels[SKIN_TONE_LABEL_KEYS[index]]}
              aria-pressed={ctx.skinTone === index}
              data-active={ctx.skinTone === index || undefined}
              onClick={() => {
                ctx.onSkinToneChange(index);
                setOpened(false);
              }}
            >
              {emoji}
            </UnstyledButton>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
