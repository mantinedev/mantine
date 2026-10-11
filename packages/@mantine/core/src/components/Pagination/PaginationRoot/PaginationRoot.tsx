import { usePagination, UsePaginationReturnValue } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createEventHandler,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getFontSize,
  getRadius,
  getSize,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useController,
  useProps,
  useStyles,
} from '../../../core';
import { PaginationProvider } from '../Pagination.context';
import classes from '../Pagination.module.css';

export type PaginationRootStylesNames = 'root' | 'control' | 'dots' | 'items' | 'label';
export type PaginationRootCssVariables = {
  root:
    | '--pagination-control-size'
    | '--pagination-control-radius'
    | '--pagination-control-fz'
    | '--pagination-active-bg'
    | '--pagination-active-color';
};

export interface PaginationRootProps
  extends
    BoxProps,
    StylesApiProps<PaginationRootFactory>,
    ElementProps<'nav', 'value' | 'onChange'> {
  /** `height` and `min-width` of controls @default 'md' @category appearance */
  size?: MantineSize | `input-${MantineSize}` | (string & {}) | number;

  /** Controller returned by the `usePagination` hook. When provided, the state is owned by the controller and `total`, `value`, `defaultValue`, `onChange`, `siblings`, `boundaries` and `startValue` props are ignored @category state */
  controller?: UsePaginationReturnValue;

  /** Total number of pages, must be an integer. Required unless `controller` is set. @category state */
  total?: number;

  /** Active page for controlled component, must be an integer in [1, total] interval @category state */
  value?: number;

  /** Active page for uncontrolled component, must be an integer in [1, total] interval @category state */
  defaultValue?: number;

  /** Called when page changes @category state */
  onChange?: (value: number) => void;

  /** Disables all controls, applies disabled styles @category behavior */
  disabled?: boolean;

  /** Number of siblings displayed on the left/right side of the selected page @default 1 @category appearance */
  siblings?: number;

  /** Number of elements visible on the left/right edges @default 1 @category appearance */
  boundaries?: number;

  /** Key of `theme.colors`, active item color @default theme.primaryColor @category appearance */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** Called when next page control is clicked @category behavior */
  onNextPage?: () => void;

  /** Called when previous page control is clicked @category behavior */
  onPreviousPage?: () => void;

  /** Called when first page control is clicked @category behavior */
  onFirstPage?: () => void;

  /** Called when last page control is clicked @category behavior */
  onLastPage?: () => void;

  /** Additional props passed down to controls */
  getItemProps?: (page: number) => Record<string, any>;

  /** If set, adjusts text color based on the active page background color to ensure sufficient contrast @category appearance */
  autoContrast?: boolean;

  /** Starting page number, defaults to 1 @category state */
  startValue?: number;

  /** Determines how the pagination is displayed, `'responsive'` uses CSS container queries to switch between pages and a compact label @default 'default' @category appearance */
  layout?: 'default' | 'responsive';
}

export type PaginationRootFactory = Factory<{
  props: PaginationRootProps;
  ref: HTMLElement;
  stylesNames: PaginationRootStylesNames;
  vars: PaginationRootCssVariables;
}>;

const defaultProps = {
  siblings: 1,
  boundaries: 1,
} satisfies Partial<PaginationRootProps>;

const varsResolver = createVarsResolver<PaginationRootFactory>(
  (theme, { size, radius, color, autoContrast }) => ({
    root: {
      '--pagination-control-radius': radius === undefined ? undefined : getRadius(radius),
      '--pagination-control-size': getSize(size, 'pagination-control-size'),
      '--pagination-control-fz': getFontSize(size),
      '--pagination-active-bg': color ? getThemeColor(color, theme) : undefined,
      '--pagination-active-color': getAutoContrastValue(autoContrast, theme)
        ? getContrastColor({ color, theme, autoContrast })
        : undefined,
    },
  })
);

export const PaginationRoot = factory<PaginationRootFactory>((_props) => {
  const props = useProps('PaginationRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    controller,
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    color,
    radius,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps,
    autoContrast,
    startValue,
    layout,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<PaginationRootFactory>({
    name: 'Pagination',
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

  const pagination = useController(usePagination, controller, {
    page: value,
    initialPage: defaultValue,
    onChange,
    total: total ?? 0,
    siblings,
    boundaries,
    startValue,
  });

  return (
    <PaginationProvider
      value={{
        total: pagination.total,
        startValue: pagination.startValue,
        range: pagination.range,
        active: pagination.active,
        disabled,
        layout,
        getItemProps,
        onChange: pagination.setPage,
        onNext: createEventHandler(onNextPage, pagination.next),
        onPrevious: createEventHandler(onPreviousPage, pagination.previous),
        onFirst: createEventHandler(onFirstPage, pagination.first),
        onLast: createEventHandler(onLastPage, pagination.last),
        getStyles,
      }}
    >
      <Box component="nav" {...getStyles('root')} mod={[{ layout }, mod]} {...others} />
    </PaginationProvider>
  );
});

PaginationRoot.classes = classes;
PaginationRoot.varsResolver = varsResolver;
PaginationRoot.displayName = '@mantine/core/PaginationRoot';
