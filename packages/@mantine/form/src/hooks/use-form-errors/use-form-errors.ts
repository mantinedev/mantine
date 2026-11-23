import { useCallback, useState } from 'react';
import { ClearErrors, ClearFieldError, FormErrors, SetErrors, SetFieldError } from '../../types';
import { filterErrors } from './filter-errors/filter-errors';

export interface $FormErrors<Values extends Record<string, any>> {
  errorsState: FormErrors;
  setErrors: SetErrors;
  clearErrors: ClearErrors;
  setFieldError: SetFieldError<Values>;
  clearFieldError: ClearFieldError;
}

export function useFormErrors<Values extends Record<string, any>>(
  initialErrors: FormErrors
): $FormErrors<Values> {
  const [errorsState, setErrorsState] = useState(filterErrors(initialErrors));

  const setErrors: SetErrors = useCallback((errors) => {
    setErrorsState((current) => {
      const next = typeof errors === 'function' ? errors(current) : errors;
      return next === current ? current : filterErrors(next);
    });
  }, []);

  const clearErrors: ClearErrors = useCallback(() => setErrors({}), []);

  const clearFieldError: ClearFieldError = useCallback((path) => {
    setErrors((current) => {
      if (current[path as string] === undefined) {
        return current;
      }

      const errors = { ...current };
      delete errors[path as string];
      return errors;
    });
  }, []);

  const setFieldError: SetFieldError<Values> = useCallback(
    (path, error) => {
      if (error == null || error === false) {
        clearFieldError(path);
      } else {
        setErrors((current) =>
          current[path as string] === error ? current : { ...current, [path]: error }
        );
      }
    },
    [clearFieldError]
  );

  return {
    errorsState,
    setErrors,
    clearErrors,
    setFieldError,
    clearFieldError,
  };
}
