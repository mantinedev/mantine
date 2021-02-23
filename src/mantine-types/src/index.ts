export type ComponentPassThrough<
  T extends React.ElementType,
  Props
> = React.ComponentPropsWithoutRef<T> & {
  component?: T;
} & Props;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
