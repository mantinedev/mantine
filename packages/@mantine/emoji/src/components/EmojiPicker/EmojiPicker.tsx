import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  InputProps,
  MantineSize,
  rem,
  ScrollAreaProps,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { useEmojiGridNavigation } from '../../hooks/use-emoji-grid-navigation';
import { useEmojiSearch } from '../../hooks/use-emoji-search';
import {
  DEFAULT_LABELS,
  EmojiPickerData,
  EmojiPickerEmoji,
  EmojiPickerLabels,
  FlattenedRowItem,
} from '../../types';
import { applySkinTone, filterSupportedEmojis, flattenEmojiData } from '../../utils';
import { EmojiPickerProvider } from './EmojiPicker.context';
import { EmojiPickerCategoryNav } from './EmojiPickerCategoryNav';
import { EmojiPickerGrid } from './EmojiPickerGrid';
import { EmojiPickerSearch } from './EmojiPickerSearch';
import { EmojiPickerSkinTone } from './EmojiPickerSkinTone';
import classes from './EmojiPicker.module.css';

export type EmojiPickerStylesNames =
  | 'root'
  | 'search'
  | 'searchInput'
  | 'categoryNav'
  | 'categoryNavButton'
  | 'content'
  | 'category'
  | 'categoryLabel'
  | 'grid'
  | 'emoji'
  | 'preview'
  | 'previewEmoji'
  | 'previewName'
  | 'skinToneSelector'
  | 'skinToneButton';

export type EmojiPickerCssVariables = {
  root:
    | '--ep-columns'
    | '--ep-emoji-size'
    | '--ep-emoji-fz'
    | '--ep-preview-py'
    | '--ep-skin-tone-size'
    | '--ep-skin-tone-fz';
};

export interface EmojiPickerProps
  extends BoxProps, StylesApiProps<EmojiPickerFactory>, ElementProps<'div'> {
  /** Emoji data object, use `emojiMartAdapter` or `emojibaseAdapter` to convert data */
  data: EmojiPickerData;

  /** Called when an emoji is selected */
  onEmojiSelect?: (emoji: EmojiPickerEmoji) => void;

  /** Number of emoji columns @default 9 */
  columns?: number;

  /** Custom emoji button size in px, overrides size-based value */
  emojiSize?: number;

  /** Determines whether the search input is displayed @default true */
  withSearch?: boolean;

  /** Determines whether the category navigation bar is displayed @default true */
  withCategoryNav?: boolean;

  /** Determines whether the emoji preview area is displayed @default true */
  withPreview?: boolean;

  /** Determines whether the skin tone selector is displayed @default true */
  withSkinToneSelector?: boolean;

  /** Controlled skin tone value (0–5) */
  skinTone?: number;

  /** Default skin tone value for uncontrolled state @default 0 */
  defaultSkinTone?: number;

  /** Called when skin tone changes */
  onSkinToneChange?: (skinTone: number) => void;

  /** Controlled search input value */
  searchValue?: string;

  /** Called when search value changes */
  onSearchChange?: (value: string) => void;

  /** Search input placeholder */
  searchPlaceholder?: string;

  /** Content displayed when search yields no results */
  emptySearchContent?: React.ReactNode;

  /** Determines whether unsupported emojis are filtered out @default false */
  withUnsupportedDetection?: boolean;

  /** Determines whether the search input is focused on mount @default false */
  autoFocus?: boolean;

  /** Props passed to the internal `ScrollArea` component */
  scrollAreaProps?: ScrollAreaProps;

  /** Override category labels by category id */
  categoryLabels?: Record<string, string>;

  /** Override UI labels (search placeholder, no results text, etc.) */
  labels?: EmojiPickerLabels;

  /** Controls size of all inner elements @default 'sm' */
  size?: MantineSize;

  /** Props passed to the search `Input` component */
  searchInputProps?: InputProps;
}

export type EmojiPickerFactory = Factory<{
  props: EmojiPickerProps;
  ref: HTMLDivElement;
  stylesNames: EmojiPickerStylesNames;
  vars: EmojiPickerCssVariables;
}>;

