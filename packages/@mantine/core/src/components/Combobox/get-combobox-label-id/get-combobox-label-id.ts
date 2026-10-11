import type { __InputWrapperProps } from '../../Input';

interface GetComboboxLabelIdInput {
  id: string;
  label: React.ReactNode;
  labelProps?: __InputWrapperProps['labelProps'];
  inputWrapperOrder?: __InputWrapperProps['inputWrapperOrder'];
}

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
