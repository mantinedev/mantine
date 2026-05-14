import { assignRef, useMask, useMergedRef } from '@mantine/hooks';
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
    resetRef,
    ref,
    ...elementProps
  } = props;

  const { ref: maskCallbackRef, reset } = useMask({
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

  assignRef(resetRef, reset);

  const maskRef = useMergedRef(ref, maskCallbackRef);

  return { maskRef, elementProps };
}
