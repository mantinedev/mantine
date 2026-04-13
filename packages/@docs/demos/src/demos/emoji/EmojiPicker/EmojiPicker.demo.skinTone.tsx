import { useState } from 'react';
import { Text } from '@mantine/core';
import { EmojiPicker } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import { useState } from 'react';
import { Text } from '@mantine/core';
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPicker } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  const [skinTone, setSkinTone] = useState(0);

  return (
    <>
      <EmojiPicker
        data={emojiData}
        skinTone={skinTone}
        onSkinToneChange={setSkinTone}
      />
      <Text mt="md">Current skin tone: {skinTone}</Text>
    </>
  );
}
`;

function Demo() {
  const [skinTone, setSkinTone] = useState(0);

  return (
    <>
      <EmojiPicker data={demoEmojiData} skinTone={skinTone} onSkinToneChange={setSkinTone} />
      <Text mt="md">Current skin tone: {skinTone}</Text>
    </>
  );
}

export const skinTone: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
