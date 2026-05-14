import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  extractStyleProps,
  Factory,
  genericFactory,
  MantineColor,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { Combobox, ComboboxLikeStylesNames, useCombobox } from '../Combobox';
import {
  __BaseInputProps,
  __InputStylesNames,
  ClearSectionMode,
  InputClearButtonProps,
  InputVariant,
} from '../Input';
import { InputBase } from '../InputBase';
import { Pill } from '../Pill';
import { PillsInput } from '../PillsInput';
import { ScrollArea, ScrollAreaProps } from '../ScrollArea';
import type { TreeNodeData } from '../Tree';
import { filterTreeData } from '../Tree/filter-tree-data/filter-tree-data';
import {
  findTreeNode,
  getChildrenNodesValues,
} from '../Tree/get-children-nodes-values/get-children-nodes-values';
import { isNodeChecked } from '../Tree/is-node-checked/is-node-checked';
import { isNodeIndeterminate } from '../Tree/is-node-indeterminate/is-node-indeterminate';
import { getTreeExpandedState, TreeExpandedState } from '../Tree/use-tree';
import { flattenTreeSelectData } from './flatten-tree-select-data';
import {
  CheckedStrategy,
  checkedToValue,
  expandToLeafChecked,
} from './get-checked-values-by-strategy';
import {
  TreeSelectChevronAriaLabels,
  TreeSelectOption,
  TreeSelectRenderNodePayload,
} from './TreeSelectOption';
import classes from './TreeSelect.module.css';

export type TreeSelectStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'pill'
  | 'pillsList'
  | 'inputField';

export type TreeSelectMode = 'single' | 'multiple' | 'checkbox';

export type TreeSelectValue<Mode extends TreeSelectMode> = Mode extends 'single'
  ? string | null
  : string[];

export interface TreeSelectProps<Mode extends TreeSelectMode = 'single'>
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<TreeSelectFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Tree data */
  data: TreeNodeData[];

  /** Selection mode: 'single', 'multiple', or 'checkbox' (with cascade) @default 'single' */
  mode?: Mode;

  /** Controlled value */
  value?: TreeSelectValue<Mode>;

  /** Default value */
  defaultValue?: TreeSelectValue<Mode>;

  /** Called when value changes */
  onChange?: (value: TreeSelectValue<Mode>) => void;

  /** Disables parent-child cascade in checkbox mode @default false */
  checkStrictly?: boolean;

  /** Controls which checked nodes appear in value/pills in checkbox mode @default 'child' */
  checkedStrategy?: CheckedStrategy;

  /** Default expanded node values */
  defaultExpandedValues?: string[];

  /** Expand all nodes by default @default false */
  defaultExpandAll?: boolean;

  /** Controlled expanded state */
  expandedValues?: string[];

  /** Called when expanded state changes */
  onExpandedChange?: (values: string[]) => void;

  /** Also toggle expand when clicking a parent node (not just the chevron). In `single` and `multiple` modes, parent clicks only expand; only leaves can be selected. In `checkbox` mode, parent clicks both check and expand. @default false */
  expandOnClick?: boolean;

  /** Enables search filtering @default false */
  searchable?: boolean;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?: (value: string) => void;

  /** Custom filter function */
  filter?: (query: string, node: TreeNodeData) => boolean;

  /** Message when no nodes match search */
  nothingFoundMessage?: React.ReactNode;

  /** Allows deselecting in single mode @default true */
  allowDeselect?: boolean;

  /** Shows clear button @default false */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' */
  clearSectionMode?: ClearSectionMode;

  /** Props for the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** Maximum selectable values (multiple/checkbox mode) */
  maxValues?: number;

  /** Maximum displayed pills before "+N more" */
  maxDisplayedValues?: number;

  /** Content shown when values overflow maxDisplayedValues */
  maxDisplayedValuesContent?: React.ReactNode | ((overflow: number) => React.ReactNode);

  /** Called with removed value in multiple/checkbox mode */
  onRemove?: (value: string) => void;

  /** Called when clear button is clicked */
  onClear?: () => void;

  /** Custom node rendering in the dropdown */
  renderNode?: (payload: TreeSelectRenderNodePayload) => React.ReactNode;

  /** Show tree connection lines between parent and child nodes @default true */
  withLines?: boolean;

  /** Props for the hidden input */
  hiddenInputProps?: Omit<React.ComponentProps<'input'>, 'value'>;

  /** Divider for hidden input values @default ',' */
  hiddenInputValuesDivider?: string;

  /** Props for the ScrollArea in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Controls the default chevron color */
  chevronColor?: MantineColor;

  /** Max dropdown height @default 220 */
  maxDropdownHeight?: number | string;

  /** Controlled dropdown state */
  dropdownOpened?: boolean;

  /** Default dropdown state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;

  /** Props passed to the underlying Combobox */
  comboboxProps?: Record<string, any>;

  /** Clear search on selection change @default true */
  clearSearchOnChange?: boolean;

  /** Opens dropdown on focus (searchable mode) @default true */
  openOnFocus?: boolean;

  /** aria-label values for the expand/collapse chevron button */
  chevronAriaLabels?: TreeSelectChevronAriaLabels;
}

