import { useDeferredValue, useId, useMemo, useState, type KeyboardEvent } from 'react';
import {
  Combobox,
  Input,
  InputBase,
  SegmentedControl,
  Text,
  useVirtualizedCombobox,
  type InputBaseProps,
} from '@mantine/core';
import { useLocalStorage, useUncontrolled } from '@mantine/hooks';
import {
  buildGridModel,
  COLUMNS,
  DROPDOWN_WIDTH,
  moveByRows,
  PAGE_ROWS,
  type GridModel,
} from './grid-model';
import {
  getIconComponent,
  getIcons,
  searchIcons,
  type IconPickerValue,
  type IconStyle,
} from './icon-index';
import { IconByName } from './IconByName';
import { IconGrid } from './IconGrid';
import classes from './IconPicker.module.css';

export type { IconPickerValue, IconStyle } from './icon-index';

const RECENT_LIMIT = COLUMNS;

const STYLE_OPTIONS = [
  { value: 'outline', label: 'Outline' },
  { value: 'filled', label: 'Filled' },
];

export interface IconPickerProps extends Omit<
  InputBaseProps,
  'value' | 'defaultValue' | 'onChange'
> {
  value?: IconPickerValue | null;
  defaultValue?: IconPickerValue | null;
  onChange?: (value: IconPickerValue | null) => void;
  placeholder?: string;
  /** localStorage key of the recently picked icons */
  recentStorageKey?: string;
}

function isKnownIcon(item: IconPickerValue) {
  return getIconComponent(item.name, item.style) !== undefined;
}

function createModel(style: IconStyle, query: string, recent: IconPickerValue[]) {
  const entries = searchIcons(getIcons(style), query);
  return buildGridModel(entries, style, query.trim() === '' ? recent : []);
}

function findInGrid(model: GridModel, name: string | undefined) {
  if (name === undefined) {
    return -1;
  }
  return model.cells.findIndex((cell, index) => index >= model.gridStart && cell.name === name);
}

