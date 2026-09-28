import { useRef } from 'react';
import { CloseButton, Input, InputProps, InputWrapperContext } from '@mantine/core';
import { useMergedRef } from '@mantine/hooks';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiPickerSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  controls?: string;
  activeDescendant?: string;
  searchInputProps?: InputProps;
}

const RESET_WRAPPER_CONTEXT = {
  offsetTop: false,
  offsetBottom: false,
  describedBy: undefined,
  inputId: undefined,
  labelId: undefined,
  getStyles: null,
};

export function EmojiPickerSearch({
  query,
  onQueryChange,
  placeholder,
  autoFocus,
  inputRef,
  onKeyDown,
  controls,
  activeDescendant,
  searchInputProps,
}: EmojiPickerSearchProps) {
  const ctx = useEmojiPickerContext();
  const localRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(localRef, inputRef);

  const handleClear = () => {
    onQueryChange('');
    localRef.current?.focus();
  };

  return (
    <div {...ctx.getStyles('search')}>
      <InputWrapperContext value={RESET_WRAPPER_CONTEXT}>
        <Input
          {...ctx.getStyles('searchInput')}
          ref={mergedRef}
          size={ctx.size}
          value={query}
          onChange={(event) => onQueryChange(event.currentTarget.value)}
          placeholder={placeholder || ctx.labels.search}
          role="searchbox"
          aria-label={ctx.labels.search}
          aria-controls={controls}
          aria-activedescendant={activeDescendant}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          rightSectionPointerEvents="all"
          rightSection={
            query ? (
              <CloseButton
                size="sm"
                onMouseDown={(event) => event.preventDefault()}
                onClick={handleClear}
                aria-label={ctx.labels.clearSearch}
              />
            ) : undefined
          }
          {...searchInputProps}
        />
      </InputWrapperContext>
    </div>
  );
}
