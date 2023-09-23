import React from 'react';
import {
  StylesApiProps,
  useProps,
  useStyles,
  Factory,
  createVarsResolver,
  MantineSize,
  getFontSize,
  rem,
  getSize,
  ExtendComponent,
  MantineThemeComponent,
} from '../../core';
import { __PopoverProps, Popover } from '../Popover';
import { useCombobox, ComboboxStore } from './use-combobox/use-combobox';
import { ComboboxProvider } from './Combobox.context';
import { ComboboxTarget } from './ComboboxTarget/ComboboxTarget';
import { ComboboxDropdown } from './ComboboxDropdown/ComboboxDropdown';
import { ComboboxOptions } from './ComboboxOptions/ComboboxOptions';
import { ComboboxOption, ComboboxOptionProps } from './ComboboxOption/ComboboxOption';
import { ComboboxSearch } from './ComboboxSearch/ComboboxSearch';
import { ComboboxEmpty } from './ComboboxEmpty/ComboboxEmpty';
import { ComboboxChevron } from './ComboboxChevron/ComboboxChevron';
import { ComboboxFooter } from './ComboboxFooter/ComboboxFooter';
import { ComboboxHeader } from './ComboboxHeader/ComboboxHeader';
import { ComboboxEventsTarget } from './ComboboxEventsTarget/ComboboxEventsTarget';
import { ComboboxDropdownTarget } from './ComboboxDropdownTarget/ComboboxDropdownTarget';
import { ComboboxGroup } from './ComboboxGroup/ComboboxGroup';
import { ComboboxClearButton } from './ComboboxClearButton/ComboboxClearButton';
import classes from './Combobox.module.css';

export type ComboboxStylesNames =
  | 'options'
  | 'dropdown'
  | 'option'
  | 'search'
  | 'empty'
  | 'footer'
  | 'header'
  | 'group'
  | 'groupLabel';

export type ComboboxCSSVariables = {
  options: '--combobox-option-fz' | '--combobox-option-padding';
  dropdown: '--combobox-padding' | '--combobox-option-fz' | '--combobox-option-padding';
};

export interface ComboboxProps extends __PopoverProps, StylesApiProps<ComboboxFactory> {
  __staticSelector?: string;

  /** Combobox content */
  children?: React.ReactNode;

  /** Combobox store, can be used to control combobox state */
  store?: ComboboxStore;

  /** Called when item is selected with `Enter` key or by clicking it */
  onOptionSubmit?(value: string, optionProps: ComboboxOptionProps): void;

  /** Controls items `font-size` and `padding`, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** Controls `padding` of the dropdown, `4` by default */
  dropdownPadding?: React.CSSProperties['padding'];

  /** Determines whether selection should be reset when option is hovered, `false` by default */
  resetSelectionOnOptionHover?: boolean;

  /** Determines whether Combobox value can be changed */
  readOnly?: boolean;
}

export type ComboboxFactory = Factory<{
  props: ComboboxProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxStylesNames;
  vars: ComboboxCSSVariables;
  staticComponents: {
    Target: typeof ComboboxTarget;
    Dropdown: typeof ComboboxDropdown;
    Options: typeof ComboboxOptions;
    Option: typeof ComboboxOption;
    Search: typeof ComboboxSearch;
    Empty: typeof ComboboxEmpty;
    Chevron: typeof ComboboxChevron;
    Footer: typeof ComboboxFooter;
    Header: typeof ComboboxHeader;
    EventsTarget: typeof ComboboxEventsTarget;
    DropdownTarget: typeof ComboboxDropdownTarget;
    Group: typeof ComboboxGroup;
  };
}>;

const defaultProps: Partial<ComboboxProps> = {
  keepMounted: true,
  withinPortal: true,
  resetSelectionOnOptionHover: false,
  width: 'target',
  transitionProps: { transition: 'fade', duration: 0 },
};

const varsResolver = createVarsResolver<ComboboxFactory>((_, { size, dropdownPadding }) => ({
  options: {
    '--combobox-option-fz': getFontSize(size),
    '--combobox-option-padding': getSize(size, 'combobox-option-padding'),
  },

  dropdown: {
    '--combobox-padding': dropdownPadding === undefined ? undefined : rem(dropdownPadding),
    '--combobox-option-fz': getFontSize(size),
    '--combobox-option-padding': getSize(size, 'combobox-option-padding'),
  },
}));

export function Combobox(_props: ComboboxProps) {
  const props = useProps('Combobox', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    children,
    store: controlledStore,
    vars,
    onOptionSubmit,
    size,
    dropdownPadding,
    resetSelectionOnOptionHover,
    __staticSelector,
    readOnly,
    ...others
  } = props;

  const uncontrolledStore = useCombobox();
  const store = controlledStore || uncontrolledStore;

  const getStyles = useStyles<ComboboxFactory>({
    name: __staticSelector || 'Combobox',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <ComboboxProvider
      value={{
        getStyles,
        store,
        onOptionSubmit,
        size: size!,
        resetSelectionOnOptionHover,
        readOnly,
      }}
    >
      <Popover
        opened={store.dropdownOpened}
        {...others}
        onClose={store.closeDropdown}
        withRoles={false}
        unstyled={unstyled}
      >
        {children}
      </Popover>
    </ComboboxProvider>
  );
}

const extendCombobox = (c: ExtendComponent<ComboboxFactory>): MantineThemeComponent => c;

Combobox.extend = extendCombobox;
Combobox.classes = classes;
Combobox.displayName = '@mantine/core/Combobox';
Combobox.Target = ComboboxTarget;
Combobox.Dropdown = ComboboxDropdown;
Combobox.Options = ComboboxOptions;
Combobox.Option = ComboboxOption;
Combobox.Search = ComboboxSearch;
Combobox.Empty = ComboboxEmpty;
Combobox.Chevron = ComboboxChevron;
Combobox.Footer = ComboboxFooter;
Combobox.Header = ComboboxHeader;
Combobox.EventsTarget = ComboboxEventsTarget;
Combobox.DropdownTarget = ComboboxDropdownTarget;
Combobox.Group = ComboboxGroup;
Combobox.ClearButton = ComboboxClearButton;
