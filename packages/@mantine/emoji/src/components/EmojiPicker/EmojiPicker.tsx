import { useCallback, useId, useMemo, useRef, useState } from 'react';
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
import {
  applySkinTone,
  filterSupportedEmojis,
  flattenEmojiData,
  getEmojiItemIndex,
} from '../../utils';
import { EmojiPickerProvider } from './EmojiPicker.context';
import { EmojiPickerCategoryNav, EmojiPickerNavCategory } from './EmojiPickerCategoryNav';
import { EmojiPickerGrid, EmojiPickerScrollToItem } from './EmojiPickerGrid';
import { EmojiPickerPreview } from './EmojiPickerPreview';
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
  | 'empty'
  | 'categoryLabel'
  | 'grid'
  | 'emoji'
  | 'preview'
  | 'previewEmoji'
  | 'previewName'
  | 'skinToneSelector'
  | 'skinToneDropdown'
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
  /** Emoji data object, use `emojiMartAdapter` or `emojibaseAdapter` to convert data @category appearance */
  data: EmojiPickerData;

  /** Called when an emoji is selected @category behavior */
  onEmojiSelect?: (emoji: EmojiPickerEmoji) => void;

  /** Number of emoji columns @default 9 @category appearance */
  columns?: number;

  /** Custom emoji button size in px, overrides size-based value @category appearance */
  emojiSize?: number;

  /** Determines whether the search input is displayed @default true @category appearance */
  withSearch?: boolean;

  /** Determines whether the category navigation bar is displayed @default true @category appearance */
  withCategoryNav?: boolean;

  /** Determines whether the emoji preview area is displayed @default true @category appearance */
  withPreview?: boolean;

  /** Determines whether the skin tone selector is displayed @default true @category appearance */
  withSkinToneSelector?: boolean;

  /** Controlled skin tone value (0–5) @category state */
  skinTone?: number;

  /** Default skin tone value for uncontrolled state @default 0 @category state */
  defaultSkinTone?: number;

  /** Called when skin tone changes @category state */
  onSkinToneChange?: (skinTone: number) => void;

  /** Controlled search input value @category state */
  searchValue?: string;

  /** Called when search value changes @category state */
  onSearchChange?: (value: string) => void;

  /** Search input placeholder @category appearance */
  searchPlaceholder?: string;

  /** Content displayed when search yields no results @category appearance */
  emptySearchContent?: React.ReactNode;

  /** Determines whether unsupported emojis are filtered out @default false @category appearance */
  withUnsupportedDetection?: boolean;

  /** Determines whether the search input is focused on mount @default false @category behavior */
  autoFocus?: boolean;

  /** Props passed to the internal `ScrollArea` component */
  scrollAreaProps?: ScrollAreaProps;

  /** Override category labels by category id @category appearance */
  categoryLabels?: Record<string, string>;

  /** Override UI labels (search placeholder, no results text, etc.) @category appearance */
  labels?: EmojiPickerLabels;

  /** Controls size of all inner elements @default 'sm' @category appearance */
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

const EMOJI_FONT_SIZE_RATIO = 0.6;

function getSizeValues(size: MantineSize | undefined) {
  return EMOJI_SIZES[size || 'sm'] || EMOJI_SIZES.sm;
}

