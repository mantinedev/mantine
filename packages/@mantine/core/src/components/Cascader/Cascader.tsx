import { Fragment, useEffect, useMemo } from 'react';
import type { SafePolygonOptions } from '@floating-ui/react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  extractStyleProps,
  Factory,
  factory,
  MantineColor,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { CheckIcon } from '../Checkbox/CheckIcon';
import { Combobox, ComboboxLikeStylesNames, useCombobox } from '../Combobox';
import { isExternalInputChange } from '../Combobox/is-external-input-change/is-external-input-change';
import {
  __BaseInputProps,
  __InputStylesNames,
  ClearSectionMode,
  InputClearButtonProps,
  InputVariant,
} from '../Input';
import { InputBase } from '../InputBase';
import { ScrollArea, ScrollAreaProps } from '../ScrollArea';
import { CascaderColumns } from './CascaderColumns';
import { flattenCascaderPaths } from './flatten-cascader-paths';
import { getCascaderPathOptions } from './get-cascader-path-options';
import { useCascader } from './use-cascader';
import classes from './Cascader.module.css';

export interface CascaderOption {
  /** Option value, must be unique across the whole data tree */
  value: string;

  /** Option label, if not set `value` is used instead */
  label?: React.ReactNode;

  /** Nested options */
  children?: CascaderOption[];

  /** If set, the option cannot be selected or expanded */
  disabled?: boolean;
}

export interface CascaderFormatValueInput {
  /** Selected path from root to node */
  value: string[];

  /** Option chain resolved from the selected path */
  options: CascaderOption[];
}

export type CascaderFormatValue = (input: CascaderFormatValueInput) => React.ReactNode;

export type CascaderSafeAreaPolygonOptions = Omit<SafePolygonOptions, 'blockPointerEvents'>;

export type CascaderStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'columnsList'
  | 'columnsOverflow'
  | 'column'
  | 'columnScroll'
  | 'columnOption'
  | 'columnOptionLabel'
  | 'columnOptionIcon'
  | 'columnOptionCheck'
  | 'columnEmpty'
  | 'flatOption';

export interface CascaderProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<CascaderFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Hierarchical options data */
  data: CascaderOption[];

  /** Controlled selected path from root to node */
  value?: string[] | null;

  /** Uncontrolled selected path from root to node */
  defaultValue?: string[] | null;

  /** Called when the selected path changes with the path and the resolved option chain */
  onChange?: (value: string[] | null, options: CascaderOption[]) => void;

  /** If set, any intermediate option can be selected, not only leaf options @default false */
  changeOnSelect?: boolean;

  /** Determines whether the dropdown should be closed when a value is selected, defaults to `!allowDeselect` */
  closeOnSelect?: boolean;

  /** If set, the selected value can be deselected by selecting it again @default true */
  allowDeselect?: boolean;

  /** If set, the check icon is displayed on the selected option @default true */
  withCheckIcon?: boolean;

  /** Position of the check icon relative to the option label @default 'right' */
  checkIconPosition?: 'left' | 'right';

  /** Renders the dropdown as cascading columns. When `false`, options are rendered as a flat list of paths, the same way as search results (useful for narrow/mobile layouts) @default true */
  withColumns?: boolean;

  /** Determines how the next column is opened @default 'click' */
  expandTrigger?: 'click' | 'hover';

  /** Determines whether the next column stays open while the cursor moves toward it, applicable only when `expandTrigger="hover"`. Pass an object to configure safe polygon behavior. @default true */
  safeAreaPolygon?: boolean | CascaderSafeAreaPolygonOptions;

  /** If set, options can be searched by their flattened paths @default false */
  searchable?: boolean;

  /** Controlled search value */
  searchValue?: string;

  /** Uncontrolled search value */
  defaultSearchValue?: string;

  /** Called when the search value changes */
  onSearchChange?: (value: string) => void;

  /** Custom search filter, matched against the full option path */
  filter?: (query: string, options: CascaderOption[]) => boolean;

  /** Custom rendering of a search result row */
  renderSearchOption?: (query: string, options: CascaderOption[]) => React.ReactNode;

  /** A function to format the selected path displayed in the input, should return a string */
  formatValue?: CascaderFormatValue;

  /** Custom rendering of an option in columns */
  renderOption?: (option: CascaderOption, level: number) => React.ReactNode;

  /** Path separator displayed in the input and search results @default '/' */
  separator?: React.ReactNode;

  /** Width of each column */
  columnWidth?: number | string;

  /** Maximum number of columns (levels) displayed next to each other, deeper levels replace earlier ones @default 3 */
  maxDisplayedLevels?: number;

  /** `aria-label` and `title` of the control that reveals levels hidden before the visible ones by `maxDisplayedLevels` @default 'Show previous levels' */
  previousLevelsControlLabel?: string;

  /** `aria-label` and `title` of the control that reveals levels hidden after the visible ones by `maxDisplayedLevels` @default 'Show next levels' */
  nextLevelsControlLabel?: string;

  /** Max height of a column before it becomes scrollable @default 260 */
  maxDropdownHeight?: number | string;

  /** Message displayed when there are no options or search results */
  nothingFoundMessage?: React.ReactNode;

  /** If set, the clear button is displayed when a value is selected @default false */
  clearable?: boolean;

  /** Determines how the clear button and `rightSection` are rendered @default 'both' */
  clearSectionMode?: ClearSectionMode;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** Called when the clear button is clicked */
  onClear?: () => void;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown opened state */
  defaultDropdownOpened?: boolean;

  /** Called when the dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when the dropdown closes */
  onDropdownClose?: () => void;

  /** Props passed down to the underlying `Combobox` component */
  comboboxProps?: Record<string, any>;

  /** Props passed down to the dropdown `ScrollArea` */
  scrollAreaProps?: ScrollAreaProps;

  /** Controls the default chevron color */
  chevronColor?: MantineColor;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentProps<'input'>, 'value'>;

  /** Opens the dropdown when the input is focused in `searchable` mode @default true */
  openOnFocus?: boolean;
}

