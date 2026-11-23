import { useState } from 'react';
import data from '@emoji-mart/data';
import { emojiMartAdapter } from '../../adapters';
import { EmojiPicker } from './EmojiPicker';

export default { title: 'EmojiPicker' };

const emojiData = emojiMartAdapter(data);

export function Usage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker
        data={emojiData}
        onEmojiSelect={(emoji) => setSelected(`${emoji.emoji} ${emoji.name}`)}
      />
      {selected && <div style={{ marginTop: 16 }}>Selected: {selected}</div>}
    </div>
  );
}

export function WithoutSearch() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} withSearch={false} />
    </div>
  );
}

export function WithoutCategoryNav() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} withCategoryNav={false} />
    </div>
  );
}

export function WithoutPreview() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} withPreview={false} withSkinToneSelector={false} />
    </div>
  );
}

export function CustomColumns() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} columns={6} />
    </div>
  );
}

export function CustomEmojiSize() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} emojiSize={48} />
    </div>
  );
}

export function ControlledSkinTone() {
  const [skinTone, setSkinTone] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 8 }}>Current skin tone: {skinTone}</div>
      <EmojiPicker data={emojiData} skinTone={skinTone} onSkinToneChange={setSkinTone} />
    </div>
  );
}

export function CustomScrollAreaHeight() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} scrollAreaProps={{ style: { height: 500 } }} />
    </div>
  );
}

export function CustomLabels() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker
        data={emojiData}
        categoryLabels={{ people: 'Лица и люди', nature: 'Животные' }}
        labels={{ search: 'Поиск', noResults: 'Ничего не найдено' }}
      />
    </div>
  );
}

export function SizeXs() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} size="xs" />
    </div>
  );
}

export function SizeSm() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} size="sm" />
    </div>
  );
}

export function SizeLg() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} size="lg" />
    </div>
  );
}

export function SizeXl() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} size="xl" />
    </div>
  );
}

export function NoSearchNoFavorites() {
  const dataWithoutFrequent = {
    ...emojiData,
    categories: emojiData.categories.filter((c) => c.id !== 'frequent'),
  };

  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={dataWithoutFrequent} withSearch={false} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPicker data={emojiData} unstyled />
    </div>
  );
}
