import { forwardRef } from 'react';

export type ForwardRefWithStaticComponents<
  T,
  Props extends Record<string, any>,
  Static extends Record<string, any>
> = ReturnType<typeof forwardRef<T, Props>> & Static;
