import type { __InputWrapperProps } from '../../Input';

interface GetComboboxLabelIdInput {
  /** Id of the input, used as a base for the generated label id */
  id: string;

  /** `label` prop passed to the input */
  label: React.ReactNode;

  /** `labelProps` prop passed to the input */
  labelProps?: __InputWrapperProps['labelProps'];

  /** `inputWrapperOrder` prop passed to the input */
  inputWrapperOrder?: __InputWrapperProps['inputWrapperOrder'];
}

/**
 * Returns id of the label element rendered by `Input.Wrapper` that the options listbox
 * can reference with `aria-labelledby`. Returns `undefined` when the label is not rendered,
 * so the listbox never references an element that does not exist.
 */
export function getComboboxLabelId({
  id,
  label,
  labelProps,
  inputWrapperOrder,
}: GetComboboxLabelIdInput) {
  if (!label) {
    return undefined;
  }

  if (inputWrapperOrder && !inputWrapperOrder.includes('label')) {
    return undefined;
  }

  return labelProps?.id || `${id}-label`;
}