const defaultProps = {
  columns: 9,
  withSearch: true,
  withCategoryNav: true,
  withPreview: true,
  withSkinToneSelector: true,
  withUnsupportedDetection: false,
  autoFocus: false,
  size: 'sm',
} satisfies Partial<EmojiPickerProps>;

const EMOJI_SIZES: Record<
  string,
  {
    emojiSize: number;
    emojiFz: string;
    previewPy: string;
    skinToneSize: string;
    skinToneFz: string;
  }
> = {
  xs: {
    emojiSize: 28,
    emojiFz: rem(16),
    previewPy: rem(4),
    skinToneSize: rem(20),
    skinToneFz: rem(13),
  },
  sm: {
    emojiSize: 32,
    emojiFz: rem(18),
    previewPy: rem(5),
    skinToneSize: rem(22),
    skinToneFz: rem(14),
  },
  md: {
    emojiSize: 36,
    emojiFz: rem(22),
    previewPy: rem(7),
    skinToneSize: rem(24),
    skinToneFz: rem(16),
  },
  lg: {
    emojiSize: 42,
    emojiFz: rem(26),
    previewPy: rem(8),
    skinToneSize: rem(28),
    skinToneFz: rem(18),
  },
  xl: {
    emojiSize: 48,
    emojiFz: rem(30),
    previewPy: rem(10),
    skinToneSize: rem(32),
    skinToneFz: rem(20),
  },
};

const varsResolver = createVarsResolver<EmojiPickerFactory>((_, { columns, emojiSize, size }) => {
  const sizeValues = EMOJI_SIZES[size || 'sm'] || EMOJI_SIZES.sm;
  return {
    root: {
      '--ep-columns': columns?.toString() ?? '9',
      '--ep-emoji-size': emojiSize ? rem(emojiSize) : rem(sizeValues.emojiSize),
      '--ep-emoji-fz': emojiSize ? undefined : sizeValues.emojiFz,
      '--ep-preview-py': sizeValues.previewPy,
      '--ep-skin-tone-size': sizeValues.skinToneSize,
      '--ep-skin-tone-fz': sizeValues.skinToneFz,
    },
  };
});

