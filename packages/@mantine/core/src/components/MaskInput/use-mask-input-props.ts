import { useMask, useMergedRef } from '@mantine/hooks';
import type { MaskInputProps } from './MaskInput';

export function useMaskInputProps(props: MaskInputProps & { ref?: React.Ref<HTMLInputElement> }) {
  const {
    mask,
    tokens,
    modify,
    separate,
    slotChar,
    alwaysShowMask,
    showMaskOnFocus,
    transform,
    autoClear,
    onChangeRaw,
    onComplete,
    beforeMaskedStateChange,
    ref,
    ...elementProps
  } = props;

  const { ref: maskCallbackRef } = useMask({
    mask,
    tokens,
    modify,
    separate,
    slotChar,
    alwaysShowMask,
    showMaskOnFocus,
    transform,
    autoClear,
    onChangeRaw,
    onComplete,
    beforeMaskedStateChange,
  });

  const maskRef = useMergedRef(ref, maskCallbackRef);

  return { maskRef, elementProps };
}
