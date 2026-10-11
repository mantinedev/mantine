import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '../../core';
import { __BaseInputProps, __InputStylesNames, InputVariant } from '../Input';
import { InputBase } from '../InputBase';
import { useMaskInputProps } from './use-mask-input-props';

export interface MaskInputProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<MaskInputFactory>,
    ElementProps<'input', 'size'> {
  /** Mask pattern string or array of string literals and RegExp objects @category behavior */
  mask: string | Array<string | RegExp>;

  /** Override or extend the default token map @category behavior */
  tokens?: Record<string, RegExp>;

  /** Called before masking on each keystroke, can return overrides for mask options @category behavior */
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

  /** Called on every change with raw and masked values @category state */
  onChangeRaw?: (rawValue: string, maskedValue: string) => void;

  /** Called when all required mask slots are filled @category state */
  onComplete?: (maskedValue: string, rawValue: string) => void;

  /** Escape hatch for advanced cursor/value manipulation @category behavior */
  beforeMaskedStateChange?: (states: {
    previousState: { value: string; selection: { start: number; end: number } | null };
    currentState: { value: string; selection: { start: number; end: number } | null };
    nextState: { value: string; selection: { start: number; end: number } | null };
  }) => { value: string; selection: { start: number; end: number } | null };

  /** Assigns a function that clears the input value to the given ref */
  resetRef?: React.RefObject<(() => void) | null>;
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
      {...(elementProps as any)}
      __staticSelector="MaskInput"
    />
  );
});

MaskInput.classes = InputBase.classes;
MaskInput.displayName = '@mantine/core/MaskInput';
