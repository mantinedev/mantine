import React from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '../../../core';
import classes from '../Combobox.module.css';
import { useComboboxContext } from '../Combobox.context';

export type ComboboxEmptyStylesNames = 'empty';

export interface ComboboxEmptyProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxEmptyFactory>,
    ElementProps<'div'> {}

export type ComboboxEmptyFactory = Factory<{
  props: ComboboxEmptyProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxEmptyStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxEmptyProps> = {};

export const ComboboxEmpty = factory<ComboboxEmptyFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'ComboboxEmpty',
    defaultProps,
    props
  );

  const ctx = useComboboxContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('empty', { className, classNames, styles, style })}
      {...others}
    />
  );
});

ComboboxEmpty.classes = classes;
ComboboxEmpty.displayName = '@mantine/core/ComboboxEmpty';