export function IconPicker({
  value,
  defaultValue,
  onChange,
  label = 'Project icon',
  placeholder = 'Pick an icon',
  recentStorageKey = 'icon-picker-recent',
  ...others
}: IconPickerProps) {
  const [current, setCurrent] = useUncontrolled<IconPickerValue | null>({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });
  const [storedRecent, setRecent] = useLocalStorage<IconPickerValue[]>({
    key: recentStorageKey,
    defaultValue: [],
    getInitialValueInEffect: false,
  });
  const recent = useMemo(() => storedRecent.filter(isKnownIcon), [storedRecent]);

  const [search, setSearch] = useState('');
  const [style, setStyle] = useState<IconStyle>('outline');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Filtering thousands of icons and rebuilding the grid waits until typing pauses
  const query = useDeferredValue(search);
  const model = useMemo(() => createModel(style, query, recent), [style, query, recent]);

  const uid = useId();
  const getOptionId = (index: number) => `${uid}-${model.cells[index]?.key}`;

  const pick = (index: number) => {
    const cell = model.cells[index];
    if (!cell) {
      return;
    }
    const next = { name: cell.name, style: cell.style };
    setCurrent(next);
    setRecent((items) =>
      [next, ...items.filter((item) => item.name !== next.name || item.style !== next.style)].slice(
        0,
        RECENT_LIMIT
      )
    );
    combobox.closeDropdown();
  };

  const combobox = useVirtualizedCombobox({
    totalOptionsCount: model.cells.length,
    getOptionId,
    selectedOptionIndex: highlightedIndex,
    setSelectedOptionIndex: setHighlightedIndex,
    onSelectedOptionSubmit: pick,
    onDropdownOpen: () => {
      const openStyle = current?.style ?? 'outline';
      const openModel = createModel(openStyle, '', recent);
      const selected = findInGrid(openModel, current?.name);
      setStyle(openStyle);
      setSearch('');
      setHighlightedIndex(selected !== -1 ? selected : openModel.cells.length > 0 ? 0 : -1);
      combobox.focusSearchInput();
    },
    onDropdownClose: () => {
      setHoveredIndex(-1);
      combobox.focusTarget();
    },
  });

  const handleSearchChange = (nextSearch: string) => {
    setSearch(nextSearch);
    setHoveredIndex(-1);
    setHighlightedIndex(0);
  };

  const handleStyleChange = (nextStyle: IconStyle) => {
    // Keep the highlighted icon when it exists in the other style
    const name = model.cells[highlightedIndex]?.name;
    const nextModel = createModel(nextStyle, query, recent);
    const index = findInGrid(nextModel, name);
    setStyle(nextStyle);
    setHoveredIndex(-1);
    setHighlightedIndex(index !== -1 ? index : nextModel.cells.length > 0 ? 0 : -1);
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const last = model.cells.length - 1;
    const from = highlightedIndex;
    const move = (getIndex: () => number) => {
      event.preventDefault();
      if (last >= 0) {
        setHighlightedIndex(from === -1 ? 0 : getIndex());
      }
    };

    switch (event.key) {
      case 'ArrowRight':
        move(() => Math.min(from + 1, last));
        break;
      case 'ArrowLeft':
        move(() => Math.max(from - 1, 0));
        break;
      case 'ArrowDown':
        move(() => moveByRows(model, from, 1));
        break;
      case 'ArrowUp':
        move(() => moveByRows(model, from, -1));
        break;
      case 'PageDown':
        move(() => moveByRows(model, from, PAGE_ROWS));
        break;
      case 'PageUp':
        move(() => moveByRows(model, from, -PAGE_ROWS));
        break;
      case 'Home':
        move(() => 0);
        break;
      case 'End':
        move(() => last);
        break;
      case 'Enter':
        if (!event.nativeEvent.isComposing) {
          event.preventDefault();
          combobox.clickSelectedOption();
        }
        break;
      case 'Escape':
        combobox.closeDropdown();
        break;
    }
  };

  const handleTargetKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      combobox.openDropdown('keyboard');
    }
    if ((event.key === 'Backspace' || event.key === 'Delete') && current) {
      event.preventDefault();
      setCurrent(null);
    }
  };

  const previewCell = model.cells[hoveredIndex !== -1 ? hoveredIndex : highlightedIndex];

  return (
    <Combobox
      store={combobox}
      width={DROPDOWN_WIDTH}
      position="bottom-start"
      classNames={{ dropdown: classes.dropdown }}
    >
      <Combobox.Target withAriaAttributes={false}>
        <InputBase
          component="button"
          type="button"
          pointer
          label={label}
          aria-haspopup="listbox"
          aria-expanded={combobox.dropdownOpened}
          leftSection={
            current ? (
              <IconByName name={current.name} iconStyle={current.style} size={18} stroke={1.5} />
            ) : undefined
          }
          rightSection={
            current ? (
              <Input.ClearButton aria-label="Clear icon" onClick={() => setCurrent(null)} />
            ) : (
              <Combobox.Chevron />
            )
          }
          rightSectionPointerEvents={current ? 'all' : 'none'}
          onClick={() => combobox.toggleDropdown()}
          onKeyDown={handleTargetKeyDown}
          {...others}
        >
          {current ? current.name : <Input.Placeholder>{placeholder}</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Search
          aria-label="Search icons"
          placeholder="Search icons"
          value={search}
          withKeyboardNavigation={false}
          onChange={(event) => handleSearchChange(event.currentTarget.value)}
          onKeyDown={handleSearchKeyDown}
        />

        <SegmentedControl
          fullWidth
          size="xs"
          className={classes.styleControl}
          aria-label="Icon style"
          data={STYLE_OPTIONS}
          value={style}
          onChange={(next) => handleStyleChange(next as IconStyle)}
          // Keep focus in the search field
          onMouseDown={(event) => event.preventDefault()}
        />

        <Combobox.Options aria-label="Icons">
          {model.cells.length === 0 ? (
            <Combobox.Empty className={classes.empty}>
              Nothing found for "{query.trim()}"
            </Combobox.Empty>
          ) : (
            <IconGrid
              key={`${style}:${query}`}
              opened={combobox.dropdownOpened}
              model={model}
              value={current}
              highlightedIndex={highlightedIndex}
              getOptionId={getOptionId}
              onPick={pick}
              onHover={setHoveredIndex}
            />
          )}
        </Combobox.Options>

        <Combobox.Footer className={classes.footer} role="status">
          {previewCell ? (
            <>
              <IconByName
                name={previewCell.name}
                iconStyle={previewCell.style}
                size={20}
                stroke={1.5}
              />
              <Text size="sm">{previewCell.name}</Text>
            </>
          ) : (
            <Text size="xs">Arrow keys to move, Enter to pick</Text>
          )}
        </Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
