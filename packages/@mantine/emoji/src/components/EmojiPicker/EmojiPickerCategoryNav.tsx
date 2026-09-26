import { UnstyledButton } from '@mantine/core';
import { EmojiPickerCategory } from '../../types';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiPickerCategoryNavProps {
  categories: EmojiPickerCategory[];
}

const CATEGORY_ICONS: Record<string, string> = {
  frequent: '🕐',
  people: '😀',
  nature: '🐻',
  foods: '🍔',
  activity: '⚽',
  places: '🚗',
  objects: '💡',
  symbols: '♻️',
  flags: '🏳️',
};

export function EmojiPickerCategoryNav({ categories }: EmojiPickerCategoryNavProps) {
  const ctx = useEmojiPickerContext();

  return (
    <div {...ctx.getStyles('categoryNav')}>
      {categories.map((category) => {
        const icon = CATEGORY_ICONS[category.id] || '📁';
        return (
          <UnstyledButton
            key={category.id}
            {...ctx.getStyles('categoryNavButton')}
            aria-label={category.label}
            title={category.label}
            onClick={() => {
              ctx.scrollToCategory(category.id);
            }}
          >
            {icon}
          </UnstyledButton>
        );
      })}
    </div>
  );
}
