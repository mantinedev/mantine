import { memo } from 'react';
import { UnstyledButton } from '@mantine/core';
import { getCanonicalCategoryIcon } from '../../categories';
import { useEmojiPickerContext } from './EmojiPicker.context';

export interface EmojiPickerNavCategory {
  id: string;
  label: string;
}

interface EmojiPickerCategoryNavProps {
  categories: EmojiPickerNavCategory[];
  onCategoryClick: (categoryId: string) => void;
}

export const EmojiPickerCategoryNav = memo(function EmojiPickerCategoryNav({
  categories,
  onCategoryClick,
}: EmojiPickerCategoryNavProps) {
  const ctx = useEmojiPickerContext();

  return (
    <div {...ctx.getStyles('categoryNav')}>
      {categories.map((category) => (
        <UnstyledButton
          key={category.id}
          {...ctx.getStyles('categoryNavButton')}
          aria-label={category.label}
          title={category.label}
          onClick={() => onCategoryClick(category.id)}
        >
          {getCanonicalCategoryIcon(category.id) || '📁'}
        </UnstyledButton>
      ))}
    </div>
  );
});
