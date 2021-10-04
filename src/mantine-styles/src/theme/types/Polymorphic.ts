import React from 'react';

type ExtendedProps<_ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<_ExtendedProps, keyof OverrideProps>;

type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
  JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type ComponentProp<C extends React.ElementType> = {
  /** Tag or component that should be used as root element */
  component?: C;
};

type InheritedProps<C extends React.ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = InheritedProps<
  C,
  Props & ComponentProp<C>
> & { ref?: PolymorphicRef<C> };
