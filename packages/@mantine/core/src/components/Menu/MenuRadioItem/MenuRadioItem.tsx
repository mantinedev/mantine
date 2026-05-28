import { use } from 'react';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  MantineColor,
  useProps,
} from '../../../core';
import { RadioIcon } from '../../Radio/RadioIcon';
import { useMenuContext } from '../Menu.context';
import { MenuRadioGroupContext } from '../MenuRadioGroup/MenuRadioGroup.context';
import { MenuSelectableItem } from '../MenuSelectableItem/MenuSelectableItem';
import classes from '../Menu.module.css';

export type MenuRadioItemStylesNames = 'item' | 'itemLabel' | 'itemSection' | 'itemIndicator';

export interface MenuRadioItemProps
  extends
    BoxProps,
    CompoundStylesApiProps<MenuRadioItemFactory>,
    ElementProps<'button', 'color' | 'onChange' | 'value'> {
  'data-disabled'?: boolean;

  /** Item label */
  children?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color?: MantineColor;

  /** If set, closes the menu when this item is clicked. By default, radio items do not close the menu. */
  closeMenuOnClick?: boolean;

  /** Section displayed at the end of the label */
  rightSection?: React.ReactNode;

  /** Sets disabled attribute, applies disabled styles */
  disabled?: boolean;

  /** Value of the radio item. Used by the parent `Menu.RadioGroup` to determine which item is selected. */
  value: string;

  /** Overrides selected state determined by the parent `Menu.RadioGroup`. */
  checked?: boolean;

  /** Called with the item value when item is selected. Overrides `onChange` of the parent `Menu.RadioGroup`. */
  onChange?: (value: string) => void;

  /** Replaces the default radio indicator rendered when the item is selected. Overrides `checkIcon` set on `Menu`. */
  checkIcon?: React.ReactNode;
}

export type MenuRadioItemFactory = Factory<{
  props: MenuRadioItemProps;
  ref: HTMLButtonElement;
  stylesNames: MenuRadioItemStylesNames;
  compound: true;
}>;

export const MenuRadioItem = factory<MenuRadioItemFactory>((_props) => {
  const props = useProps('MenuRadioItem', null, _props);
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
    onChange,
    checkIcon,
    ref,
    ...others
  } = props;

  const ctx = useMenuContext();
  const groupCtx = use(MenuRadioGroupContext);

  const _checked = checked ?? (groupCtx ? groupCtx.value === value : false);
  const resolvedCheckIcon = checkIcon ?? ctx.checkIcon ?? <RadioIcon size={5} />;

  return (
    <MenuSelectableItem
      role="menuitemradio"
      checked={_checked}
      indicator={resolvedCheckIcon}
      onSelect={() => {
        if (!_checked) {
          if (onChange) {
            onChange(value);
          } else if (groupCtx) {
            groupCtx.onChange(value);
          }
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

MenuRadioItem.classes = classes;
MenuRadioItem.displayName = '@mantine/core/MenuRadioItem';
