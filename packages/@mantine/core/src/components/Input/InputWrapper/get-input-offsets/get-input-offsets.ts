export function getInputOffsets(
  inputWrapperOrder: ('label' | 'input' | 'description' | 'error')[],
  {
    hasDescription,
    hasError,
    keepErrorMounted,
  }: { hasDescription: boolean; hasError: boolean; keepErrorMounted?: boolean }
) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === 'input');
  const aboveInput = inputWrapperOrder.slice(0, inputIndex);
  const belowInput = inputWrapperOrder.slice(inputIndex + 1);
  const errorMounted = hasError || !!keepErrorMounted;
  const offsetTop =
    (hasDescription && aboveInput.includes('description')) ||
    (errorMounted && aboveInput.includes('error'));
  const offsetBottom =
    (hasDescription && belowInput.includes('description')) ||
    (errorMounted && belowInput.includes('error'));
  return { offsetBottom, offsetTop };
}
