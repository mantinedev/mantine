import {
  CompoundStylesApiProps,
  createScopedKeydownHandler,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  useDirection,
  useMantineTheme,
  useProps,
} from '../../../core';
import { UnstyledButton, UnstyledButtonProps } from '../../UnstyledButton';
import { useTabsContext } from '../Tabs.context';
import classes from '../Tabs.module.css';

export type TabsTabStylesNames = 'tab' | 'tabSection' | 'tabLabel';

export interface TabsTabProps
  extends Omit<UnstyledButtonProps, 'classNames' | 'styles' | 'vars'>,
    CompoundStylesApiProps<TabsTabFactory>,
    ElementProps<'button'> {
  /** Value of associated panel */
  value: string;

  /** Tab label */
  children?: React.ReactNode;

  /** Content displayed on the right side of the label, for example, icon */
  rightSection?: React.ReactNode;

  /** Content displayed on the left side of the label, for example, icon */
  leftSection?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color, controls control color based on `variant` */
  color?: MantineColor;
}

export type TabsTabFactory = Factory<{
  props: TabsTabProps;
  ref: HTMLButtonElement;
  stylesNames: TabsTabStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TabsTabProps> = {};

export const TabsTab = factory<TabsTabFactory>((_props, ref) => {
  const props = useProps('TabsTab', defaultProps, _props);
  const {
    className,
    children,
    rightSection,
    leftSection,
    value,
    onClick,
    onKeyDown,
    disabled,
    color,
    style,
    classNames,
    styles,
    vars,
    mod,
    tabIndex,
    ...others
  } = props;

  const theme = useMantineTheme();
  const { dir } = useDirection();
  const ctx = useTabsContext();
  const active = value === ctx.value;
  const activateTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ctx.onChange(ctx.allowTabDeactivation ? (value === ctx.value ? null : value) : value);
    onClick?.(event);
  };

  const stylesApiProps = { classNames, styles, props };

  return (
    <UnstyledButton
      {...others}
      {...ctx.getStyles('tab', { className, style, variant: ctx.variant, ...stylesApiProps })}
      disabled={disabled}
      unstyled={ctx.unstyled}
      variant={ctx.variant}
      mod={[
        {
          active,
          disabled,
          orientation: ctx.orientation,
          inverted: ctx.inverted,
          placement: ctx.orientation === 'vertical' && ctx.placement,
        },
        mod,
      ]}
      ref={ref}
      role="tab"
      id={ctx.getTabId(value)}
      aria-selected={active}
      tabIndex={tabIndex !== undefined ? tabIndex : active || ctx.value === null ? 0 : -1}
      aria-controls={ctx.getPanelId(value)}
      onClick={activateTab}
      __vars={{ '--tabs-color': color ? getThemeColor(color, theme) : undefined }}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || 'horizontal',
        dir,
        onKeyDown,
      })}
    >
      {leftSection && (
        <span {...ctx.getStyles('tabSection', stylesApiProps)} data-position="left">
          {leftSection}
        </span>
      )}
      {children && <span {...ctx.getStyles('tabLabel', stylesApiProps)}>{children}</span>}
      {rightSection && (
        <span {...ctx.getStyles('tabSection', stylesApiProps)} data-position="right">
          {rightSection}
        </span>
      )}
    </UnstyledButton>
  );
});

TabsTab.classes = classes;
TabsTab.displayName = '@mantine/core/TabsTab';
