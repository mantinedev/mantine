import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { usePaginationContext } from '../Pagination.context';
import classes from '../Pagination.module.css';

export type PaginationFormatLabel = (input: { page: number; totalPages: number }) => string;
export type PaginationLabelStylesNames = 'label';

export interface PaginationLabelProps
  extends BoxProps, CompoundStylesApiProps<PaginationLabelFactory>, ElementProps<'div'> {
  /** Function to format the label text */
  formatLabel?: PaginationFormatLabel;
}

export type PaginationLabelFactory = Factory<{
  props: PaginationLabelProps;
  ref: HTMLDivElement;
  stylesNames: PaginationLabelStylesNames;
  compound: true;
}>;

const defaultProps = {
  formatLabel: ({ page, totalPages }) => `Page ${page} of ${totalPages}`,
} satisfies Partial<PaginationLabelProps>;

export const PaginationLabel = factory<PaginationLabelFactory>((_props) => {
  const props = useProps('PaginationLabel', defaultProps, _props);
  const { classNames, className, style, styles, vars, formatLabel, ...others } = props;
  const ctx = usePaginationContext();

  return (
    <Box {...ctx.getStyles('label', { className, style, styles, classNames })} {...others}>
      {formatLabel({ page: ctx.active, totalPages: ctx.total })}
    </Box>
  );
});

PaginationLabel.classes = classes;
PaginationLabel.displayName = '@mantine/core/PaginationLabel';
