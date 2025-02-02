import { useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  createScopedKeydownHandler,
  MantineColor,
  parseThemeColor,
  polymorphicFactory,
  PolymorphicFactory,
  useDirection,
  useMantineTheme,
  useProps,
} from '../../../core';
import { AccordionChevron } from '../../Accordion';
import { UnstyledButton } from '../../UnstyledButton';
import { useMenuContext } from '../Menu.context';
import classes from '../Menu.module.css';

export type SubMenuItemStylesNames = 'item' | 'itemLabel' | 'itemSection';

export interface SubMenuItemProps extends BoxProps, CompoundStylesApiProps<SubMenuItemFactory> {
  'data-disabled'?: boolean;

  /** Item label */
  children?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color?: MantineColor;

  /** Section displayed on the left side of the label */
  leftSection?: React.ReactNode;

  /** Section displayed on the right side of the label */
  rightSection?: React.ReactNode;

  /** Disables item */
  disabled?: boolean;
}

export type SubMenuItemFactory = PolymorphicFactory<{
  props: SubMenuItemProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
  stylesNames: SubMenuItemStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SubMenuItemProps> = {};

export const SubMenuItem = polymorphicFactory<SubMenuItemFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    color,
    leftSection,
    rightSection,
    children,
    disabled,
    'data-disabled': dataDisabled,
    ...others
  } = useProps('SubMenuItem', defaultProps, props);

  const ctx = useMenuContext();
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const itemRef = useRef<HTMLButtonElement>(null);
  const _others: any = others;

  const colors = color ? theme.variantColorResolver({ color, theme, variant: 'light' }) : undefined;
  const parsedThemeColor = color ? parseThemeColor({ color, theme }) : null;

  return (
    <UnstyledButton
      {...others}
      unstyled={ctx.unstyled}
      tabIndex={ctx.menuItemTabIndex}
      {...ctx.getStyles('item', { className, style, styles, classNames })}
      ref={useMergedRef(itemRef, ref)}
      role="menuitem"
      disabled={disabled}
      data-menu-item
      data-sub-menu-item
      data-disabled={disabled || dataDisabled || undefined}
      data-mantine-stop-propagation
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[data-menu-item]:not([data-disabled])',
        parentSelector: '[data-menu-dropdown]',
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: 'vertical',
        onKeyDown: _others.onKeyDown,
      })}
      __vars={{
        '--menu-item-color':
          parsedThemeColor?.isThemeColor && parsedThemeColor?.shade === undefined
            ? `var(--mantine-color-${parsedThemeColor.color}-6)`
            : colors?.color,
        '--menu-item-hover': colors?.hover,
      }}
    >
      {leftSection && (
        <div {...ctx.getStyles('itemSection', { styles, classNames })} data-position="left">
          {leftSection}
        </div>
      )}
      {children && <div {...ctx.getStyles('itemLabel', { styles, classNames })}>{children}</div>}
      {(rightSection && (
        <div {...ctx.getStyles('itemSection', { styles, classNames })} data-position="right">
          {rightSection}
        </div>
      )) || <AccordionChevron {...ctx.getStyles('chevron')} size={14} />}
    </UnstyledButton>
  );
});

SubMenuItem.classes = classes;
SubMenuItem.displayName = '@mantine/core/SubMenuItem';
