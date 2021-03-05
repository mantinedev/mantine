export type ComponentPassThrough<
  T extends React.ElementType,
  Props
> = React.ComponentPropsWithoutRef<T> & {
  component?: T;
} & Props;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

export type SetDifference<A, B> = A extends B ? never : A;
export type SetComplement<A, A1 extends A> = SetDifference<A, A1>;
export type Subtract<T extends T1, T1 extends object> = Pick<T, SetComplement<keyof T, keyof T1>>;
