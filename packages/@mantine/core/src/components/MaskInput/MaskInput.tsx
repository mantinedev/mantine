import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '../../core';
import { __BaseInputProps, __InputStylesNames, InputVariant } from '../Input';
import { InputBase, InputBaseProps } from '../InputBase';
import { useMaskInputProps } from './use-mask-input-props';

export interface MaskInputProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<MaskInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Mask pattern string or array of string literals and RegExp objects @category behavior */
  mask: string | Array<string | RegExp>;

  /** Override or extend the default token map @category behavior */
  tokens?: Record<string, RegExp>;

  /** Called with the raw (unmasked) value every time the mask state is computed, returns overrides for `mask`, `tokens` and `slotChar`. Must be a pure function. @category behavior */
  modify?: (
    value: string
  ) => Partial<Pick<MaskInputProps, 'mask' | 'tokens' | 'slotChar'>> | undefined;

  /** Character displayed in unfilled slots, `"_"` by default @category appearance */
  slotChar?: string | null;

  /** Show mask pattern even when field is empty and unfocused @category appearance */
  alwaysShowMask?: boolean;

  /** Show mask placeholder on focus, `true` by default @category appearance */
  showMaskOnFocus?: boolean;

  /** Transform each character before validation and insertion @category behavior */
  transform?: (char: string) => string;

  /** Clear value on blur when mask is incomplete, `false` by default @category behavior */
  autoClear?: boolean;

  /** Controlled raw (unmasked) value @category state */
  value?: string;

  /** Uncontrolled raw (unmasked) default value @category state */
  defaultValue?: string;

  /** Called with the raw (unmasked) value on every edit @category state */
  onChange?: (value: string) => void;

  /** Called on every edit, the first argument is the raw (unmasked) value, the second is the masked value displayed in the input @category state */
  onChangeRaw?: (rawValue: string, maskedValue: string) => void;

  /** Called when all required mask slots are filled, the first argument is the masked value, the second is the raw (unmasked) value @category state */
  onComplete?: (maskedValue: string, rawValue: string) => void;

  /** Assigns a function that clears the input value to the given ref */
  resetRef?: React.Ref<() => void>;
}

export type MaskInputFactory = Factory<{
  props: MaskInputProps;
  variant: InputVariant;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps = {} satisfies Partial<MaskInputProps>;

export const MaskInput = factory<MaskInputFactory>((props) => {
  const _props = useProps(['Input', 'InputWrapper', 'MaskInput'], defaultProps, props);
  const { maskRef, elementProps } = useMaskInputProps(_props);

  return (
    <InputBase
      component="input"
      ref={maskRef}
      {...(elementProps as InputBaseProps)}
      __staticSelector="MaskInput"
    />
  );
});

MaskInput.classes = InputBase.classes;
MaskInput.displayName = '@mantine/core/MaskInput';

export namespace MaskInput {
  export type Props = MaskInputProps;
  export type Factory = MaskInputFactory;
}
