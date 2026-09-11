import {
  assignRef,
  useId,
  useScrollSpy,
  UseScrollSpyHeadingData,
  UseScrollSpyOptions,
} from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getRadius,
  getSize,
  MantineColor,
  MantineRadius,
  MantineSize,
  noop,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';
import classes from './TableOfContents.module.css';

export type TableOfContentsStylesNames = 'root' | 'control';
export type TableOfContentsVariant = 'rail' | 'filled' | 'light' | 'none';
export type TableOfContentsCssVariables = {
  root:
    | '--toc-bg'
    | '--toc-color'
    | '--toc-rail-color'
    | '--toc-size'
    | '--toc-padding-y'
    | '--toc-padding-x'
    | '--toc-depth-offset'
    | '--toc-radius';
};

export interface InitialTableOfContentsData {
  /** Heading depth, 1-6 */
  depth: number;

  /** Heading text content value */
  value: string;

  /** Heading id, must be unique, used as `key` */
  id?: string;
}

export interface TableOfContentsGetControlPropsPayload {
  /** True if the associated heading is currently the best match in the viewport */
  active: boolean;

  /** Data passed down from `use-scroll-spy` hook: depth, id, value */
  data: UseScrollSpyHeadingData;
}

export interface TableOfContentsProps
  extends BoxProps, StylesApiProps<TableOfContentsFactory>, ElementProps<'div'> {
  /** Key of `theme.colors` or any valid CSS color value, controls active control background for `filled` and `light` variants and bar color for `rail` variant @default theme.primaryColor */
  color?: MantineColor;

  /** Controls font-size, padding and depth offset of controls, custom string and number values change only font-size @default 'sm' */
  size?: MantineSize | (string & {}) | number;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** Options passed down to `use-scroll-spy` hook */
  scrollSpyOptions?: UseScrollSpyOptions;

  /** Data used to render content until actual values are retrieved from the DOM */
  initialData?: InitialTableOfContentsData[];

  /** A function to pass props down to controls, accepts values from `use-scroll-spy` hook as an argument and active state. */
  getControlProps?: (
    payload: TableOfContentsGetControlPropsPayload
  ) => UnstyledButtonProps & ElementProps<'button'> & Record<`data-${string}`, any>;

  /** Minimum `depth` value that requires offset, `1` by default */
  minDepthToOffset?: number;

  /** Offset of nested controls, multiplied by (`depth` - `minDepthToOffset`) and added to the horizontal padding, by default depends on `size` (`12px` for `size="sm"`) */
  depthOffset?: number | string;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, ignored for `rail` variant @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Controls active control styles: `rail` displays a bar at the start of the active control over a neutral background, `filled` and `light` use the corresponding color variant, `none` removes active and hover styles @default 'rail' */
  variant?: TableOfContentsVariant;

  /** If set, a vertical guideline is displayed at the start of the list, applies only to `rail` variant @default true */
  withGuideline?: boolean;

  /** A function to reinitialize headings from `use-scroll-spy` hook */
  reinitializeRef?: React.RefObject<() => void>;
}

export type TableOfContentsFactory = Factory<{
  props: TableOfContentsProps;
  ref: HTMLDivElement;
  stylesNames: TableOfContentsStylesNames;
  vars: TableOfContentsCssVariables;
  variant: TableOfContentsVariant;
}>;

const defaultProps = {
  variant: 'rail',
  withGuideline: true,
  getControlProps: ({ data }) => ({
    children: data.value,
  }),
} satisfies Partial<TableOfContentsProps>;

const NAMED_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

const varsResolver = createVarsResolver<TableOfContentsFactory>(
  (theme, { color, size, variant, autoContrast, depthOffset, radius }) => {
    const isRail = variant === 'rail';
    const namedSize = typeof size === 'string' && NAMED_SIZES.includes(size) ? size : undefined;
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: isRail ? 'filled' : variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--toc-bg': !isRail && variant !== 'none' ? colors.background : undefined,
        '--toc-color': !isRail && variant !== 'none' ? colors.color : undefined,
        '--toc-rail-color': isRail ? colors.background : undefined,
        '--toc-size': getFontSize(size),
        '--toc-padding-y': getSize(namedSize, 'toc-padding-y'),
        '--toc-padding-x': getSize(namedSize, 'toc-padding-x'),
        '--toc-depth-offset':
          depthOffset === undefined ? getSize(namedSize, 'toc-depth-offset') : rem(depthOffset),
        '--toc-radius': getRadius(radius),
      },
    };
  }
);

export const TableOfContents = factory<TableOfContentsFactory>((_props) => {
  const props = useProps('TableOfContents', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    autoContrast,
    scrollSpyOptions,
    initialData,
    getControlProps,
    minDepthToOffset,
    depthOffset,
    variant,
    radius,
    withGuideline,
    reinitializeRef,
    attributes,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<TableOfContentsFactory>({
    name: 'TableOfContents',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const idBase = useId();
  const spy = useScrollSpy(scrollSpyOptions);

  assignRef(reinitializeRef, spy.reinitialize);

  const headingsData = (
    spy.initialized ? spy.data : initialData || []
  ) as UseScrollSpyHeadingData[];

  const controls = headingsData.map((data, index) => {
    const controlProps = getControlProps?.({
      active: index === spy.active,
      data: { ...data, getNode: data.getNode || noop },
    });

    return (
      <UnstyledButton
        key={data.id || `${idBase}-${index}`}
        __vars={{ '--depth-offset': `${data.depth - (minDepthToOffset ?? 1)}` }}
        data-active={index === spy.active || undefined}
        variant={variant}
        {...controlProps}
        {...getStyles('control', {
          className: controlProps?.className,
          style: controlProps?.style,
        })}
      />
    );
  });

  return (
    <Box
      variant={variant}
      mod={[{ 'with-guideline': withGuideline && variant === 'rail' }, mod]}
      {...getStyles('root')}
      {...others}
    >
      {controls}
    </Box>
  );
});

TableOfContents.displayName = '@mantine/core/TableOfContents';
TableOfContents.classes = classes;
TableOfContents.varsResolver = varsResolver;

export namespace TableOfContents {
  export type Props = TableOfContentsProps;
  export type StylesNames = TableOfContentsStylesNames;
  export type CssVariables = TableOfContentsCssVariables;
  export type Factory = TableOfContentsFactory;
  export type Variant = TableOfContentsVariant;
}
