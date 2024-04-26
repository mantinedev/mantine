import { useId } from 'react';
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

export type ComboboxOptionStylesNames = 'option';

export interface ComboboxOptionProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxOptionFactory>,
    ElementProps<'div'> {
  /** Option value */
  value: string;

  /** Determines whether the option is selected */
  active?: boolean;

  /** Determines whether the option can be selected */
  disabled?: boolean;

  /** Determines whether item is selected, useful for virtualized comboboxes */
  selected?: boolean;
}

export type ComboboxOptionFactory = Factory<{
  props: ComboboxOptionProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxOptionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxOptionProps> = {};

export const ComboboxOption = factory<ComboboxOptionFactory>((_props, ref) => {
  const props = useProps('ComboboxOption', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onClick,
    id,
    active,
    onMouseDown,
    onMouseOver,
    disabled,
    selected,
    mod,
    ...others
  } = props;

  const ctx = useComboboxContext();
  const uuid = useId();
  const _id = id || uuid;

  return (
    <Box
      {...ctx.getStyles('option', { className, classNames, styles, style })}
      {...others}
      ref={ref}
      id={_id}
      mod={[
        'combobox-option',
        { 'combobox-active': active, 'combobox-disabled': disabled, 'combobox-selected': selected },
        mod,
      ]}
      role="option"
      onClick={(event) => {
        if (!disabled) {
          ctx.onOptionSubmit?.(props.value, props);
          onClick?.(event);
        } else {
          event.preventDefault();
        }
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }}
      onMouseOver={(event) => {
        if (ctx.resetSelectionOnOptionHover) {
          ctx.store.resetSelectedOption();
        }
        onMouseOver?.(event);
      }}
    />
  );
});

ComboboxOption.classes = classes;
ComboboxOption.displayName = '@mantine/core/ComboboxOption';
