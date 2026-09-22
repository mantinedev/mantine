import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  useMantineTheme,
  useProps,
} from '../../../core';
import { useTimelineContext } from '../Timeline.context';
import { resolveItemProps } from './resolve-item-props';
import classes from '../Timeline.module.css';

export type TimelineItemStylesNames =
  | 'itemBody'
  | 'itemContent'
  | 'itemBullet'
  | 'item'
  | 'itemTitle'
  | 'itemOpposite';

export interface TimelineItemProps
  extends BoxProps, CompoundStylesApiProps<TimelineItemFactory>, ElementProps<'div', 'title'> {
  /** 0-based item index. Inferred from the position of the component in `Timeline` children when not set – declare it when `Timeline.Item` is wrapped in another component */
  index?: number;

  /** Marks the item as active, derived from `index` and the active item of the parent `Timeline` when not set */
  active?: boolean;

  /** Marks the line after the item as active, derived from `index` and the active item of the parent `Timeline` when not set */
  lineActive?: boolean;

  /** Item title, displayed next to the bullet */
  title?: React.ReactNode;

  /** Content displayed below the title */
  children?: React.ReactNode;

  /** React node that should be rendered inside the bullet – icon, image, avatar, etc. By default, large white dot is displayed. */
  bullet?: React.ReactNode;

  /** Content displayed on the opposite side of the timeline item */
  opposite?: React.ReactNode;

  /** If set, switches the position of content and opposite @default false */
  alternate?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default 'xl' */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color to control active item colors @default theme.primaryColor */
  color?: MantineColor;

  /** Controls line border style @default 'solid' */
  lineVariant?: 'solid' | 'dashed' | 'dotted';
}

export type TimelineItemFactory = Factory<{
  props: TimelineItemProps;
  ref: HTMLDivElement;
  stylesNames: TimelineItemStylesNames;
  compound: true;
}>;

export const TimelineItem = factory<TimelineItemFactory>((_props) => {
  const props = useProps('TimelineItem', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    index,
    active,
    lineActive,
    __vars,
    bullet,
    opposite,
    alternate,
    radius,
    color,
    lineVariant,
    children,
    title,
    mod,
    ...others
  } = props;

  const ctx = useTimelineContext();
  const theme = useMantineTheme();

  const stylesApiProps = { classNames, styles };
  const resolved = resolveItemProps({ index, active, lineActive, alternate }, ctx);

  const oppositeNode = opposite != null && (
    <div {...ctx.getStyles('itemOpposite', stylesApiProps)}>{opposite}</div>
  );

  const bodyNode = (
    <div {...ctx.getStyles('itemBody', stylesApiProps)}>
      {title && <div {...ctx.getStyles('itemTitle', stylesApiProps)}>{title}</div>}
      <div {...ctx.getStyles('itemContent', stylesApiProps)}>{children}</div>
    </div>
  );

  return (
    <Box
      {...ctx.getStyles('item', { ...stylesApiProps, className, style })}
      mod={[
        {
          'line-active': resolved.lineActive,
          active: resolved.active,
          first: resolved.first,
          last: resolved.last,
          alternate,
        },
        mod,
      ]}
      __vars={{
        '--tli-radius': radius !== undefined ? getRadius(radius) : undefined,
        '--tli-color': color ? getThemeColor(color, theme) : undefined,
        '--tli-border-style': lineVariant || undefined,
      }}
      {...others}
    >
      {resolved.bodyFirst ? bodyNode : oppositeNode}

      <Box
        {...ctx.getStyles('itemBullet', stylesApiProps)}
        mod={{ 'with-child': !!bullet, align: resolved.align, active: resolved.active }}
      >
        {bullet}
      </Box>

      {resolved.bodyFirst ? oppositeNode : bodyNode}
    </Box>
  );
});

TimelineItem.classes = classes;
TimelineItem.displayName = '@mantine/core/TimelineItem';
