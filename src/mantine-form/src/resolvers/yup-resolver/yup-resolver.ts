import type { FormErrors } from '../../types';

interface YupError {
  path: string;
  message: string;
}

interface YupValidationResult {
  inner: YupError[];
}

interface YupSchema {
  validateSync(values: Record<string, any>, options: { abortEarly: boolean }): void;
}

export function yupResolver(schema: any, transform?: (values: Record<string, any>) => Record<string, any>) {
  const _schema: YupSchema = transform ? transform(schema) : schema;

  return (values: Record<string, any>): FormErrors => {
    try {
      _schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (_yupError) {
      const yupError: YupValidationResult = _yupError;
      const results = {};

      yupError.inner.forEach((error) => {
        results[error.path.replace('[', '.').replace(']', '')] = error.message;
      });

      return results;
    }
  };
}
