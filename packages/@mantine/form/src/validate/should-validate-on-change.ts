import { FORM_INDEX } from '../form-index';

export function shouldValidateOnChange(path: unknown, validateInputOnChange: boolean | unknown[]) {
  if (!validateInputOnChange) {
    return false;
  }

  if (typeof validateInputOnChange === 'boolean') {
    return validateInputOnChange;
  }

  if (Array.isArray(validateInputOnChange)) {
    return validateInputOnChange.includes((path as string).replace(/[.][0-9]+/g, `.${FORM_INDEX}`));
  }

  return false;
}
