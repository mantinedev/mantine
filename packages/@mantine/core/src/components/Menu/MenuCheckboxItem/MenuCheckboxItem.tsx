import { use, useRef } from 'react';
import { useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  createEventHandler,
  createScopedKeydownHandler,
  ElementProps,
  factory,
  Factory,
  MantineColor,
  parseThemeColor,
  useDirection,
  useMantineTheme,
  useProps,
} from '../../../core';
import { CheckIcon } from '../../Checkbox/CheckIcon';
import { UnstyledButton } from '../../UnstyledButton';
import { useMenuContext } from '../Menu.context';
import { SubMenuContext } from '../MenuSub/MenuSub.context';
import classes from '../Menu.module.css';

export type MenuCheckboxItemStylesNames = 'item' | 'itemLabel' | 'itemSection' | 'itemIndicator';

export interface MenuCheckboxItemProps
  extends
    BoxProps,
    CompoundStylesApiProps<MenuCheckboxItemFactory>,
    ElementProps<'button', 'color' | 'onChange'> {
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

  /** Controlled checked state */
  checked?: boolean;

  /** Uncontrolled default checked state */
  defaultChecked?: boolean;

  /** Called when checked state changes */
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
    checked,
    defaultChecked,
    onChange,
    checkIcon,
    ref,
    ...others
  } = props;

  const ctx = useMenuContext();
  const subCtx = use(SubMenuContext);
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const itemRef = useRef<HTMLButtonElement>(null);
  const _others: any = others;

  const [_checked, setChecked] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const handleClick = createEventHandler<any>(_others.onClick, () => {
    if (dataDisabled) {
      return;
    }
    setChecked(!_checked);
    if (closeMenuOnClick) {
      ctx.closeDropdownImmediately();
    }
  });

  const handleMouseMove = createEventHandler<any>(_others.onMouseMove, () => {
    if (!ctx.hasSearch) {
      return;
    }
    const dropdown = itemRef.current?.closest('[data-menu-dropdown]');
    if (!dropdown) {
      return;
    }
    dropdown.querySelectorAll<HTMLElement>('[data-menu-active]').forEach((node) => {
      if (node !== itemRef.current && node.closest('[data-menu-dropdown]') === dropdown) {
        node.removeAttribute('data-menu-active');
      }
    });
  });

  const colors = color ? theme.variantColorResolver({ color, theme, variant: 'light' }) : undefined;
  const parsedThemeColor = color ? parseThemeColor({ color, theme }) : null;

  const handleKeydown = createEventHandler<any>(_others.onKeyDown, (event) => {
    if (event.key === 'ArrowLeft' && subCtx) {
      subCtx.close();
      subCtx.focusParentItem();
    }
  });

  const resolvedCheckIcon = checkIcon ?? ctx.checkIcon ?? <CheckIcon size={10} />;
  const renderIndicator = ctx.alignItemsLabels !== 'none' || _checked;

  return (
    <UnstyledButton
      onMouseDown={(event) => event.preventDefault()}
      {...others}
      unstyled={ctx.unstyled}
      tabIndex={ctx.menuItemTabIndex}
      {...ctx.getStyles('item', { className, style, styles, classNames })}
      ref={useMergedRef(itemRef, ref)}
      role="menuitemcheckbox"
      aria-checked={_checked}
      disabled={disabled}
      data-menu-item
      data-checked={_checked || undefined}
      data-disabled={disabled || dataDisabled || undefined}
      data-mantine-stop-propagation
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[data-menu-item]:not([data-disabled])',
        parentSelector: '[data-menu-dropdown]',
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: 'vertical',
        onKeyDown: handleKeydown,
      })}
      __vars={{
        '--menu-item-color':
          parsedThemeColor?.isThemeColor && parsedThemeColor?.shade === undefined
            ? `var(--mantine-color-${parsedThemeColor.color}-6)`
            : colors?.color,
        '--menu-item-hover': colors?.hover,
      }}
    >
      {renderIndicator && (
        <div
          {...ctx.getStyles('itemIndicator', { styles, classNames })}
          data-checked={_checked || undefined}
        >
          {_checked ? resolvedCheckIcon : null}
        </div>
      )}
      {children && (
        <div {...ctx.getStyles('itemLabel', { styles, classNames })} data-menu-item-label>
          {children}
        </div>
      )}
      {rightSection && (
        <div {...ctx.getStyles('itemSection', { styles, classNames })} data-position="right">
          {rightSection}
        </div>
      )}
    </UnstyledButton>
  );
});

MenuCheckboxItem.classes = classes;
MenuCheckboxItem.displayName = '@mantine/core/MenuCheckboxItem';
