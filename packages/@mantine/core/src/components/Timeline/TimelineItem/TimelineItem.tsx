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
import classes from '../Timeline.module.css';

export type TimelineItemStylesNames =
  | 'itemBody'
  | 'itemContent'
  | 'itemBullet'
  | 'item'
  | 'itemTitle';

export interface TimelineItemProps
  extends BoxProps,
    CompoundStylesApiProps<TimelineItemFactory>,
    ElementProps<'div', 'title'> {
  __active?: boolean;
  __lineActive?: boolean;
  __align?: 'right' | 'left';

  /** Item title, displayed next to the bullet */
  title?: React.ReactNode;

  /** Content displayed below the title */
  children?: React.ReactNode;

  /** React node that should be rendered inside the bullet – icon, image, avatar, etc. By default, large white dot is displayed. */
  bullet?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default `'xl'` */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color to control active item colors @default `theme.primaryColor` */
  color?: MantineColor;

  /** Controls line border style @default `'solid'` */
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
    __active,
    __align,
    __lineActive,
    __vars,
    bullet,
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

  return (
    <Box
      {...ctx.getStyles('item', { ...stylesApiProps, className, style })}
      mod={[{ 'line-active': __lineActive, active: __active }, mod]}
      __vars={{
        '--tli-radius': radius ? getRadius(radius) : undefined,
        '--tli-color': color ? getThemeColor(color, theme) : undefined,
        '--tli-border-style': lineVariant || undefined,
      }}
      {...others}
    >
      <Box
        {...ctx.getStyles('itemBullet', stylesApiProps)}
        mod={{ 'with-child': !!bullet, align: __align, active: __active }}
      >
        {bullet}
      </Box>

      <div {...ctx.getStyles('itemBody', stylesApiProps)}>
        {title && <div {...ctx.getStyles('itemTitle', stylesApiProps)}>{title}</div>}
        <div {...ctx.getStyles('itemContent', stylesApiProps)}>{children}</div>
      </div>
    </Box>
  );
});

TimelineItem.classes = classes;
TimelineItem.displayName = '@mantine/core/TimelineItem';
