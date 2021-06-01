export type ComponentPassThrough<
  T extends React.ElementType,
  Props
> = React.ComponentPropsWithoutRef<T> & {
  /** Element or component that will be used as root element */
  component?: T;
} & Props;
