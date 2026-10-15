import { useRef, useState } from 'react';
import {
  assignRef,
  formatMask,
  useFormField,
  useIsomorphicEffect,
  useMask,
  useMergedRef,
} from '@mantine/hooks';
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
    resetRef,
    ref,
    value,
    defaultValue,
    onChange,
    ...others
  } = props;

  const initializedRef = useRef(false);
  const lastValueRef = useRef('');

  const {
    ref: maskCallbackRef,
    reset,
    setValue,
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
      lastValueRef.current = rawValue;
      onChangeRaw?.(rawValue, maskedValue);
      onChange?.(rawValue);
    },
    onComplete,
  });

  const applyExternalValue = (next: string) => {
    lastValueRef.current = next;
    setValue(next);
  };

  const formField = useFormField<string>(onChange, {
    onExternalWrite: (external) => applyExternalValue(external == null ? '' : String(external)),
  });

  const controlledValue = formField.subscribed
    ? formField.value == null
      ? ''
      : String(formField.value)
    : formField.bound
      ? undefined
      : value;

  useIsomorphicEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      applyExternalValue(controlledValue ?? defaultValue ?? '');
    } else if (controlledValue !== undefined && controlledValue !== lastValueRef.current) {
      applyExternalValue(controlledValue);
    }
  });

  assignRef(resetRef, reset);

  const maskRef = useMergedRef(ref, maskCallbackRef);

  const [initialDisplay] = useState(() =>
    formatMask(controlledValue ?? defaultValue ?? '', {
      mask,
      tokens,
      modify,
      transform,
      slotChar,
      alwaysShowMask,
    })
  );

  return { maskRef, elementProps: { ...others, defaultValue: initialDisplay } };
}
