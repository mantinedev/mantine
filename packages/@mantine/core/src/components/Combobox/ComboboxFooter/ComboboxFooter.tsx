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

export type ComboboxFooterStylesNames = 'footer';

export interface ComboboxFooterProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxFooterFactory>,
    ElementProps<'div'> {}

export type ComboboxFooterFactory = Factory<{
  props: ComboboxFooterProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxFooterStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxFooterProps> = {};

export const ComboboxFooter = factory<ComboboxFooterFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'ComboboxFooter',
    defaultProps,
    props
  );

  const ctx = useComboboxContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('footer', { className, classNames, style, styles })}
      {...others}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
    />
  );
});

ComboboxFooter.classes = classes;
ComboboxFooter.displayName = '@mantine/core/ComboboxFooter';
