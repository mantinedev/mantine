'use client';

import { useEffect, useId, useMemo, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Combobox,
  InputBase,
  ScrollArea,
  SegmentedControl,
  Text,
  useVirtualizedCombobox,
} from '@mantine/core';
import {
  getFontStack,
  type GoogleFont,
  loadGoogleFonts,
  SYSTEM_FONT,
  useStylesheets,
} from '@/preview';
import classes from './FontPicker.module.css';

const ITEM_HEIGHT = 36;

type FontFilter = 'all' | 'sans' | 'serif' | 'mono' | 'other';

const FILTERS: { value: FontFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'sans', label: 'Sans' },
  { value: 'serif', label: 'Serif' },
  { value: 'mono', label: 'Mono' },
  { value: 'other', label: 'Other' },
];

function matchesFilter(option: FontOption, filter: FontFilter) {
  if (filter === 'all' || option.value === PRESET_OPTION) {
    return true;
  }

  if (!option.font) {
    return filter === 'sans';
  }

  switch (filter) {
    case 'sans':
      return option.font.category === 'sans-serif';
    case 'serif':
      return option.font.category === 'serif';
    case 'mono':
      return option.font.category === 'monospace';
    case 'other':
      return option.font.category === 'display' || option.font.category === 'handwriting';
  }
}
const PRESET_OPTION = '';

interface FontOption {
  value: string;
  label: string;
  font?: GoogleFont;
}

function getPreviewWeight(weights: string) {
  if (weights.includes('..')) {
    const [min, max] = weights.split('..').map(Number);
    return min <= 400 && max >= 400 ? 400 : min;
  }

  const list = weights.split(';').map(Number);
  return list.includes(400) ? 400 : list[0];
}

function getPreviewUrl(font: GoogleFont) {
  const family = encodeURIComponent(font.family);
  const text = encodeURIComponent(font.family);
  return `https://fonts.googleapis.com/css2?family=${family}:wght@${getPreviewWeight(font.weights)}&text=${text}&display=swap`;
}

function getOptionFamily(option: FontOption | undefined) {
  if (!option || (option.value === PRESET_OPTION && !option.font)) {
    return undefined;
  }

  return getFontStack(option.font?.family ?? option.value, option.font);
}

function useFontCatalog() {
  const [fonts, setFonts] = useState<GoogleFont[]>([]);

  useEffect(() => {
    let active = true;
    loadGoogleFonts().then((catalog) => active && setFonts(catalog));
    return () => {
      active = false;
    };
  }, []);

  return fonts;
}

interface FontPickerProps {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  defaultFamily: string;
}

export function FontPicker({ label, value, onChange, defaultFamily }: FontPickerProps) {
  const id = useId();
  const fonts = useFontCatalog();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FontFilter>('all');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const options = useMemo<FontOption[]>(
    () => [
      {
        value: PRESET_OPTION,
        label: defaultFamily,
        font: fonts.find((font) => font.family === defaultFamily),
      },
      ...(defaultFamily === SYSTEM_FONT ? [] : [{ value: SYSTEM_FONT, label: SYSTEM_FONT }]),
      ...fonts
        .filter((font) => font.family !== defaultFamily)
        .map((font) => ({ value: font.family, label: font.family, font })),
    ],
    [fonts, defaultFamily]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return options.filter(
      (option) =>
        matchesFilter(option, filter) && (!query || option.label.toLowerCase().includes(query))
    );
  }, [filter, options, search]);

  const currentValue = value ?? PRESET_OPTION;
  const activeIndex = filtered.findIndex((option) => option.value === currentValue);
  const currentOption = options.find((option) => option.value === currentValue);

  const virtualizer = useVirtualizer({
    count: filtered.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 6,
  });

  const submit = (index: number) => {
    const option = filtered[index];
    if (option) {
      onChange(option.value === PRESET_OPTION ? null : option.value);
    }
    store.closeDropdown();
  };

  const store = useVirtualizedCombobox({
    totalOptionsCount: filtered.length,
    getOptionId: (index) => `${id}-${index}`,
    selectedOptionIndex,
    activeOptionIndex: activeIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onDropdownOpen: () => {
      const index = Math.max(activeIndex, 0);
      setSelectedOptionIndex(index);
      requestAnimationFrame(() => virtualizer.scrollToIndex(index, { align: 'center' }));
    },
    onDropdownClose: () => {
      setSearch('');
      setSelectedOptionIndex(-1);
      store.focusTarget();
    },
    onSelectedOptionSubmit: submit,
  });

  const opened = store.dropdownOpened;

  useEffect(() => {
    if (!opened) {
      return undefined;
    }

    const frame = requestAnimationFrame(() => store.searchRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [opened, store.searchRef]);

  const items = virtualizer.getVirtualItems();

  useStylesheets([
    currentOption?.font && getPreviewUrl(currentOption.font),
    ...(opened
      ? items.map((item) => filtered[item.index]?.font).map((font) => font && getPreviewUrl(font))
      : []),
  ]);

  return (
    <>
      <Combobox store={store} resetSelectionOnOptionHover={false} withinPortal={false}>
        <Combobox.Target targetType="button">
          <InputBase
            label={label}
            component="button"
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => store.toggleDropdown()}
          >
            <span style={{ fontFamily: getOptionFamily(currentOption) }}>
              {currentOption?.label ?? value ?? defaultFamily}
            </span>
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              setSelectedOptionIndex(0);
              virtualizer.scrollToIndex(0);
            }}
            placeholder="Search fonts"
            aria-label={`Search ${label.toLowerCase()}`}
          />
          <div className={classes.filters}>
            <SegmentedControl
              fullWidth
              size="xs"
              aria-label="Font type"
              value={filter}
              onChange={(value) => {
                setFilter(value as FontFilter);
                setSelectedOptionIndex(0);
                virtualizer.scrollToIndex(0);
                store.searchRef.current?.focus();
              }}
              data={FILTERS}
            />
          </div>
          <Combobox.Options>
            {filtered.length === 0 ? (
              <Combobox.Empty>No fonts found</Combobox.Empty>
            ) : (
              <ScrollArea.Autosize
                mah={320}
                type="scroll"
                scrollbarSize={6}
                viewportRef={setScrollParent}
                onMouseDown={(event) => event.preventDefault()}
              >
                <div className={classes.list} style={{ height: virtualizer.getTotalSize() }}>
                  {items.map((item) => {
                    const option = filtered[item.index];
                    return (
                      <Combobox.Option
                        key={option.value || 'preset'}
                        id={`${id}-${item.index}`}
                        value={option.value}
                        active={item.index === activeIndex}
                        selected={item.index === selectedOptionIndex}
                        onClick={() => submit(item.index)}
                        className={classes.option}
                        style={{ height: item.size, transform: `translateY(${item.start}px)` }}
                      >
                        <span
                          className={classes.family}
                          style={{ fontFamily: getOptionFamily(option) }}
                        >
                          {option.label}
                        </span>
                        {option.font && (
                          <Text size="xs" className={classes.category}>
                            {option.font.category}
                          </Text>
                        )}
                      </Combobox.Option>
                    );
                  })}
                </div>
              </ScrollArea.Autosize>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
