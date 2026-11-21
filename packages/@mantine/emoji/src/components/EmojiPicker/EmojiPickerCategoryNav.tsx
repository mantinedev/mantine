import { memo, useState } from 'react';
import { createScopedKeydownHandler, UnstyledButton, useDirection } from '@mantine/core';
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
  const { dir } = useDirection();
  const [tabStopId, setTabStopId] = useState<string | null>(null);
  const tabStopIndex = Math.max(
    categories.findIndex((category) => category.id === tabStopId),
    0
  );

  const handleKeyDown = createScopedKeydownHandler({
    siblingSelector: '[data-category-nav-button]',
    parentSelector: '[data-category-nav]',
    orientation: 'horizontal',
    loop: true,
    dir,
  });

  return (
    <div {...ctx.getStyles('categoryNav')} data-category-nav>
      {categories.map((category, index) => (
        <UnstyledButton
          key={category.id}
          {...ctx.getStyles('categoryNavButton')}
          aria-label={category.label}
          title={category.label}
          tabIndex={index === tabStopIndex ? 0 : -1}
          data-category-nav-button
          onFocus={() => setTabStopId(category.id)}
          onKeyDown={handleKeyDown}
          onClick={() => onCategoryClick(category.id)}
        >
          {getCanonicalCategoryIcon(category.id) || '📁'}
        </UnstyledButton>
      ))}
    </div>
  );
});