export type CascaderFactory = Factory<{
  props: CascaderProps;
  ref: HTMLInputElement;
  stylesNames: CascaderStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  expandTrigger: 'click',
  safeAreaPolygon: true,
  changeOnSelect: false,
  allowDeselect: true,
  withCheckIcon: true,
  checkIconPosition: 'right',
  withColumns: true,
  searchable: false,
  separator: '/',
  maxDisplayedLevels: 3,
  previousLevelsControlLabel: 'Show previous levels',
  nextLevelsControlLabel: 'Show next levels',
  maxDropdownHeight: 260,
  openOnFocus: true,
  size: 'sm',
} satisfies Partial<CascaderProps>;

function optionLabelToString(option: CascaderOption): string {
  return typeof option.label === 'string' || typeof option.label === 'number'
    ? String(option.label)
    : option.value;
}

function firstEnabledOptionIndex(options: CascaderOption[]): number {
  return options.findIndex((option) => !option.disabled);
}

function lastEnabledOptionIndex(options: CascaderOption[]): number {
  for (let index = options.length - 1; index >= 0; index -= 1) {
    if (!options[index].disabled) {
      return index;
    }
  }
  return -1;
}

function joinPathLabels(options: CascaderOption[], separator: string): string {
  return options.map(optionLabelToString).join(` ${separator} `);
}

function defaultCascaderFilter(
  query: string,
  options: CascaderOption[],
  separator: string
): boolean {
  const trimmed = query.trim().toLowerCase();
  if (trimmed.length === 0) {
    return true;
  }
  return joinPathLabels(options, separator).toLowerCase().includes(trimmed);
}

function defaultRenderSearchOption(
  options: CascaderOption[],
  separator: React.ReactNode
): React.ReactNode {
  return options.map((option, index) => (
    <Fragment key={option.value}>
      {index > 0 && <span data-cascader-separator> {separator} </span>}
      {option.label ?? option.value}
    </Fragment>
  ));
}

