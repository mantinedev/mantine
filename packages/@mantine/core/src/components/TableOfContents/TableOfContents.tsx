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
  MantineColor,
  MantineRadius,
  MantineSize,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';
import classes from './TableOfContents.module.css';

export type TableOfContentsStylesNames = 'root' | 'control';
export type TableOfContentsVariant = 'filled' | 'light' | 'none';
export type TableOfContentsCssVariables = {
  root: '--toc-bg' | '--toc-color' | '--toc-size' | '--toc-depth-offset' | '--toc-radius';
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
  extends BoxProps,
    StylesApiProps<TableOfContentsFactory>,
    ElementProps<'div'> {
  /** Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls font-size and padding of all elements, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;

  /** Options passed down to `use-scroll-spy` hook */
  scrollSpyOptions?: UseScrollSpyOptions;

  /** Data used to render content until actual values are retrieved from the DOM, empty array by default */
  initialData?: InitialTableOfContentsData[];

  /** A function to pass props down to controls, accepts values from `use-scroll-spy` hook as an argument and active state. */
  getControlProps?: (
    payload: TableOfContentsGetControlPropsPayload
  ) => UnstyledButtonProps & ElementProps<'button'> & Record<`data-${string}`, any>;

  /** Minimum `depth` value that requires offset, `1` by default */
  minDepthToOffset?: number;

  /** Controls padding on the left side of control, multiplied by (`depth` - `minDepthToOffset`), `20px` by default  */
  depthOffset?: number | string;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;

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

const defaultProps: Partial<TableOfContentsProps> = {
  getControlProps: ({ data }) => ({
    children: data.value,
  }),
};

const varsResolver = createVarsResolver<TableOfContentsFactory>(
  (theme, { color, size, variant, autoContrast, depthOffset, radius }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--toc-bg': variant !== 'none' ? colors.background : undefined,
        '--toc-color': variant !== 'none' ? colors.color : undefined,
        '--toc-size': getFontSize(size),
        '--toc-depth-offset': rem(depthOffset),
        '--toc-radius': getRadius(radius),
      },
    };
  }
);

export const TableOfContents = factory<TableOfContentsFactory>((_props, ref) => {
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
    reinitializeRef,
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
      data: {
        ...data,
        getNode: data.getNode || (() => {}),
      },
    });

    return (
      <UnstyledButton
        key={data.id || `${idBase}-${index}`}
        __vars={{ '--depth-offset': `${data.depth - (minDepthToOffset || 1)}` }}
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
    <Box ref={ref} variant={variant} {...getStyles('root')} {...others}>
      {controls}
    </Box>
  );
});

TableOfContents.displayName = '@mantine/core/TableOfContents';
TableOfContents.classes = classes;
