import { assignRef, useDidUpdate, useFormField, useMask, useMergedRef } from '@mantine/hooks';
import type { MaskInputProps } from './MaskInput';

export function useMaskInputProps(props: MaskInputProps & { ref?: React.Ref<HTMLInputElement> }) {
  const {
    mask,
    tokens,
    modify,
    slotChar,
    alwaysShowMask,
    showMaskOnFocus,
    transform,
    autoClear,
    onChangeRaw,
    onComplete,
    beforeMaskedStateChange,
    resetRef,
    ref,
    value,
    defaultValue,
    onChange,
    ...others
  } = props;

  const formField = useFormField<string>(onChange, {
    onExternalWrite: (external) => setValue(external == null ? '' : String(external)),
  });
  const fieldValue = formField.value == null ? '' : String(formField.value);

  const {
    ref: maskCallbackRef,
    reset,
    setValue,
    rawValue,
  } = useMask({
    mask,
    tokens,
    modify,
    slotChar,
    alwaysShowMask,
    showMaskOnFocus,
    transform,
    autoClear,
    onChangeRaw: (rawValue, maskedValue) => {
      onChangeRaw?.(rawValue, maskedValue);
      formField.bound && (onChange as any)(rawValue);
    },
    onComplete,
    beforeMaskedStateChange,
  });

  useDidUpdate(() => {
    if (formField.subscribed && fieldValue !== rawValue) {
      setValue(fieldValue);
    }
  }, [formField.subscribed, fieldValue]);

  assignRef(resetRef, reset);

  const maskRef = useMergedRef(ref, maskCallbackRef);

  const elementProps = formField.bound
    ? { ...others, defaultValue: defaultValue ?? value }
    : { ...others, value, defaultValue, onChange };

  return { maskRef, elementProps };
}
