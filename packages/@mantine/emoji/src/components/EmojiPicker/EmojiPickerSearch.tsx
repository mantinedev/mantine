import { CloseButton, Input, InputProps } from '@mantine/core';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiPickerSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  searchInputProps?: InputProps;
}

export function EmojiPickerSearch({
  query,
  onQueryChange,
  placeholder,
  autoFocus,
  inputRef,
  onKeyDown,
  searchInputProps,
}: EmojiPickerSearchProps) {
  const ctx = useEmojiPickerContext();

  return (
    <div {...ctx.getStyles('search')}>
      <Input
        {...ctx.getStyles('searchInput')}
        ref={inputRef}
        size={ctx.size}
        value={query}
        onChange={(event) => onQueryChange(event.currentTarget.value)}
        placeholder={placeholder || ctx.labels.search}
        role="searchbox"
        aria-label={ctx.labels.search}
        autoFocus={autoFocus}
        onKeyDown={onKeyDown}
        rightSection={
          query ? (
            <CloseButton size="sm" onClick={() => onQueryChange('')} aria-label="Clear search" />
          ) : undefined
        }
        {...searchInputProps}
      />
    </div>
  );
}
