type _TupleOf<T, N extends number, R extends readonly unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, readonly [T, ...R]>;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? readonly T[]
    : _TupleOf<T, N, []>
  : never;
