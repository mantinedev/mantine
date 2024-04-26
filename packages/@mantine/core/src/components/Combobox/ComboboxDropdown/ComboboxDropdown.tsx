import { factory, Factory, useProps } from '../../../core';
import { Popover, PopoverDropdownProps } from '../../Popover';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxDropdownStylesNames = 'dropdown';

export interface ComboboxDropdownProps extends PopoverDropdownProps {
  /** Determines whether the dropdown should be hidden, for example, when there are no options to display */
  hidden?: boolean;
}

export type ComboboxDropdownFactory = Factory<{
  props: ComboboxDropdownProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxDropdownStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxDropdownProps> = {};

export const ComboboxDropdown = factory<ComboboxDropdownFactory>((props, ref) => {
  const { classNames, styles, className, style, hidden, ...others } = useProps(
    'ComboboxDropdown',
    defaultProps,
    props
  );

  const ctx = useComboboxContext();

  return (
    <Popover.Dropdown
      {...others}
      ref={ref}
      role="presentation"
      data-hidden={hidden || undefined}
      {...ctx.getStyles('dropdown', { className, style, classNames, styles })}
    />
  );
});

ComboboxDropdown.classes = classes;
ComboboxDropdown.displayName = '@mantine/core/ComboboxDropdown';
