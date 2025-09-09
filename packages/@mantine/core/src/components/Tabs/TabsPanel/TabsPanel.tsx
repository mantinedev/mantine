import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useTabsContext } from '../Tabs.context';
import classes from '../Tabs.module.css';

export type TabsPanelStylesNames = 'panel';

export interface TabsPanelProps
  extends BoxProps,
    CompoundStylesApiProps<TabsPanelFactory>,
    ElementProps<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** If set, the content is kept mounted, even if `keepMounted` is set `false` in the parent `Tabs` component */
  keepMounted?: boolean;

  /** Value of associated control */
  value: string;
}

export type TabsPanelFactory = Factory<{
  props: TabsPanelProps;
  ref: HTMLDivElement;
  stylesNames: TabsPanelStylesNames;
  compound: true;
}>;

export const TabsPanel = factory<TabsPanelFactory>((_props, ref) => {
  const props = useProps('TabsPanel', null, _props);
  const { children, className, value, classNames, styles, style, mod, keepMounted, ...others } =
    props;

  const ctx = useTabsContext();

  const active = ctx.value === value;
  const content = ctx.keepMounted || keepMounted ? children : active ? children : null;

  return (
    <Box
      {...ctx.getStyles('panel', {
        className,
        classNames,
        styles,
        style: [style, !active ? { display: 'none' } : undefined],
        props,
      })}
      ref={ref}
      mod={[{ orientation: ctx.orientation }, mod]}
      role="tabpanel"
      id={ctx.getPanelId(value)}
      aria-labelledby={ctx.getTabId(value)}
      {...others}
    >
      {content}
    </Box>
  );
});

TabsPanel.classes = classes;
TabsPanel.displayName = '@mantine/core/TabsPanel';
