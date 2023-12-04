import React from 'react';
import { factory, ElementProps, useProps, Factory, BoxProps, StylesApiProps } from '../../core';
import { InputBase } from '../InputBase';
import { __InputStylesNames, __BaseInputProps } from '../Input';
import { ComboboxData, getParsedComboboxData, ComboboxChevron } from '../Combobox';
import { NativeSelectOption } from './NativeSelectOption';

export interface NativeSelectProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<NativeSelectFactory>,
    ElementProps<'select', 'size'> {
  /** Data used to render options, can be replaced with `children` */
  data?: ComboboxData;
}

export type NativeSelectFactory = Factory<{
  props: NativeSelectProps;
  ref: HTMLSelectElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<NativeSelectProps> = {
  rightSectionPointerEvents: 'none',
};

export const NativeSelect = factory<NativeSelectFactory>((props, ref) => {
  const { data, children, size, error, rightSection, unstyled, ...others } = useProps(
    'NativeSelect',
    defaultProps,
    props
  );

  const options = getParsedComboboxData(data).map((item, index) => (
    <NativeSelectOption key={index} data={item} />
  ));

  return (
    <InputBase
      component="select"
      ref={ref}
      {...others}
      __staticSelector="NativeSelect"
      size={size}
      pointer
      error={error}
      unstyled={unstyled}
      rightSection={
        rightSection || <ComboboxChevron size={size} error={error} unstyled={unstyled} />
      }
    >
      {children || options}
    </InputBase>
  );
});

NativeSelect.classes = InputBase.classes;
NativeSelect.displayName = '@mantine/core/NativeSelect';
