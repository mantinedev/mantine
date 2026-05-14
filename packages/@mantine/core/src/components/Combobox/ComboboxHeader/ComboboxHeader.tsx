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

export type ComboboxHeaderStylesNames = 'header';

export interface ComboboxHeaderProps
  extends BoxProps, CompoundStylesApiProps<ComboboxHeaderFactory>, ElementProps<'div'> {}

export type ComboboxHeaderFactory = Factory<{
  props: ComboboxHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxHeaderStylesNames;
  compound: true;
}>;

export const ComboboxHeader = factory<ComboboxHeaderFactory>((props) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'ComboboxHeader',
    null,
    props
  );

  const ctx = useComboboxContext();

  return (
    <Box
      {...ctx.getStyles('header', { className, classNames, style, styles })}
      {...others}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
    />
  );
});

ComboboxHeader.classes = classes;
ComboboxHeader.displayName = '@mantine/core/ComboboxHeader';
