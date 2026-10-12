export function getInputValueProps(type: unknown, value: unknown, optionValue: unknown) {
  if (type === 'checkbox') {
    return { checked: value };
  }

  if (type === 'radio') {
    return { checked: value === optionValue, value: optionValue };
  }

  return { value };
}
