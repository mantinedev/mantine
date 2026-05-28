import { use } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  MantineColor,
  useProps,
} from '../../../core';
import { CheckIcon } from '../../Checkbox/CheckIcon';
import { MenuCheckboxGroupContext } from '../MenuCheckboxGroup/MenuCheckboxGroup.context';
import { useMenuContext } from '../Menu.context';
import { MenuSelectableItem } from '../MenuSelectableItem/MenuSelectableItem';
import classes from '../Menu.module.css';

export type MenuCheckboxItemStylesNames = 'item' | 'itemLabel' | 'itemSection' | 'itemIndicator';

export interface MenuCheckboxItemProps
  extends
    BoxProps,
    CompoundStylesApiProps<MenuCheckboxItemFactory>,
    ElementProps<'button', 'color' | 'onChange' | 'value'> {
  'data-disabled'?: boolean;

  /** Item label */
  children?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color?: MantineColor;

  /** If set, closes the menu when this item is clicked. By default, checkbox items do not close the menu. */
  closeMenuOnClick?: boolean;

  /** Section displayed at the end of the label */
  rightSection?: React.ReactNode;

  /** Sets disabled attribute, applies disabled styles */
  disabled?: boolean;

  /** Value of the checkbox item. When used inside `Menu.CheckboxGroup`, determines whether the item is checked and what value is added/removed on toggle. */
  value?: string;

  /** Controlled checked state. Overrides selection derived from the parent `Menu.CheckboxGroup`. */
  checked?: boolean;

  /** Uncontrolled default checked state. Ignored when the item is used inside `Menu.CheckboxGroup`. */
  defaultChecked?: boolean;

  /** Called when checked state changes. Overrides `onChange` of the parent `Menu.CheckboxGroup`. */
  onChange?: (checked: boolean) => void;

  /** Replaces the default check icon rendered in the indicator slot when the item is checked. Overrides `checkIcon` set on `Menu`. */
  checkIcon?: React.ReactNode;
}

export type MenuCheckboxItemFactory = Factory<{
  props: MenuCheckboxItemProps;
  ref: HTMLButtonElement;
  stylesNames: MenuCheckboxItemStylesNames;
  compound: true;
}>;

export const MenuCheckboxItem = factory<MenuCheckboxItemFactory>((_props) => {
  const props = useProps('MenuCheckboxItem', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    color,
    closeMenuOnClick,
    rightSection,
    children,
    disabled,
    'data-disabled': dataDisabled,
    value,
    checked,
    defaultChecked,
    onChange,
    checkIcon,
    ref,
    ...others
  } = props;

  const ctx = useMenuContext();
  const groupCtx = use(MenuCheckboxGroupContext);

  const groupChecked =
    groupCtx && value !== undefined ? groupCtx.values.includes(value) : undefined;

  const [_checked, setChecked] = useUncontrolled({
    value: checked ?? groupChecked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const resolvedCheckIcon = checkIcon ?? ctx.checkIcon ?? <CheckIcon size={10} />;

  return (
    <MenuSelectableItem
      role="menuitemcheckbox"
      checked={_checked}
      indicator={resolvedCheckIcon}
      onSelect={() => {
        if (onChange) {
          setChecked(!_checked);
        } else if (groupCtx && value !== undefined) {
          groupCtx.onChange(value);
        } else {
          setChecked(!_checked);
        }
      }}
      color={color}
      closeMenuOnClick={closeMenuOnClick}
      rightSection={rightSection}
      disabled={disabled}
      dataDisabled={dataDisabled}
      className={className}
      style={style}
      styles={styles}
      classNames={classNames}
      buttonRef={ref}
      others={others}
    >
      {children}
    </MenuSelectableItem>
  );
});

MenuCheckboxItem.classes = classes;
MenuCheckboxItem.displayName = '@mantine/core/MenuCheckboxItem';