export const Cascader = factory<CascaderFactory>((_props) => {
  const props = useProps(['Input', 'InputWrapper', 'Cascader'], defaultProps as any, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    data,
    value,
    defaultValue,
    onChange,
    changeOnSelect,
    closeOnSelect,
    allowDeselect,
    withCheckIcon,
    checkIconPosition,
    withColumns,
    expandTrigger,
    safeAreaPolygon,
    searchable,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    filter,
    renderSearchOption,
    formatValue,
    renderOption,
    separator,
    columnWidth,
    maxDisplayedLevels,
    previousLevelsControlLabel,
    nextLevelsControlLabel,
    maxDropdownHeight,
    nothingFoundMessage,
    clearable,
    clearSectionMode,
    clearButtonProps,
    onClear,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    comboboxProps,
    scrollAreaProps,
    chevronColor,
    hiddenInputProps,
    openOnFocus,
    variant,
    onKeyDown,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    disabled,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    rightSectionProps,
    leftSection,
    leftSectionWidth,
    leftSectionPointerEvents,
    leftSectionProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    labelProps,
    descriptionProps,
    errorProps,
    successProps,
    wrapperProps,
    description,
    label,
    error,
    success,
    withErrorStyles,
    withSuccessStyles,
    name,
    form,
    id,
    placeholder,
    required,
    mod,
    attributes,
    ...others
  } = props;

  const _id = useId(id);
  const separatorString =
    typeof separator === 'string' || typeof separator === 'number' ? String(separator) : '/';

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: () => {
      onDropdownOpen?.();
      cascader.resetActivePath();
    },
    onDropdownClose: () => {
      onDropdownClose?.();
      if (searchable) {
        setSearchValue(cascader.value ? displayString : '');
      }
    },
  });

  // When `allowDeselect` is enabled, keep the dropdown open by default so the value can be toggled
  const shouldCloseOnSelect = closeOnSelect ?? !allowDeselect;

  const cascader = useCascader({
    data,
    value,
    defaultValue,
    onChange,
    changeOnSelect,
    allowDeselect,
    expandTrigger,
    onLeafSelect: () => {
      if (shouldCloseOnSelect) {
        combobox.closeDropdown();
      }
    },
  });

  const getStyles = useStyles<CascaderFactory>({
    name: 'Cascader',
    classes,
    props: props as any,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CascaderFactory>({
    props,
    styles,
    classNames,
  });

  const {
    styleProps,
    rest: { type, autoComplete, ...rest },
  } = extractStyleProps(others);

  const displayString = useMemo(() => {
    if (cascader.pathOptions.length === 0 || !cascader.value) {
      return '';
    }
    if (formatValue) {
      const rendered = formatValue({ value: cascader.value, options: cascader.pathOptions });
      if (typeof rendered === 'string' || typeof rendered === 'number') {
        return String(rendered);
      }
    }
    return joinPathLabels(cascader.pathOptions, separatorString);
  }, [cascader.pathOptions, cascader.value, formatValue, separatorString]);

  const initialSearchValue = useMemo(() => {
    if (!searchable || !defaultValue) {
      return '';
    }
    return joinPathLabels(getCascaderPathOptions(data, defaultValue), separatorString);
  }, []);

  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: initialSearchValue,
    onChange: onSearchChange,
  });

  const isSearching =
    !!searchable && _searchValue.trim().length > 0 && _searchValue !== displayString;

  useEffect(() => {
    if (searchable) {
      setSearchValue(cascader.value ? displayString : '');
    }
  }, [cascader.value]);

  // The dropdown renders a flat list of paths when searching or when `withColumns` is disabled
  const showFlatList = isSearching || !withColumns;

  const flatPaths = useMemo(() => flattenCascaderPaths(data), [data]);

  const flatListItems = useMemo(() => {
    if (!showFlatList) {
      return [];
    }
    const base = flatPaths.filter((flatPath) => (changeOnSelect ? true : flatPath.leaf));
    if (!isSearching) {
      return base;
    }
    return base.filter((flatPath) =>
      filter
        ? filter(_searchValue, flatPath.options)
        : defaultCascaderFilter(_searchValue, flatPath.options, separatorString)
    );
  }, [flatPaths, showFlatList, isSearching, _searchValue, changeOnSelect, filter, separatorString]);

  const canInteract = !readOnly && !disabled;

  const handleSearchChange = (nextValue: string) => {
    setSearchValue(nextValue);
    if (canInteract) {
      combobox.openDropdown();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.key === 'Escape') {
      combobox.closeDropdown();
      return;
    }

    if (showFlatList || !canInteract) {
      return;
    }

    if (!combobox.dropdownOpened) {
      const opensDropdown =
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowRight' ||
        event.key === 'Enter' ||
        (!searchable && event.key === ' ');

      if (opensDropdown) {
        event.preventDefault();
        cascader.setKeyboardNav(true);
        combobox.openDropdown();

        if (!cascader.value && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
          const rootIndex =
            event.key === 'ArrowDown'
              ? firstEnabledOptionIndex(data)
              : lastEnabledOptionIndex(data);
          if (rootIndex >= 0) {
            cascader.setActivePath([data[rootIndex].value]);
          }
        }
      }
      return;
    }

    if (cascader.handleColumnsKeyDown(event)) {
      event.preventDefault();
    } else if (!searchable && event.key === ' ') {
      event.preventDefault();
    }
  };

  const clearButton = (
    <Combobox.ClearButton
      {...clearButtonProps}
      onClear={() => {
        onClear?.();
        cascader.setValue(null);
        cascader.setActivePath([]);
        setSearchValue('');
        combobox.focusTarget();
      }}
    />
  );

  const hasValue = Array.isArray(cascader.value) && cascader.value.length > 0;
  const _clearable = clearable && hasValue && !disabled && !readOnly;

  const listId = _id ? `${_id}-cascader-list` : undefined;
  const valueKey = cascader.value ? JSON.stringify(cascader.value) : null;

  const dropdown = (
    <Combobox.Dropdown
      hidden={readOnly || disabled}
      style={showFlatList ? undefined : { padding: 0 }}
    >
      {showFlatList ? (
        <Combobox.Options aria-label={typeof label === 'string' ? label : undefined}>
          <ScrollArea.Autosize
            mah={maxDropdownHeight ?? 260}
            type="scroll"
            scrollbarSize="var(--combobox-padding)"
            offsetScrollbars="y"
            {...scrollAreaProps}
          >
            {flatListItems.map((flatPath, index) => {
              const pathKey = JSON.stringify(flatPath.path);
              const active = valueKey !== null && pathKey === valueKey;
              return (
                <Combobox.Option
                  key={pathKey}
                  value={`${index}`}
                  active={active}
                  disabled={flatPath.disabled}
                >
                  <span {...getStyles('flatOption')}>
                    {active && withCheckIcon && checkIconPosition === 'left' && (
                      <CheckIcon {...getStyles('columnOptionCheck')} />
                    )}
                    <span {...getStyles('columnOptionLabel')}>
                      {renderSearchOption
                        ? renderSearchOption(_searchValue, flatPath.options)
                        : defaultRenderSearchOption(flatPath.options, separator)}
                    </span>
                    {active && withCheckIcon && checkIconPosition !== 'left' && (
                      <CheckIcon {...getStyles('columnOptionCheck')} />
                    )}
                  </span>
                </Combobox.Option>
              );
            })}
          </ScrollArea.Autosize>
          {flatListItems.length === 0 && nothingFoundMessage && (
            <Combobox.Empty>{nothingFoundMessage}</Combobox.Empty>
          )}
        </Combobox.Options>
      ) : (
        <CascaderColumns
          data={data}
          activePath={cascader.activePath}
          value={cascader.value}
          keyboardNav={cascader.keyboardNav}
          withCheckIcon={withCheckIcon}
          checkIconPosition={checkIconPosition}
          renderOption={renderOption}
          columnWidth={columnWidth}
          maxDisplayedLevels={maxDisplayedLevels}
          previousLevelsControlLabel={previousLevelsControlLabel}
          nextLevelsControlLabel={nextLevelsControlLabel}
          maxDropdownHeight={maxDropdownHeight}
          nothingFoundMessage={nothingFoundMessage}
          getStyles={getStyles}
          unstyled={unstyled}
          scrollAreaProps={scrollAreaProps}
          onOptionClick={cascader.handleOptionClick}
          onOptionMouseEnter={cascader.handleOptionMouseEnter}
          onColumnsMouseLeave={() => {
            if (expandTrigger === 'hover') {
              cascader.setActivePath(cascader.value ?? []);
            }
          }}
          onPointerActivity={() => cascader.setKeyboardNav(false)}
          listId={listId}
          safeAreaPolygon={expandTrigger === 'hover' ? safeAreaPolygon : false}
        />
      )}
    </Combobox.Dropdown>
  );

  return (
    <>
      <Combobox
        store={combobox}
        __staticSelector="Cascader"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        readOnly={readOnly}
        size={size}
        attributes={attributes}
        width={showFlatList ? 'target' : 'max-content'}
        position="bottom-start"
        onOptionSubmit={(val) => {
          const index = Number(val);
          const flatPath = flatListItems[index];
          if (!flatPath || flatPath.disabled) {
            return;
          }
          cascader.selectPath(flatPath.path);
          cascader.setActivePath(flatPath.path);
          if (shouldCloseOnSelect) {
            combobox.closeDropdown();
          }
        }}
        {...comboboxProps}
      >
        <Combobox.Target
          targetType={searchable ? 'input' : 'button'}
          withKeyboardNavigation={showFlatList}
          autoComplete={autoComplete}
        >
          <InputBase
            id={_id}
            __defaultRightSection={
              <Combobox.Chevron
                size={size}
                error={error}
                unstyled={unstyled}
                color={chevronColor}
              />
            }
            __clearSection={clearButton}
            __clearable={_clearable}
            __clearSectionMode={clearSectionMode}
            rightSection={rightSection}
            rightSectionPointerEvents={rightSectionPointerEvents || 'none'}
            {...rest}
            {...styleProps}
            size={size}
            __staticSelector="Cascader"
            disabled={disabled}
            readOnly={readOnly || !searchable}
            value={searchable ? _searchValue : displayString}
            onChange={(event) => {
              if (isExternalInputChange(event)) {
                return;
              }

              handleSearchChange(event.currentTarget.value);
            }}
            onFocus={(event) => {
              if (openOnFocus && searchable && canInteract) {
                combobox.openDropdown();
              }
              onFocus?.(event);
            }}
            onBlur={(event) => {
              combobox.closeDropdown();
              onBlur?.(event);
            }}
            onClick={(event) => {
              if (canInteract) {
                cascader.setKeyboardNav(false);
                if (searchable) {
                  combobox.openDropdown();
                } else {
                  combobox.toggleDropdown();
                }
              }
              onClick?.(event);
            }}
            onKeyDown={handleKeyDown}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            pointer={!searchable}
            error={error}
            success={success}
            attributes={attributes}
            className={className}
            style={style}
            variant={variant}
            radius={radius}
            leftSection={leftSection}
            leftSectionWidth={leftSectionWidth}
            leftSectionPointerEvents={leftSectionPointerEvents}
            leftSectionProps={leftSectionProps}
            rightSectionWidth={rightSectionWidth}
            rightSectionProps={rightSectionProps}
            inputContainer={inputContainer}
            inputWrapperOrder={inputWrapperOrder}
            withAsterisk={withAsterisk}
            labelProps={labelProps}
            descriptionProps={descriptionProps}
            errorProps={errorProps}
            successProps={successProps}
            wrapperProps={wrapperProps}
            description={description}
            label={label}
            withErrorStyles={withErrorStyles}
            withSuccessStyles={withSuccessStyles}
            placeholder={placeholder}
            required={required}
            mod={mod}
          />
        </Combobox.Target>
        {dropdown}
      </Combobox>
      <Combobox.HiddenInput
        value={cascader.value}
        name={name}
        form={form}
        disabled={disabled}
        {...hiddenInputProps}
      />
    </>
  );
});

Cascader.classes = { ...InputBase.classes, ...Combobox.classes, ...classes };
Cascader.displayName = '@mantine/core/Cascader';
