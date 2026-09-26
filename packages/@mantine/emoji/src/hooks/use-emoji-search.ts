import { useMemo } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { EmojiPickerData, EmojiPickerEmoji } from '../types';
import { searchEmojis } from '../utils';

interface UseEmojiSearchInput {
  data: EmojiPickerData;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

interface UseEmojiSearchResult {
  query: string;
  setQuery: (value: string) => void;
  results: EmojiPickerEmoji[];
  isSearching: boolean;
}

export function useEmojiSearch({
  data,
  searchValue,
  onSearchChange,
}: UseEmojiSearchInput): UseEmojiSearchResult {
  const [query, setQuery] = useUncontrolled({
    value: searchValue,
    defaultValue: '',
    onChange: onSearchChange,
  });

  const results = useMemo(() => searchEmojis(data, query), [data, query]);
  const isSearching = query.trim().length > 0;

  return { query, setQuery, results, isSearching };
}
