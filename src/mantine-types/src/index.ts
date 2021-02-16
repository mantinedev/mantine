export type ComponentPassThrough<
  T extends React.ElementType,
  Props
> = React.ComponentPropsWithoutRef<T> & {
  component?: T;
} & Props;