export type TreeSelectFactory = Factory<{
  props: TreeSelectProps;
  ref: HTMLInputElement;
  stylesNames: TreeSelectStylesNames;
  variant: InputVariant;
  signature: <Mode extends TreeSelectMode = 'single'>(
    props: TreeSelectProps<Mode>
  ) => React.JSX.Element;
}>;

const defaultProps = {
  mode: 'single',
  allowDeselect: true,
  checkedStrategy: 'child',
  maxValues: Infinity,
  hiddenInputValuesDivider: ',',
  clearSearchOnChange: true,
  openOnFocus: true,
  size: 'sm',
  withLines: true,
} satisfies Partial<TreeSelectProps<TreeSelectMode>>;

const clearSectionOffset: Record<string, number> = {
  xs: 41,
  sm: 50,
  md: 60,
  lg: 72,
  xl: 89,
};

function getAncestorsToNode(value: string, nodes: TreeNodeData[]): string[] | null {
  for (const node of nodes) {
    if (node.value === value) {
      return [];
    }
    if (Array.isArray(node.children)) {
      const path = getAncestorsToNode(value, node.children);
      if (path !== null) {
        return [node.value, ...path];
      }
    }
  }
  return null;
}

export const TreeSelect = genericFactory<TreeSelectFactory>((_props) => {
  const props = useProps(['Input', 'InputWrapper', 'TreeSelect'], defaultProps as any, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    data,
    mode,
    value,
    defaultValue,
    onChange,
    checkStrictly,
    checkedStrategy,
    defaultExpandedValues,
    defaultExpandAll,
    expandedValues,
    onExpandedChange,
    expandOnClick,
    searchable,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    filter,
    nothingFoundMessage,
    allowDeselect,
    clearable,
    clearSectionMode,
    clearButtonProps,
    maxValues,
    maxDisplayedValues,
    maxDisplayedValuesContent,
    onRemove,
    onClear,
    renderNode,
    withLines,
    hiddenInputProps,
    hiddenInputValuesDivider,
    scrollAreaProps,
    chevronColor,
    maxDropdownHeight,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    comboboxProps,
    clearSearchOnChange,
    openOnFocus,
    chevronAriaLabels,
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
    wrapperProps,
    description,
    label,
    error,
    withErrorStyles,
    name,
    form,
    id,
    placeholder,
    required,
    mod,
    attributes,
    ...others
  } = props;

  const isMulti = mode === 'multiple' || mode === 'checkbox';
  const isCheckbox = mode === 'checkbox';
  const _id = useId(id);

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: () => {
      onDropdownOpen?.();
      combobox.updateSelectedOptionIndex('active', { scrollIntoView: true });
    },
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    },
  });

  const initialExpanded = useMemo(() => {
    if (defaultExpandAll) {
      return getTreeExpandedState(data, '*');
    }
    if (defaultExpandedValues) {
      return getTreeExpandedState(data, defaultExpandedValues);
    }
    return getTreeExpandedState(data, []);
  }, []);

  const expandedToRecord = useCallback(
    (values: string[] | undefined): TreeExpandedState | undefined => {
      if (!values) {
        return undefined;
      }
      return getTreeExpandedState(data, values);
    },
    [data]
  );

  const [_expandedState, setExpandedState] = useUncontrolled<TreeExpandedState>({
    value: expandedToRecord(expandedValues),
    defaultValue: initialExpanded,
    finalValue: {},
    onChange: (val) => {
      if (onExpandedChange) {
        onExpandedChange(
          Object.entries(val)
            .filter(([, v]) => v)
            .map(([k]) => k)
        );
      }
    },
  });

  const toggleExpand = useCallback(
    (nodeValue: string) => {
      setExpandedState({ ..._expandedState, [nodeValue]: !_expandedState[nodeValue] });
    },
    [_expandedState]
  );

  const initialSearchValue = useMemo(() => {
    if (mode !== 'single' || !defaultValue) {
      return '';
    }
    const node = findTreeNode(defaultValue as string, data);
    return node ? (typeof node.label === 'string' ? node.label : '') : '';
  }, []);

  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: initialSearchValue,
    onChange: onSearchChange,
  });

  const handleSearchChange = (val: string) => {
    setSearchValue(val);
    combobox.resetSelectedOption();
  };

  const [_value, setValue] = useUncontrolled({
    value: value as any,
    defaultValue: defaultValue as any,
    finalValue: isMulti ? [] : null,
    onChange,
  });

  const internalChecked = useMemo(() => {
    if (!isCheckbox || !_value || !Array.isArray(_value)) {
      return [];
    }
    if (checkStrictly) {
      return _value;
    }
    return expandToLeafChecked(_value, data);
  }, [isCheckbox, _value, data, checkStrictly]);

  const filteredData = useMemo(() => {
    if (!searchable || !_searchValue) {
      return data;
    }
    if (mode === 'single' && _value) {
      const node = findTreeNode(_value as string, data);
      if (node && _searchValue === (typeof node.label === 'string' ? node.label : '')) {
        return data;
      }
    }
    return filterTreeData(data, _searchValue, filter);
  }, [data, _searchValue, filter, searchable, mode, _value]);

  const expandedForRender = useMemo(() => {
    if (_searchValue && filteredData !== data) {
      const expanded = { ..._expandedState };
      const expandFilteredParents = (nodes: TreeNodeData[]) => {
        for (const node of nodes) {
          if (Array.isArray(node.children) && node.children.length > 0) {
            expanded[node.value] = true;
            expandFilteredParents(node.children);
          }
        }
      };
      expandFilteredParents(filteredData);
      return expanded;
    }
    return _expandedState;
  }, [filteredData, _expandedState, _searchValue, data]);

  const flatNodes = useMemo(
    () => flattenTreeSelectData(filteredData, expandedForRender),
    [filteredData, expandedForRender]
  );

  const flatNodesRef = useRef(flatNodes);
  flatNodesRef.current = flatNodes;

  const nodeLookup = useMemo(() => {
    const lookup: Record<string, TreeNodeData> = {};
    const walk = (nodes: TreeNodeData[]) => {
      for (const node of nodes) {
        lookup[node.value] = node;
        if (Array.isArray(node.children)) {
          walk(node.children);
        }
      }
    };
    walk(data);
    return lookup;
  }, [data]);

  const getNodeLabel = (nodeValue: string): string => {
    const node = nodeLookup[nodeValue];
    if (!node) {
      return nodeValue;
    }
    return typeof node.label === 'string' ? node.label : nodeValue;
  };

  const getStyles = useStyles<TreeSelectFactory>({
    name: 'TreeSelect',
    classes: {} as any,
    props: props as any,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TreeSelectFactory>({
    props,
    styles,
    classNames,
  });

  const {
    styleProps,
    rest: { type, autoComplete, ...rest },
  } = extractStyleProps(others);

  const handleOptionSubmit = (val: string) => {
    if (mode === 'single') {
      if (expandOnClick) {
        const node = findTreeNode(val, data);
        if (node && Array.isArray(node.children) && node.children.length > 0) {
          toggleExpand(val);
          return;
        }
      }
      const nextValue = allowDeselect && val === _value ? null : val;
      setValue(nextValue);
      combobox.closeDropdown();
      if (clearSearchOnChange) {
        handleSearchChange(nextValue ? getNodeLabel(nextValue) : '');
      }
    } else if (mode === 'multiple') {
      if (expandOnClick) {
        const node = findTreeNode(val, data);
        if (node && Array.isArray(node.children) && node.children.length > 0) {
          toggleExpand(val);
          return;
        }
      }
      const arr = (_value as string[]) || [];
      if (arr.includes(val)) {
        setValue(arr.filter((v: string) => v !== val));
        onRemove?.(val);
      } else if (arr.length < (maxValues ?? Infinity)) {
        setValue([...arr, val]);
      } else {
        return;
      }
      if (clearSearchOnChange) {
        setSearchValue('');
      }
    } else if (mode === 'checkbox') {
      const nodeChecked = checkStrictly
        ? internalChecked.includes(val)
        : isNodeChecked(val, data, internalChecked);

      let newInternalChecked: string[];
      if (checkStrictly) {
        newInternalChecked = nodeChecked
          ? internalChecked.filter((v) => v !== val)
          : [...internalChecked, val];
      } else {
        const childLeaves = getChildrenNodesValues(val, data);
        if (nodeChecked) {
          newInternalChecked = internalChecked.filter((v) => !childLeaves.includes(v));
        } else {
          newInternalChecked = [...new Set([...internalChecked, ...childLeaves])];
        }
      }

      const newValue = checkedToValue(newInternalChecked, data, checkedStrategy!);
      if (!nodeChecked && newValue.length > (maxValues ?? Infinity)) {
        return;
      }
      setValue(newValue);
      if (clearSearchOnChange) {
        setSearchValue('');
      }

      if (expandOnClick) {
        const node = findTreeNode(val, data);
        if (node && Array.isArray(node.children) && node.children.length > 0) {
          if (!_expandedState[val]) {
            toggleExpand(val);
          }
        }
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.key === ' ' && !searchable && isMulti) {
      event.preventDefault();
      combobox.toggleDropdown();
    }

    if (event.key === 'Backspace' && _searchValue.length === 0 && isMulti) {
      const arr = (_value as string[]) || [];
      if (arr.length > 0) {
        const removed = arr[arr.length - 1];
        onRemove?.(removed);
        setValue(arr.slice(0, -1));
      }
    }

    if (!combobox.dropdownOpened) {
      return;
    }

    const index = combobox.getSelectedOptionIndex();
    if (index < 0 || index >= flatNodesRef.current.length) {
      return;
    }

    const currentNode = flatNodesRef.current[index];

    if (event.key === 'ArrowRight') {
      if (currentNode.hasChildren && !currentNode.expanded) {
        event.preventDefault();
        toggleExpand(currentNode.node.value);
      }
    }

    if (event.key === 'ArrowLeft') {
      if (currentNode.hasChildren && currentNode.expanded) {
        event.preventDefault();
        toggleExpand(currentNode.node.value);
      } else if (currentNode.parent) {
        event.preventDefault();
        const parentIndex = flatNodesRef.current.findIndex(
          (n) => n.node.value === currentNode.parent
        );
        if (parentIndex >= 0) {
          combobox.selectOption(parentIndex);
        }
      }
    }
  };

  useEffect(() => {
    if (mode !== 'single' || !searchable) {
      return;
    }
    if (value === null) {
      handleSearchChange('');
    } else if (typeof value === 'string') {
      handleSearchChange(getNodeLabel(value));
    }
  }, [value]);

  const prevDropdownOpenedRef = useRef(false);
  useEffect(() => {
    if (combobox.dropdownOpened && !prevDropdownOpenedRef.current && searchable && _value) {
      const targets = Array.isArray(_value) ? _value : [_value];
      const newExpanded = { ..._expandedState };
      let changed = false;
      for (const target of targets) {
        const ancestors = getAncestorsToNode(target as string, data);
        if (ancestors) {
          for (const a of ancestors) {
            if (!newExpanded[a]) {
              newExpanded[a] = true;
              changed = true;
            }
          }
        }
      }
      if (changed) {
        setExpandedState(newExpanded);
        requestAnimationFrame(() => {
          combobox.updateSelectedOptionIndex('active', { scrollIntoView: true });
        });
      }
    }
    prevDropdownOpenedRef.current = combobox.dropdownOpened;
  });

  const clearButton = (
    <Combobox.ClearButton
      {...clearButtonProps}
      onClear={() => {
        onClear?.();
        setValue(isMulti ? [] : null);
        handleSearchChange('');
        combobox.focusTarget();
      }}
    />
  );

  const hasValue = isMulti
    ? Array.isArray(_value) && _value.length > 0
    : _value != null && _value !== '';
  const _clearable = clearable && hasValue && !disabled && !readOnly;

  const singleDisplayLabel = useMemo(() => {
    if (mode !== 'single' || !_value) {
      return '';
    }
    return getNodeLabel(_value as string);
  }, [mode, _value, nodeLookup]);

  const displayValues = useMemo(() => {
    if (!isMulti || !Array.isArray(_value)) {
      return [];
    }
    return _value as string[];
  }, [isMulti, _value]);

  const pillsListStyle =
    _clearable && isMulti
      ? { paddingInlineEnd: clearSectionOffset[size as string] ?? clearSectionOffset.sm }
      : undefined;

  const visiblePills =
    maxDisplayedValues != null ? displayValues.slice(0, maxDisplayedValues) : displayValues;

  const overflowCount =
    maxDisplayedValues != null ? Math.max(0, displayValues.length - maxDisplayedValues) : 0;

  const pills = visiblePills.map((item, index) => (
    <Pill
      key={`${item}-${index}`}
      withRemoveButton={!readOnly}
      onRemove={() => {
        if (isCheckbox) {
          const childLeaves = checkStrictly ? [item] : getChildrenNodesValues(item, data);
          const newInternal = internalChecked.filter((v) => !childLeaves.includes(v));
          setValue(checkedToValue(newInternal, data, checkedStrategy!));
        } else {
          setValue((_value as string[]).filter((v: string) => v !== item));
        }
        onRemove?.(item);
      }}
      unstyled={unstyled}
      disabled={disabled}
      {...getStyles('pill')}
    >
      {getNodeLabel(item)}
    </Pill>
  ));

  if (overflowCount > 0) {
    const overflowContent =
      typeof maxDisplayedValuesContent === 'function'
        ? maxDisplayedValuesContent(overflowCount)
        : maxDisplayedValuesContent || `+${overflowCount} more`;
    pills.push(
      <Pill key="__overflow" unstyled={unstyled} disabled={disabled} {...getStyles('pill')}>
        {overflowContent}
      </Pill>
    );
  }

  const isEmpty = flatNodes.length === 0;

  const options = flatNodes.map((flatNode) => {
    const isSelected =
      mode === 'single'
        ? _value === flatNode.node.value
        : mode === 'multiple'
          ? ((_value as string[]) || []).includes(flatNode.node.value)
          : false;

    const nodeChecked = isCheckbox
      ? checkStrictly
        ? internalChecked.includes(flatNode.node.value)
        : isNodeChecked(flatNode.node.value, data, internalChecked)
      : false;

    const nodeIndeterminate =
      isCheckbox && !checkStrictly
        ? isNodeIndeterminate(flatNode.node.value, data, internalChecked)
        : false;

    return (
      <TreeSelectOption
        key={flatNode.node.value}
        node={flatNode.node}
        level={flatNode.level}
        expanded={flatNode.expanded}
        hasChildren={flatNode.hasChildren}
        selected={isSelected}
        checked={nodeChecked}
        indeterminate={nodeIndeterminate}
        showCheckbox={isCheckbox}
        isLastChild={flatNode.isLastChild}
        lineGuides={flatNode.lineGuides}
        withLines={!!withLines}
        onToggleExpand={toggleExpand}
        renderNode={renderNode}
        chevronAriaLabels={chevronAriaLabels}
      />
    );
  });

  const dropdown = (
    <Combobox.Dropdown hidden={readOnly || disabled}>
      <Combobox.Options
        className={classes.optionsWrapper}
        aria-multiselectable={isMulti || undefined}
      >
        <ScrollArea.Autosize
          mah={maxDropdownHeight ?? 220}
          type="scroll"
          scrollbarSize="var(--combobox-padding)"
          offsetScrollbars="y"
          {...scrollAreaProps}
        >
          {options}
        </ScrollArea.Autosize>
        {isEmpty && nothingFoundMessage && <Combobox.Empty>{nothingFoundMessage}</Combobox.Empty>}
      </Combobox.Options>
    </Combobox.Dropdown>
  );

  if (isMulti) {
    return (
      <>
        <Combobox
          store={combobox}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          size={size}
          readOnly={readOnly}
          __staticSelector="TreeSelect"
          attributes={attributes}
          onOptionSubmit={handleOptionSubmit}
          {...comboboxProps}
        >
          <Combobox.DropdownTarget>
            <PillsInput
              {...styleProps}
              __staticSelector="TreeSelect"
              classNames={resolvedClassNames}
              styles={resolvedStyles}
              unstyled={unstyled}
              size={size}
              className={className}
              style={style}
              variant={variant}
              disabled={disabled}
              radius={radius}
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
              rightSectionWidth={rightSectionWidth}
              rightSectionProps={rightSectionProps}
              leftSection={leftSection}
              leftSectionWidth={leftSectionWidth}
              leftSectionPointerEvents={leftSectionPointerEvents}
              leftSectionProps={leftSectionProps}
              inputContainer={inputContainer}
              inputWrapperOrder={inputWrapperOrder}
              withAsterisk={withAsterisk}
              labelProps={labelProps}
              descriptionProps={descriptionProps}
              errorProps={errorProps}
              wrapperProps={wrapperProps}
              description={description}
              label={label}
              error={error}
              withErrorStyles={withErrorStyles}
              __stylesApiProps={{
                ...props,
                rightSectionPointerEvents: rightSectionPointerEvents || 'none',
                multiline: true,
              }}
              pointer={!searchable}
              onClick={() => (searchable ? combobox.openDropdown() : combobox.toggleDropdown())}
              data-expanded={combobox.dropdownOpened || undefined}
              id={_id}
              required={required}
              mod={mod}
              attributes={attributes}
            >
              <Pill.Group
                attributes={attributes}
                disabled={disabled}
                unstyled={unstyled}
                {...getStyles('pillsList', { style: pillsListStyle })}
              >
                {pills}
                <Combobox.EventsTarget autoComplete={autoComplete}>
                  <PillsInput.Field
                    {...rest}
                    id={_id}
                    placeholder={placeholder}
                    type={!searchable && !placeholder ? 'hidden' : 'visible'}
                    {...getStyles('inputField')}
                    unstyled={unstyled}
                    onFocus={(event) => {
                      onFocus?.(event);
                      if (openOnFocus && searchable) {
                        combobox.openDropdown();
                      }
                    }}
                    onBlur={(event) => {
                      onBlur?.(event);
                      combobox.closeDropdown();
                      handleSearchChange('');
                    }}
                    onKeyDown={handleKeyDown}
                    value={_searchValue}
                    onChange={(event) => {
                      handleSearchChange(event.currentTarget.value);
                      if (searchable) {
                        combobox.openDropdown();
                      }
                    }}
                    disabled={disabled}
                    readOnly={readOnly || !searchable}
                    pointer={!searchable}
                  />
                </Combobox.EventsTarget>
              </Pill.Group>
            </PillsInput>
          </Combobox.DropdownTarget>
          {dropdown}
        </Combobox>
        <Combobox.HiddenInput
          name={name}
          valuesDivider={hiddenInputValuesDivider}
          value={_value}
          form={form}
          disabled={disabled}
          {...hiddenInputProps}
        />
      </>
    );
  }

  return (
    <>
      <Combobox
        store={combobox}
        __staticSelector="TreeSelect"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        readOnly={readOnly}
        size={size}
        attributes={attributes}
        onOptionSubmit={handleOptionSubmit}
        {...comboboxProps}
      >
        <Combobox.Target targetType={searchable ? 'input' : 'button'} autoComplete={autoComplete}>
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
            __staticSelector="TreeSelect"
            disabled={disabled}
            readOnly={readOnly || !searchable}
            value={searchable ? _searchValue : singleDisplayLabel}
            onChange={(event) => {
              handleSearchChange(event.currentTarget.value);
              combobox.openDropdown();
            }}
            onFocus={(event) => {
              if (openOnFocus && searchable) {
                combobox.openDropdown();
              }
              onFocus?.(event);
            }}
            onBlur={(event) => {
              if (searchable) {
                combobox.closeDropdown();
              }
              handleSearchChange(_value ? getNodeLabel(_value as string) : '');
              onBlur?.(event);
            }}
            onClick={(event) => {
              searchable ? combobox.openDropdown() : combobox.toggleDropdown();
              onClick?.(event);
            }}
            onKeyDown={handleKeyDown}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            pointer={!searchable}
            error={error}
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
            wrapperProps={wrapperProps}
            description={description}
            label={label}
            withErrorStyles={withErrorStyles}
            placeholder={placeholder}
            required={required}
            mod={mod}
          />
        </Combobox.Target>
        {dropdown}
      </Combobox>
      <Combobox.HiddenInput
        value={_value}
        name={name}
        form={form}
        disabled={disabled}
        {...hiddenInputProps}
      />
    </>
  );
});

TreeSelect.classes = { ...InputBase.classes, ...Combobox.classes };
TreeSelect.displayName = '@mantine/core/TreeSelect';
