// Types from https://github.com/g-makarov/dot-path-value

type Primitive = null | undefined | string | number | boolean | symbol | bigint;
type ArrayKey = number;

type IsTuple<T extends readonly any[]> = number extends T['length'] ? false : true;
type TupleKeys<T extends readonly any[]> = Exclude<keyof T, keyof any[]>;

type Prev = [never, 0, 1, 2, 3, 4, 5];
type Depth = 5;

type PathConcat<TKey extends string | number, TValue, D extends number> = TValue extends Primitive
  ? `${TKey}`
  : `${TKey}` | `${TKey}.${Path<TValue, Prev[D]>}`;

export type Path<T, D extends number = Depth> = [D] extends [never]
  ? never
  : T extends readonly (infer V)[]
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: PathConcat<K & string, T[K], D>;
        }[TupleKeys<T>]
      : PathConcat<ArrayKey, V, D>
    : {
        [K in keyof T]-?: PathConcat<K & string, T[K], D>;
      }[keyof T];

type ArrayPathConcat<TKey extends string | number, TValue, D extends number> = [D] extends [never]
  ? never
  : TValue extends Primitive
    ? never
    : TValue extends readonly (infer U)[]
      ? U extends Primitive
        ? never
        : `${TKey}` | `${TKey}.${ArrayPath<TValue, Prev[D]>}`
      : `${TKey}.${ArrayPath<TValue, Prev[D]>}`;

export type ArrayPath<T, D extends number = Depth> = [D] extends [never]
  ? never
  : T extends readonly (infer V)[]
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: ArrayPathConcat<K & string, T[K], D>;
        }[TupleKeys<T>]
      : ArrayPathConcat<ArrayKey, V, D>
    : {
        [K in keyof T]-?: ArrayPathConcat<K & string, T[K], D>;
      }[keyof T];

export type PathValue<T, TPath extends string> = T extends any
  ? TPath extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? R extends Path<T[K]>
        ? undefined extends T[K]
          ? PathValue<T[K], R> | undefined
          : PathValue<T[K], R>
        : never
      : K extends `${ArrayKey}`
        ? T extends readonly (infer V)[]
          ? PathValue<V, R & Path<V>>
          : never
        : never
    : TPath extends keyof T
      ? T[TPath]
      : TPath extends `${ArrayKey}`
        ? T extends readonly (infer V)[]
          ? V
          : never
        : never
  : never;

export type FormPathValue<T, TPath extends string> =
  PathValue<T, TPath> extends never ? any : PathValue<T, TPath>;

export type LooseKeys<T> = Path<T> | ArrayPath<T> | (string & {});