const varsResolver = createVarsResolver<EmojiPickerFactory>((_, { columns, emojiSize, size }) => {
  const sizeValues = getSizeValues(size);
  return {
    root: {
      '--ep-columns': columns?.toString() ?? '9',
      '--ep-emoji-size': emojiSize ? rem(emojiSize) : rem(sizeValues.emojiSize),
      '--ep-emoji-fz': emojiSize
        ? rem(Math.round(emojiSize * EMOJI_FONT_SIZE_RATIO))
        : sizeValues.emojiFz,
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
    stable: true,
  });

  const [skinTone, setSkinTone] = useUncontrolled({
    value: skinToneProp,
    defaultValue: defaultSkinTone ?? 0,
    onChange: onSkinToneChange,
  });

  const cols = Math.max(columns ?? 9, 1);
  const baseId = useId();
  const idPrefix = `${baseId}-emoji`;
  const gridId = `${baseId}-grid`;
  const [activeDescendant, setActiveDescendant] = useState<string | undefined>(undefined);

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

  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollToItemRef = useRef<EmojiPickerScrollToItem | null>(null);

  const mergedLabels: Required<EmojiPickerLabels> = useMemo(
    () => ({ ...DEFAULT_LABELS, ...labelsProp }),
    [labelsProp]
  );

  const ctxValue = useMemo(
    () => ({ getStyles, labels: mergedLabels, size }),
    [getStyles, mergedLabels, size]
  );

  const flattenedItems = useMemo<FlattenedRowItem[]>(() => {
    if (isSearching) {
      return flattenEmojiData(
        {
          emojis: filteredData.emojis,
          categories: [
            {
              id: 'search',
              label: mergedLabels.searchResults,
              emojis: results.map((emoji) => emoji.id),
            },
          ],
        },
        cols
      );
    }
    return flattenEmojiData(filteredData, cols, categoryLabels);
  }, [filteredData, cols, categoryLabels, isSearching, results, mergedLabels.searchResults]);

  const navCategories = useMemo(
    () =>
      flattenedItems.reduce<EmojiPickerNavCategory[]>((acc, item) => {
        if (item.type === 'header') {
          acc.push({ id: item.categoryId, label: item.label });
        }
        return acc;
      }, []),
    [flattenedItems]
  );

  const scrollToItem = useCallback((itemIndex: number) => {
    scrollToItemRef.current?.(itemIndex, 'auto');
  }, []);

  const handleEmojiSelect = useCallback(
    (emoji: EmojiPickerEmoji) => {
      onEmojiSelect?.(emoji);
    },
    [onEmojiSelect]
  );

  const {
    model,
    activeIndex,
    activeEmoji,
    keyboardActive,
    handleKeyDown,
    setPointerIndex,
    setAnchorIndex,
  } = useEmojiGridNavigation({
    items: flattenedItems,
    resetKey: query,
    skinTone,
    onEmojiSelect: handleEmojiSelect,
    scrollToItem,
  });

  const handleGridKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        const focusStayedInGrid = event.currentTarget.contains(document.activeElement);
        if (withSearch && focusStayedInGrid && searchInputRef.current) {
          event.preventDefault();
          searchInputRef.current.focus();
        }
        return;
      }
      handleKeyDown(event);
    },
    [handleKeyDown, withSearch]
  );

  const handleSearchKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.nativeEvent.isComposing) {
        return;
      }
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter') {
        handleKeyDown(event);
      }
    },
    [handleKeyDown]
  );

  const handleEmojiClick = useCallback(
    (index: number) => {
      const emoji = model.emojis[index];
      if (emoji) {
        setPointerIndex(index);
        handleEmojiSelect(applySkinTone(emoji, skinTone));
      }
    },
    [model, setPointerIndex, handleEmojiSelect, skinTone]
  );

  const handleCategoryClick = useCallback(
    (categoryId: string) => {
      const itemIndex = flattenedItems.findIndex(
        (item) => item.type === 'header' && item.categoryId === categoryId
      );
      if (itemIndex !== -1) {
        setAnchorIndex(model.itemOffsets[itemIndex]);
        scrollToItemRef.current?.(itemIndex, 'start');
      }
    },
    [flattenedItems, model, setAnchorIndex]
  );

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
            controls={flattenedItems.length > 0 ? gridId : undefined}
            activeDescendant={activeDescendant}
            searchInputProps={searchInputProps}
          />
        )}

        {withCategoryNav && !isSearching && (
          <EmojiPickerCategoryNav
            categories={navCategories}
            onCategoryClick={handleCategoryClick}
          />
        )}

        <EmojiPickerGrid
          items={flattenedItems}
          itemOffsets={model.itemOffsets}
          columns={cols}
          skinTone={skinTone}
          focusedIndex={keyboardActive ? activeIndex : -1}
          focusedItemIndex={keyboardActive ? getEmojiItemIndex(model, activeIndex) : -1}
          idPrefix={idPrefix}
          gridId={gridId}
          onActiveDescendantChange={setActiveDescendant}
          emojiSize={emojiSize ?? getSizeValues(size).emojiSize}
          emptyContent={emptySearchContent || mergedLabels.noResults}
          onKeyDown={handleGridKeyDown}
          onPointerIndex={setPointerIndex}
          onEmojiClick={handleEmojiClick}
          scrollToItemRef={scrollToItemRef}
          scrollAreaProps={scrollAreaProps}
        />

        {(withPreview || withSkinToneSelector) && (
          <EmojiPickerPreview emoji={activeEmoji} skinTone={skinTone} withPreview={!!withPreview}>
            {withSkinToneSelector && (
              <EmojiPickerSkinTone skinTone={skinTone} onSkinToneChange={setSkinTone} />
            )}
          </EmojiPickerPreview>
        )}
      </Box>
    </EmojiPickerProvider>
  );
});

EmojiPicker.classes = classes;
EmojiPicker.displayName = '@mantine/emoji/EmojiPicker';
