export function getInputOffsets(
  inputWrapperOrder: ('label' | 'input' | 'description' | 'error')[],
  { hasDescription, hasError }: { hasDescription: boolean; hasError: boolean }
) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === 'input');
  const aboveInput = inputWrapperOrder.slice(0, inputIndex);
  const belowInput = inputWrapperOrder.slice(inputIndex + 1);
  const offsetTop =
    (hasDescription && aboveInput.includes('description')) ||
    (hasError && aboveInput.includes('error'));
  const offsetBottom =
    (hasDescription && belowInput.includes('description')) ||
    (hasError && belowInput.includes('error'));
  return { offsetBottom, offsetTop };
}
