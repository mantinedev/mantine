export function shouldValidateOnChange(path: unknown, validateInputOnChange: boolean | unknown[]) {
  if (!validateInputOnChange) {
    return false;
  }

  if (typeof validateInputOnChange === 'boolean') {
    return validateInputOnChange;
  }

  if (Array.isArray(validateInputOnChange)) {
    return validateInputOnChange.includes(path);
  }

  return false;
}
