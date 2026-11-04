import { useState } from 'react';
import { Popover, UnstyledButton } from '@mantine/core';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiPickerSkinToneProps {
  skinTone: number;
  onSkinToneChange: (skinTone: number) => void;
}

const SKIN_TONE_EMOJIS = ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿'];

const SKIN_TONE_LABEL_KEYS = [
  'skinToneDefault',
  'skinToneLight',
  'skinToneMediumLight',
  'skinToneMedium',
  'skinToneMediumDark',
  'skinToneDark',
] as const;

export function EmojiPickerSkinTone({ skinTone, onSkinToneChange }: EmojiPickerSkinToneProps) {
  const ctx = useEmojiPickerContext();
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position="top"
      withArrow
      withinPortal={false}
      trapFocus
      returnFocus
    >
      <Popover.Target>
        <UnstyledButton
          {...ctx.getStyles('skinToneButton')}
          aria-label={ctx.labels.skinTone}
          title={ctx.labels.skinTone}
          onClick={() => setOpened((o) => !o)}
        >
          {SKIN_TONE_EMOJIS[skinTone]}
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown {...ctx.getStyles('skinToneDropdown')}>
        <div {...ctx.getStyles('skinToneSelector')}>
          {SKIN_TONE_EMOJIS.map((emoji, index) => (
            <UnstyledButton
              key={index}
              {...ctx.getStyles('skinToneButton')}
              aria-label={ctx.labels[SKIN_TONE_LABEL_KEYS[index]]}
              title={ctx.labels[SKIN_TONE_LABEL_KEYS[index]]}
              aria-pressed={skinTone === index}
              data-active={skinTone === index || undefined}
              data-autofocus={skinTone === index || undefined}
              onClick={() => {
                onSkinToneChange(index);
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
