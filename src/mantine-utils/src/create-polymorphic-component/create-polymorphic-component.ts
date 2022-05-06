import React from 'react';

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps &
  Omit<Props, keyof OverrideProps>;

type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
  JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type ComponentProp<C extends React.ElementType> = {
  component?: C;
};

type InheritedProps<C extends React.ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;

export type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never;

export type PolymorphicComponentProps<C, Props = {}> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { component: React.ElementType };

export function createPolymorphicComponent<ComponentDefaultType, Props>(component: any) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>;
  type PolymorphicComponent = <C = ComponentDefaultType>(
    props: ComponentProps<C>
  ) => React.ReactElement;
  return component as PolymorphicComponent;
}
