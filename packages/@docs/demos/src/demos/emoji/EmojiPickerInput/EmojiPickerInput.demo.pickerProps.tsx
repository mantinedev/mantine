import { EmojiPickerInput } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPickerInput } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  return (
    <EmojiPickerInput
      data={emojiData}
      label="Custom picker"
      placeholder="Select emoji"
      pickerProps={{
        columns: 6,
        withPreview: false,
        withCategoryNav: false,
      }}
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPickerInput
      data={demoEmojiData}
      label="Custom picker"
      placeholder="Select emoji"
      pickerProps={{
        columns: 6,
        withPreview: false,
        withCategoryNav: false,
      }}
    />
  );
}

export const pickerProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
