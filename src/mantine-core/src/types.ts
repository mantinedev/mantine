export type ComponentPassThrough<T extends React.ElementType, Props> = Props &
  React.ComponentPropsWithoutRef<T> & {
    /** Element or component that will be used as root element */
    component?: T;
  };
