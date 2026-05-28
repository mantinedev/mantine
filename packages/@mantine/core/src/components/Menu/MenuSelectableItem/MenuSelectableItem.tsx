import { use, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  createEventHandler,
  createScopedKeydownHandler,
  MantineColor,
  parseThemeColor,
  useDirection,
  useMantineTheme,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { useMenuContext } from '../Menu.context';
import { SubMenuContext } from '../MenuSub/MenuSub.context';

export interface MenuSelectableItemProps {
  role: 'menuitemcheckbox' | 'menuitemradio';
  checked: boolean;
  indicator: React.ReactNode;
  onSelect: () => void;
  color: MantineColor | undefined;
  closeMenuOnClick: boolean | undefined;
  rightSection: React.ReactNode;
  children: React.ReactNode;
  disabled: boolean | undefined;
  dataDisabled: boolean | undefined;
  className: string | undefined;
  style: any;
  styles: any;
  classNames: any;
  buttonRef: React.Ref<HTMLButtonElement> | undefined;
  others: Record<string, any>;
}

export function MenuSelectableItem({
  role,
  checked,
  indicator,
  onSelect,
  color,
  closeMenuOnClick,
  rightSection,
  children,
  disabled,
  dataDisabled,
  className,
  style,
  styles,
  classNames,
  buttonRef,
  others,
}: MenuSelectableItemProps) {
  const ctx = useMenuContext();
  const subCtx = use(SubMenuContext);
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const itemRef = useRef<HTMLButtonElement>(null);

  const handleClick = createEventHandler<any>(others.onClick, () => {
    if (dataDisabled) {
      return;
    }
    onSelect();
    if (closeMenuOnClick) {
      ctx.closeDropdownImmediately();
    }
  });

  const handleMouseMove = createEventHandler<any>(others.onMouseMove, () => {
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

  const handleKeydown = createEventHandler<any>(others.onKeyDown, (event) => {
    if (event.key === 'ArrowLeft' && subCtx) {
      subCtx.close();
      subCtx.focusParentItem();
    }
  });

  const colors = color ? theme.variantColorResolver({ color, theme, variant: 'light' }) : undefined;
  const parsedThemeColor = color ? parseThemeColor({ color, theme }) : null;
  const renderIndicator = ctx.alignItemsLabels !== 'none' || checked;

  return (
    <UnstyledButton
      onMouseDown={(event) => event.preventDefault()}
      {...others}
      unstyled={ctx.unstyled}
      tabIndex={ctx.menuItemTabIndex}
      {...ctx.getStyles('item', { className, style, styles, classNames })}
      ref={useMergedRef(itemRef, buttonRef)}
      role={role}
      aria-checked={checked}
      disabled={disabled}
      data-menu-item
      data-checked={checked || undefined}
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
          data-checked={checked || undefined}
        >
          {checked ? indicator : null}
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
}
