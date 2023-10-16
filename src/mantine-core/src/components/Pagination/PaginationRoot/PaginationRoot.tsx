import React from 'react';
import { usePagination } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineSize,
  MantineColor,
  MantineRadius,
  createEventHandler,
  getRadius,
  getSize,
  getFontSize,
  getThemeColor,
} from '../../../core';
import { PaginationProvider } from '../Pagination.context';
import classes from '../Pagination.module.css';

export type PaginationRootStylesNames = 'root' | 'control' | 'dots';
export type PaginationRootCssVariables = {
  root:
    | '--pagination-control-size'
    | '--pagination-control-radius'
    | '--pagination-control-fz'
    | '--pagination-active-bg';
};

export interface PaginationRootProps
  extends BoxProps,
    StylesApiProps<PaginationRootFactory>,
    ElementProps<'div', 'value' | 'onChange'> {
  /** `height` and `min-width` of controls, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Total number of pages, must be an integer */
  total: number;

  /** Active page for controlled component, must be an integer in [0, total] interval */
  value?: number;

  /** Active page for uncontrolled component, must be an integer in [0, total] interval */
  defaultValue?: number;

  /** Called when page changes */
  onChange?: (value: number) => void;

  /** Determines whether all controls should be disabled, `false` by default */
  disabled?: boolean;

  /** Number of siblings displayed on the left/right side of the selected page, `1` by default */
  siblings?: number;

  /** Number of elements visible on the left/right edges, `1` by default */
  boundaries?: number;

  /** Key of `theme.colors`, active item color, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Called when next page control is clicked */
  onNextPage?: () => void;

  /** Called when previous page control is clicked */
  onPreviousPage?: () => void;

  /** Called when first page control is clicked */
  onFirstPage?: () => void;

  /** Called when last page control is clicked */
  onLastPage?: () => void;

  /** Additional props passed down to controls */
  getItemProps?: (page: number) => Record<string, any>;
}

export type PaginationRootFactory = Factory<{
  props: PaginationRootProps;
  ref: HTMLDivElement;
  stylesNames: PaginationRootStylesNames;
  vars: PaginationRootCssVariables;
}>;

const defaultProps: Partial<PaginationRootProps> = {
  siblings: 1,
  boundaries: 1,
};

const varsResolver = createVarsResolver<PaginationRootFactory>(
  (theme, { size, radius, color }) => ({
    root: {
      '--pagination-control-radius': radius === undefined ? undefined : getRadius(radius),
      '--pagination-control-size': getSize(size, 'pagination-control-size'),
      '--pagination-control-fz': getFontSize(size),
      '--pagination-active-bg': color ? getThemeColor(color, theme) : undefined,
    },
  })
);

export const PaginationRoot = factory<PaginationRootFactory>((_props, ref) => {
  const props = useProps('PaginationRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
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
    vars,
    varsResolver,
  });

  const { range, setPage, next, previous, active, first, last } = usePagination({
    page: value,
    initialPage: defaultValue,
    onChange,
    total,
    siblings,
    boundaries,
  });

  const handleNextPage = createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler(onLastPage, last);

  return (
    <PaginationProvider
      value={{
        total,
        range,
        active,
        disabled,
        getItemProps,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
        getStyles,
      }}
    >
      <Box ref={ref} {...getStyles('root')} {...others} />
    </PaginationProvider>
  );
});

PaginationRoot.classes = classes;
PaginationRoot.displayName = '@mantine/core/PaginationRoot';