export const EmojiPicker = factory<EmojiPickerFactory>((_props) => {
  const props = useProps('EmojiPicker', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    onEmojiSelect,
    columns,
    emojiSize,
    withSearch,
    withCategoryNav,
    withPreview,
    withSkinToneSelector,
    skinTone: skinToneProp,
    defaultSkinTone,
    onSkinToneChange,
    searchValue,
    onSearchChange,
    searchPlaceholder,
    emptySearchContent,
    withUnsupportedDetection,
    autoFocus,
    scrollAreaProps,
    categoryLabels,
    labels: labelsProp,
    size,
    searchInputProps,
    ...others
  } = props;

  const getStyles = useStyles<EmojiPickerFactory>({
    name: 'EmojiPicker',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const [skinTone, setSkinTone] = useUncontrolled({
    value: skinToneProp,
    defaultValue: defaultSkinTone ?? 0,
    onChange: onSkinToneChange,
  });

  const cols = Math.max(columns ?? 9, 1);

  const filteredData = useMemo(() => {
    if (!withUnsupportedDetection) {
      return data;
    }
    return {
      emojis: data.emojis,
      categories: data.categories.map((cat) => ({
        ...cat,
        emojis: filterSupportedEmojis(data.emojis, cat.emojis),
      })),
    };
  }, [data, withUnsupportedDetection]);

  const { query, setQuery, results, isSearching } = useEmojiSearch({
    data: filteredData,
    searchValue,
    onSearchChange,
  });

  const [hoveredEmoji, setHoveredEmoji] = useState<EmojiPickerEmoji | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollToIndexRef = useRef<((index: number) => void) | null>(null);

  const mergedLabels: Required<EmojiPickerLabels> = useMemo(
    () => ({ ...DEFAULT_LABELS, ...labelsProp }),
    [labelsProp]
  );

  const flattenedItems = useMemo(() => {
    if (isSearching) {
      const items: FlattenedRowItem[] = [];

      if (results.length > 0) {
        items.push({
          type: 'header',
          categoryId: 'search',
          label: mergedLabels.searchResults,
        });
        for (let i = 0; i < results.length; i += cols) {
          items.push({ type: 'row', emojis: results.slice(i, i + cols) });
        }
      }

      return items;
    }
    return flattenEmojiData(filteredData, cols, categoryLabels);
  }, [filteredData, cols, categoryLabels, isSearching, results, mergedLabels.searchResults]);

  const handleEmojiSelect = useCallback(
    (emoji: EmojiPickerEmoji) => {
      onEmojiSelect?.(emoji);
    },
    [onEmojiSelect]
  );

  const handleEscape = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleScrollToIndex = useCallback((rowIndex: number) => {
    scrollToIndexRef.current?.(rowIndex);
  }, []);

  const handleScrollToCategory = useCallback(
    (categoryId: string) => {
      const rowIndex = flattenedItems.findIndex(
        (item) => item.type === 'header' && item.categoryId === categoryId
      );
      if (rowIndex !== -1) {
        scrollToIndexRef.current?.(rowIndex);
      }
    },
    [flattenedItems]
  );

  const {
    focusedIndex,
    setFocusedIndex,
    focusedEmoji,
    handleKeyDown,
    keyboardActive,
    deactivateKeyboard,
  } = useEmojiGridNavigation({
    flattenedItems,
    columns: cols,
    skinTone,
    onEmojiSelect: handleEmojiSelect,
    onEscape: handleEscape,
    scrollToIndex: handleScrollToIndex,
  });

  const handleSearchKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter') {
        handleKeyDown(event as unknown as React.KeyboardEvent);
      }
    },
    [handleKeyDown]
  );

  const ctxValue = {
    getStyles,
    columns: cols,
    emojiSize,
    skinTone,
    size,
    onEmojiSelect: handleEmojiSelect,
    onSkinToneChange: setSkinTone,
    hoveredEmoji,
    setHoveredEmoji,
    focusedEmojiIndex: focusedIndex,
    setFocusedEmojiIndex: setFocusedIndex,
    keyboardActive,
    deactivateKeyboard,
    flattenedItems,
    labels: mergedLabels,
    unstyled,
    scrollToCategory: handleScrollToCategory,
  };

  const previewEmoji = hoveredEmoji ? applySkinTone(hoveredEmoji, skinTone) : focusedEmoji;

  return (
    <EmojiPickerProvider value={ctxValue}>
      <Box {...getStyles('root')} {...others}>
        {withSearch && (
          <EmojiPickerSearch
            query={query}
            onQueryChange={setQuery}
            placeholder={searchPlaceholder}
            autoFocus={autoFocus}
            inputRef={searchInputRef}
            onKeyDown={handleSearchKeyDown}
            searchInputProps={searchInputProps}
          />
        )}

        {withCategoryNav && !isSearching && (
          <EmojiPickerCategoryNav categories={filteredData.categories} />
        )}

        {flattenedItems.length > 0 ? (
          <EmojiPickerGrid
            items={flattenedItems}
            onKeyDown={handleKeyDown}
            focusedEmojiIndex={focusedIndex}
            emojiSize={emojiSize ?? (EMOJI_SIZES[size || 'sm'] || EMOJI_SIZES.sm).emojiSize}
            scrollToIndexRef={scrollToIndexRef}
            scrollAreaProps={scrollAreaProps}
          />
        ) : (
          <div
            {...getStyles('content')}
            style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {emptySearchContent || mergedLabels.noResults}
          </div>
        )}

        {(withPreview || withSkinToneSelector) && (
          <div {...getStyles('preview')} aria-live="polite">
            {withPreview && (
              <>
                <span {...getStyles('previewEmoji')}>
                  {previewEmoji ? previewEmoji.emoji : null}
                </span>
                <span {...getStyles('previewName')}>{previewEmoji ? previewEmoji.name : null}</span>
              </>
            )}
            {withSkinToneSelector && (
              <div style={{ marginLeft: 'auto' }}>
                <EmojiPickerSkinTone />
              </div>
            )}
          </div>
        )}
      </Box>
    </EmojiPickerProvider>
  );
});

EmojiPicker.classes = classes;
EmojiPicker.displayName = '@mantine/emoji/EmojiPicker';
