import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxEmptyStylesNames = 'empty';

export interface ComboboxEmptyProps
  extends BoxProps, CompoundStylesApiProps<ComboboxEmptyFactory>, ElementProps<'div'> {}

export type ComboboxEmptyFactory = Factory<{
  props: ComboboxEmptyProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxEmptyStylesNames;
  compound: true;
}>;

export const ComboboxEmpty = factory<ComboboxEmptyFactory>((props) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'ComboboxEmpty',
    null,
    props
  );

  const ctx = useComboboxContext();

  return <Box {...ctx.getStyles('empty', { className, classNames, styles, style })} {...others} />;
});

ComboboxEmpty.classes = classes;
ComboboxEmpty.displayName = '@mantine/core/ComboboxEmpty';
