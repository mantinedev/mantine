export function getInputOffsets(
  inputWrapperOrder: ('label' | 'input' | 'description' | 'error')[],
  { hasDescription, hasError }: { hasDescription: boolean; hasError: boolean }
) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === 'input');
  const aboveInput = inputWrapperOrder[inputIndex - 1];
  const belowInput = inputWrapperOrder[inputIndex + 1];
  const offsetTop =
    (hasDescription && aboveInput === 'description') || (hasError && aboveInput === 'error');
  const offsetBottom =
    (hasDescription && belowInput === 'description') || (hasError && belowInput === 'error');
  return { offsetBottom, offsetTop };
}
