import {
  createVarsResolver,
  ExtendComponent,
  Factory,
  getFontSize,
  getSize,
  MantineSize,
  MantineThemeComponent,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { __PopoverProps, Popover } from '../Popover';
import { ComboboxProvider } from './Combobox.context';
import classes from './Combobox.module.css';
import { ComboboxChevron, ComboboxChevronProps } from './ComboboxChevron/ComboboxChevron';
import {
  ComboboxClearButton,
  ComboboxClearButtonProps,
} from './ComboboxClearButton/ComboboxClearButton';
import { ComboboxDropdown, ComboboxDropdownProps } from './ComboboxDropdown/ComboboxDropdown';
import {
  ComboboxDropdownTarget,
  ComboboxDropdownTargetProps,
} from './ComboboxDropdownTarget/ComboboxDropdownTarget';
import { ComboboxEmpty, ComboboxEmptyProps } from './ComboboxEmpty/ComboboxEmpty';
import {
  ComboboxEventsTarget,
  ComboboxEventsTargetProps,
} from './ComboboxEventsTarget/ComboboxEventsTarget';
import { ComboboxFooter, ComboboxFooterProps } from './ComboboxFooter/ComboboxFooter';
import { ComboboxGroup, ComboboxGroupProps } from './ComboboxGroup/ComboboxGroup';
import { ComboboxHeader, ComboboxHeaderProps } from './ComboboxHeader/ComboboxHeader';
import {
  ComboboxHiddenInput,
  ComboboxHiddenInputProps,
} from './ComboboxHiddenInput/ComboboxHiddenInput';
import { ComboboxOption, ComboboxOptionProps } from './ComboboxOption/ComboboxOption';
import { ComboboxOptions, ComboboxOptionsProps } from './ComboboxOptions/ComboboxOptions';
import { ComboboxSearch, ComboboxSearchProps } from './ComboboxSearch/ComboboxSearch';
import { ComboboxTarget, ComboboxTargetProps } from './ComboboxTarget/ComboboxTarget';
import { ComboboxStore, useCombobox } from './use-combobox/use-combobox';

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

  /** Called when item is selected with the `Enter` key or by clicking it */
  onOptionSubmit?: (value: string, optionProps: ComboboxOptionProps) => void;

  /** Controls items `font-size` and `padding` @default 'sm' */
  size?: MantineSize | (string & {});

  /** Controls `padding` of the dropdown @default 4 */
  dropdownPadding?: React.CSSProperties['padding'];

  /** Determines whether selection should be reset when option is hovered @default false */
  resetSelectionOnOptionHover?: boolean;

  /** Determines whether the `Combobox` value can be changed */
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
    ClearButton: typeof ComboboxClearButton;
    HiddenInput: typeof ComboboxHiddenInput;
  };
}>;

const defaultProps = {
  keepMounted: true,
  withinPortal: true,
  resetSelectionOnOptionHover: false,
  width: 'target',
  transitionProps: { transition: 'fade', duration: 0 },
  size: 'sm',
} satisfies Partial<ComboboxProps>;

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

export const Combobox = (_props: ComboboxProps) => {
  const props = useProps('Combobox', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    children,
    store: controlledStore,
    vars,
    onOptionSubmit,
    onClose,
    size,
    dropdownPadding,
    resetSelectionOnOptionHover,
    __staticSelector,
    readOnly,
    attributes,
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
    attributes,
    vars,
    varsResolver,
  });

  const onDropdownClose = () => {
    onClose?.();
    store.closeDropdown();
  };

  return (
    <ComboboxProvider
      value={{
        getStyles,
        store,
        onOptionSubmit,
        size,
        resetSelectionOnOptionHover,
        readOnly,
      }}
    >
      <Popover
        opened={store.dropdownOpened}
        preventPositionChangeWhenVisible={false}
        {...others}
        onChange={(_opened) => !_opened && onDropdownClose()}
        withRoles={false}
        unstyled={unstyled}
      >
        {children}
      </Popover>
    </ComboboxProvider>
  );
};

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
Combobox.HiddenInput = ComboboxHiddenInput;

export namespace Combobox {
  export type Props = ComboboxProps;
  export type StylesNames = ComboboxStylesNames;
  export type Factory = ComboboxFactory;

  export namespace Dropdown {
    export type Props = ComboboxDropdownProps;
  }

  export namespace Options {
    export type Props = ComboboxOptionsProps;
  }

  export namespace Option {
    export type Props = ComboboxOptionProps;
  }

  export namespace Target {
    export type Props = ComboboxTargetProps;
  }

  export namespace Chevron {
    export type Props = ComboboxChevronProps;
  }

  export namespace Empty {
    export type Props = ComboboxEmptyProps;
  }

  export namespace Search {
    export type Props = ComboboxSearchProps;
  }

  export namespace Footer {
    export type Props = ComboboxFooterProps;
  }

  export namespace Header {
    export type Props = ComboboxHeaderProps;
  }

  export namespace DropdownTarget {
    export type Props = ComboboxDropdownTargetProps;
  }

  export namespace EventsTarget {
    export type Props = ComboboxEventsTargetProps;
  }

  export namespace Group {
    export type Props = ComboboxGroupProps;
  }

  export namespace ClearButton {
    export type Props = ComboboxClearButtonProps;
  }

  export namespace HiddenInput {
    export type Props = ComboboxHiddenInputProps;
  }
}
