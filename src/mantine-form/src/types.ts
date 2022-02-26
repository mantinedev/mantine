import type React from 'react';

export type FormErrors<T> = Partial<Record<keyof T, React.ReactNode | null>>;

export type FormRulesRecord<T> = {
  [P in keyof T]?: (value: T[P], values: T) => boolean;
};

export type FormRules<T> = ((values: T) => FormErrors<T>) | FormRulesRecord<T>;
