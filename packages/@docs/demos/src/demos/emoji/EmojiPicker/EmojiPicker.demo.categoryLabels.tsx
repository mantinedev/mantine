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
      categoryLabels={{
        people: 'Лица и люди',
        nature: 'Животные и природа',
        foods: 'Еда и напитки',
        activity: 'Активность',
        places: 'Путешествия',
        objects: 'Объекты',
        symbols: 'Символы',
        flags: 'Флаги',
      }}
      labels={{
        search: 'Поиск',
        noResults: 'Ничего не найдено',
        searchResults: 'Результаты поиска',
      }}
    />
  );
}
`;

function Demo() {
  return (
    <EmojiPicker
      data={demoEmojiData}
      categoryLabels={{
        people: 'Лица и люди',
        nature: 'Животные и природа',
        foods: 'Еда и напитки',
        activity: 'Активность',
        places: 'Путешествия',
        objects: 'Объекты',
        symbols: 'Символы',
        flags: 'Флаги',
      }}
      labels={{
        search: 'Поиск',
        noResults: 'Ничего не найдено',
        searchResults: 'Результаты поиска',
      }}
    />
  );
}

export const categoryLabels: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
