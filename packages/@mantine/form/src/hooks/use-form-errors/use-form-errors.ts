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
    setErrorsState((current) =>
      filterErrors(typeof errors === 'function' ? errors(current) : errors)
    );
  }, []);

  const clearErrors: ClearErrors = useCallback(() => setErrorsState({}), []);

  const clearFieldError: ClearFieldError = useCallback(
    (path) => {
      if (errorsState[path as string] === undefined) {
        return;
      }

      setErrors((current) => {
        const errors = { ...current };
        delete errors[path as string];
        return errors;
      });
    },
    [errorsState]
  );

  const setFieldError: SetFieldError<Values> = useCallback((path, error) => {
    if (error == null || error === false) {
      clearFieldError(path);
    } else {
      setErrors((current) => {
        if (current[path as string] === error) {
          return current;
        }

        return { ...current, [path]: error };
      });
    }
  }, []);

  return {
    errorsState,
    setErrors,
    clearErrors,
    setFieldError,
    clearFieldError,
  };
}
