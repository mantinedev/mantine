import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Combobox,
  FocusTrap,
  Input,
  InputBase,
  Loader,
  ScrollArea,
  SegmentedControl,
  Text,
  TextInput,
  useCombobox,
} from '@mantine/core';
import { useId, useLocalStorage, useUncontrolled } from '@mantine/hooks';
import {
  getIconLabel,
  getLoadedIconSet,
  loadIconSet,
  searchIcons,
  type IconEntry,
  type IconSet,
  type IconStyle,
  type IconValue,
} from './icon-data';
import { buildIconGrid, moveInGrid, type GridMove, type IconGrid } from './icon-grid';
import classes from './IconPicker.module.css';

const COLUMNS = 8;
const ROW_HEIGHT = 44;
const HEADER_HEIGHT = 28;
const GRID_MAX_HEIGHT = ROW_HEIGHT * 7;
const DROPDOWN_WIDTH = 376;
const RECENT_LIMIT = 8;

const STYLE_OPTIONS = [
  { label: 'Outline', value: 'outline' },
  { label: 'Filled', value: 'filled' },
];

const KEY_MOVES: Record<string, GridMove> = {
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
  PageUp: 'pageUp',
  PageDown: 'pageDown',
  Home: 'first',
  End: 'last',
};

const EMPTY_GRID: IconGrid = { cells: [], rows: [], cellRows: [], resultsStart: 0 };

export interface IconPickerProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
  placeholder?: string;
  value?: IconValue | null;
  defaultValue?: IconValue | null;
  onChange?: (value: IconValue | null) => void;
  /** Local storage key of the recently picked icons */
  recentStorageKey?: string;
}

