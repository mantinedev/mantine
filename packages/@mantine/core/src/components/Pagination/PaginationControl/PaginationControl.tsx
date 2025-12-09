import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { usePaginationContext } from '../Pagination.context';
import classes from '../Pagination.module.css';

export type PaginationControlStylesNames = 'control';

export interface PaginationControlProps
  extends BoxProps, CompoundStylesApiProps<PaginationControlFactory>, ElementProps<'button'> {
  /** Applies active styles, adds `data-active` attribute */
  active?: boolean;

  /** Applies padding @default `true` */
  withPadding?: boolean;
}

export type PaginationControlFactory = Factory<{
  props: PaginationControlProps;
  ref: HTMLButtonElement;
  stylesNames: PaginationControlStylesNames;
  compound: true;
}>;

const defaultProps = {
  withPadding: true,
} satisfies Partial<PaginationControlProps>;

export const PaginationControl = factory<PaginationControlFactory>((_props) => {
  const props = useProps('PaginationControl', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    active,
    disabled,
    withPadding,
    mod,
    ...others
  } = props;

  const ctx = usePaginationContext();
  const _disabled = disabled || ctx.disabled;

  return (
    <UnstyledButton
      disabled={_disabled}
      mod={[{ active, disabled: _disabled, 'with-padding': withPadding }, mod]}
      {...ctx.getStyles('control', { className, style, classNames, styles, active: !_disabled })}
      {...others}
    />
  );
});

PaginationControl.classes = classes;
PaginationControl.displayName = '@mantine/core/PaginationControl';
