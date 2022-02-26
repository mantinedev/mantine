import type React from 'react';

export type FormErrors<T> = Partial<Record<keyof T, React.ReactNode | null>>;
