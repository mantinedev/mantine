import { useEffect } from 'react';
import { useId } from '@mantine/hooks';
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

export type ComboboxOptionsStylesNames = 'options';

export interface ComboboxOptionsProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxOptionsFactory>,
    ElementProps<'div'> {
  /** Id of the element that should label the options list */
  labelledBy?: string;
}

export type ComboboxOptionsFactory = Factory<{
  props: ComboboxOptionsProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxOptionsStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxOptionsProps> = {};

export const ComboboxOptions = factory<ComboboxOptionsFactory>((_props, ref) => {
  const props = useProps('ComboboxOptions', defaultProps, _props);
  const { classNames, className, style, styles, id, onMouseDown, labelledBy, ...others } = props;
  const ctx = useComboboxContext();
  const _id = useId(id);

  useEffect(() => {
    ctx.store.setListId(_id);
  }, [_id]);

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('options', { className, style, classNames, styles })}
      {...others}
      id={_id}
      role="listbox"
      aria-labelledby={labelledBy}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }}
    />
  );
});

ComboboxOptions.classes = classes;
ComboboxOptions.displayName = '@mantine/core/ComboboxOptions';
