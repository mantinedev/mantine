import type { FormErrors } from '../../types';

interface YupError {
  path: string;
  message: string;
}

interface YupValidationResult {
  inner: YupError[];
}

interface YupSchema {
  validateSync: (values: Record<string, any>, options: { abortEarly: boolean }) => void;
}

export function yupResolver(schema: any) {
  const _schema: YupSchema = schema;

  return (values: Record<string, any>): FormErrors => {
    try {
      _schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (_yupError) {
      const yupError = _yupError as YupValidationResult;
      const results: Record<string, any> = {};

      yupError.inner.forEach((error) => {
        results[error.path.replaceAll('[', '.').replaceAll(']', '')] = error.message;
      });

      return results;
    }
  };
}