export function IconPicker({
  label,
  description,
  error,
  placeholder = 'Pick an icon',
  value,
  defaultValue,
  onChange,
  recentStorageKey = 'icon-picker-recent',
}: IconPickerProps) {
  const [current, setCurrent] = useUncontrolled<IconValue | null>({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });
  const [iconSet, setIconSet] = useState<IconSet | null>(getLoadedIconSet);
  const [search, setSearch] = useState('');
  const query = useDeferredValue(search);
  const [style, setStyle] = useState<IconStyle>(current?.style ?? 'outline');
  const [highlighted, setHighlighted] = useState(-1);
  const [hovered, setHovered] = useState(-1);
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const [recentValues, setRecentValues] = useLocalStorage<IconValue[]>({
    key: recentStorageKey,
    defaultValue: [],
  });
  const searchRef = useRef<HTMLInputElement>(null);
  const highlightValueOnOpen = useRef(false);
  const listId = useId();

  const combobox = useCombobox({
    onDropdownClose: () => {
      setSearch('');
      setHighlighted(-1);
      setHovered(-1);
      combobox.focusTarget();
    },
  });
  const opened = combobox.dropdownOpened;

  useEffect(() => {
    if (!iconSet && (opened || current !== null)) {
      void loadIconSet().then(setIconSet);
    }
  }, [iconSet, opened, current]);

  const grid = useMemo(() => {
    if (!iconSet) {
      return EMPTY_GRID;
    }

    const results = searchIcons(style === 'filled' ? iconSet.filled : iconSet.outline, query);
    const recent =
      query.trim() === ''
        ? recentValues.map(iconSet.find).filter((entry): entry is IconEntry => entry !== undefined)
        : [];

    return buildIconGrid(results, recent, COLUMNS);
  }, [iconSet, style, query, recentValues]);

  // Row sizes depend on the row kind: a new key function makes the virtualizer measure the new list
  const getItemKey = useCallback((index: number) => `${grid.rows[index].kind}-${index}`, [grid]);
  const virtualizer = useVirtualizer({
    count: grid.rows.length,
    getScrollElement: () => viewport,
    estimateSize: (index) => (grid.rows[index].kind === 'header' ? HEADER_HEIGHT : ROW_HEIGHT),
    getItemKey,
    overscan: 4,
  });

  const scrollToCell = (index: number) => {
    const rowIndex = grid.cellRows[index];
    // The first row of a section scrolls together with its header
    const target = grid.rows[rowIndex - 1]?.kind === 'header' ? rowIndex - 1 : rowIndex;
    virtualizer.scrollToIndex(target, { align: 'auto' });
  };

  const highlight = (index: number) => {
    setHighlighted(index);
    if (index !== -1) {
      scrollToCell(index);
    }
  };

  // The search field appears after the icons load, later than the focus trap activates
  useEffect(() => {
    if (opened && iconSet) {
      searchRef.current?.focus();
    }
  }, [opened, iconSet]);

  // A new list highlights its first cell; opening the dropdown highlights the current value
  useEffect(() => {
    if (!opened || !iconSet) {
      return;
    }

    if (highlightValueOnOpen.current) {
      highlightValueOnOpen.current = false;
      // The value is highlighted in the full grid, not in the recent row
      const isValueCell = (entry: IconEntry, index: number) =>
        index >= grid.resultsStart && entry.name === current?.name;
      const valueIndex = current?.style === style ? grid.cells.findIndex(isValueCell) : -1;
      const index = valueIndex !== -1 ? valueIndex : grid.cells.length > 0 ? 0 : -1;
      setHighlighted(index);
      if (index !== -1) {
        requestAnimationFrame(() => scrollToCell(index));
      }
      return;
    }

    setHighlighted(grid.cells.length > 0 ? 0 : -1);
    virtualizer.scrollToOffset(0);
  }, [grid, opened]);

  const openDropdown = () => {
    if (current) {
      setStyle(current.style);
    }
    highlightValueOnOpen.current = true;
    combobox.openDropdown();
  };

  const pick = (entry: IconEntry) => {
    const next: IconValue = { name: entry.name, style: entry.style };
    const isNext = (item: IconValue) => item.name === next.name && item.style === next.style;
    setCurrent(next);
    setRecentValues((previous) =>
      [next, ...previous.filter((item) => !isNext(item))].slice(0, RECENT_LIMIT)
    );
    combobox.closeDropdown();
  };

  const handleTargetKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!opened && ['Enter', ' ', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      openDropdown();
    } else if (current && (event.key === 'Backspace' || event.key === 'Delete')) {
      event.preventDefault();
      setCurrent(null);
    }
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const move = KEY_MOVES[event.key];

    if (move) {
      event.preventDefault();
      const viewportHeight = virtualizer.scrollRect?.height || GRID_MAX_HEIGHT;
      const pageRows = Math.max(1, Math.floor(viewportHeight / ROW_HEIGHT));
      highlight(moveInGrid(grid, highlighted, move, pageRows));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (highlighted !== -1) {
        pick(grid.cells[highlighted]);
      }
    }
  };

  const handleDropdownKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      combobox.closeDropdown();
    }
  };

  const cellId = (index: number) => `${listId}-cell-${index}`;
  const currentEntry = current && iconSet ? iconSet.find(current) : undefined;
  const CurrentIcon = currentEntry?.Component;
  const footerEntry = grid.cells[hovered] ?? grid.cells[highlighted];

  const renderRow = (rowIndex: number) => {
    const row = grid.rows[rowIndex];

    if (row.kind === 'header') {
      return (
        <Text size="xs" className={classes.sectionLabel} aria-hidden>
          {row.label}
        </Text>
      );
    }

    const cells = grid.cells.slice(row.start, row.start + row.count).map((entry, offset) => {
      const index = row.start + offset;
      const isActive =
        index >= grid.resultsStart && current?.name === entry.name && current.style === entry.style;

      return (
        // oxlint-disable-next-line jsx-a11y/click-events-have-key-events -- the search field handles the keyboard
        <div
          key={index}
          id={cellId(index)}
          role="option"
          tabIndex={-1}
          aria-label={entry.label}
          aria-selected={index === highlighted}
          className={classes.cell}
          data-highlighted={index === highlighted || undefined}
          data-active={isActive || undefined}
          onMouseDown={(event) => event.preventDefault()}
          onMouseEnter={() => setHovered(index)}
          onClick={() => pick(entry)}
        >
          <entry.Component size={20} stroke={1.5} />
        </div>
      );
    });

    return row.group === 'recent' ? (
      <div role="group" aria-label="Recent" className={classes.row}>
        {cells}
      </div>
    ) : (
      <div role="presentation" className={classes.row}>
        {cells}
      </div>
    );
  };

  const renderOptions = () => {
    if (!iconSet) {
      return (
        <div className={classes.loader}>
          <Loader size="sm" aria-label="Loading icons" />
        </div>
      );
    }

    if (grid.cells.length === 0) {
      return <Combobox.Empty className={classes.empty}>Nothing found for "{query}"</Combobox.Empty>;
    }

    return (
      <ScrollArea.Autosize
        mah={GRID_MAX_HEIGHT}
        type="auto"
        viewportRef={setViewport}
        viewportProps={{ tabIndex: -1 }}
      >
        <div
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-label="Icons"
          className={classes.grid}
          style={{ height: virtualizer.getTotalSize() }}
          onMouseLeave={() => setHovered(-1)}
        >
          {virtualizer.getVirtualItems().map((item) => (
            <div
              key={item.key}
              role="presentation"
              className={classes.virtualRow}
              style={{ height: item.size, transform: `translateY(${item.start}px)` }}
            >
              {renderRow(item.index)}
            </div>
          ))}
        </div>
      </ScrollArea.Autosize>
    );
  };

  const renderDropdownContent = () => (
    <>
      <div className={classes.controls}>
        <TextInput
          ref={searchRef}
          data-autofocus
          placeholder="Search icons"
          aria-label="Search icons"
          leftSection={<IconSearch size={16} />}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          onKeyDown={handleSearchKeyDown}
          role="combobox"
          aria-expanded={opened}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={highlighted !== -1 ? cellId(highlighted) : undefined}
        />
        <SegmentedControl
          fullWidth
          aria-label="Icon style"
          data={STYLE_OPTIONS}
          value={style}
          onChange={(next) => {
            setStyle(next as IconStyle);
            searchRef.current?.focus();
          }}
        />
      </div>

      {renderOptions()}

      <Combobox.Footer className={classes.footer}>
        <Text size="xs" truncate>
          {footerEntry ? footerEntry.label : ' '}
        </Text>
      </Combobox.Footer>
    </>
  );

  return (
    <Combobox store={combobox} width={DROPDOWN_WIDTH} position="bottom-start">
      <Combobox.Target withAriaAttributes={false} withKeyboardNavigation={false}>
        <InputBase
          readOnly
          pointer
          label={label}
          description={description}
          error={error}
          placeholder={placeholder}
          value={currentEntry?.label ?? (current ? getIconLabel(current.name) : '')}
          leftSection={CurrentIcon ? <CurrentIcon size={16} /> : null}
          rightSection={
            current ? (
              <Input.ClearButton aria-label="Clear icon" onClick={() => setCurrent(null)} />
            ) : (
              <Combobox.Chevron error={error} />
            )
          }
          rightSectionPointerEvents={current ? 'all' : 'none'}
          aria-haspopup="listbox"
          aria-expanded={opened}
          onClick={() => (opened ? combobox.closeDropdown() : openDropdown())}
          onKeyDown={handleTargetKeyDown}
        />
      </Combobox.Target>

      <Combobox.Dropdown onKeyDown={handleDropdownKeyDown}>
        <FocusTrap active={opened}>
          <div>{renderDropdownContent()}</div>
        </FocusTrap>
      </Combobox.Dropdown>
    </Combobox>
  );
}
