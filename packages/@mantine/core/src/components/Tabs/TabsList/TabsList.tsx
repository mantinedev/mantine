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

export type TabsListStylesNames = 'list';

export interface TabsListProps
  extends BoxProps,
    CompoundStylesApiProps<TabsListFactory>,
    ElementProps<'div'> {
  /** `Tabs.Tab` components */
  children: React.ReactNode;

  /** Determines whether tabs should take all available space @default `false` */
  grow?: boolean;

  /** Tabs alignment @default `flex-start` */
  justify?: React.CSSProperties['justifyContent'];
}

export type TabsListFactory = Factory<{
  props: TabsListProps;
  ref: HTMLDivElement;
  stylesNames: TabsListStylesNames;
  compound: true;
}>;

export const TabsList = factory<TabsListFactory>((_props) => {
  const props = useProps('TabsList', null, _props);
  const { children, className, grow, justify, classNames, styles, style, mod, ...others } = props;

  const ctx = useTabsContext();

  return (
    <Box
      {...others}
      {...ctx.getStyles('list', {
        className,
        style,
        classNames,
        styles,
        props,
        variant: ctx.variant,
      })}
      role="tablist"
      variant={ctx.variant}
      mod={[
        {
          grow,
          orientation: ctx.orientation,
          placement: ctx.orientation === 'vertical' && ctx.placement,
          inverted: ctx.inverted,
        },
        mod,
      ]}
      aria-orientation={ctx.orientation}
      __vars={{ '--tabs-justify': justify }}
    >
      {children}
    </Box>
  );
});

TabsList.classes = classes;
TabsList.displayName = '@mantine/core/TabsList';
