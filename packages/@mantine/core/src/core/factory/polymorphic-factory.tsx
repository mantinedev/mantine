import { PolymorphicComponentProps } from './create-polymorphic-component';
import {
  ComponentClasses,
  ComponentVariablesResolver,
  FactoryPayload,
  identity,
  StaticComponents,
  ThemeExtend,
} from './factory';

export interface PolymorphicFactoryPayload extends FactoryPayload {
  defaultComponent: any;
  defaultRef: any;
}

export type PolymorphicComponentWithProps<Payload extends PolymorphicFactoryPayload> = {
  withProps: <C = Payload['defaultComponent']>(
    fixedProps: PolymorphicComponentProps<C, Payload['props']>
  ) => <L = C>(props: PolymorphicComponentProps<L, Payload['props']>) => React.ReactElement;
};

export function polymorphicFactory<Payload extends PolymorphicFactoryPayload>(
  ui: (props: Payload['props'] & { ref?: React.Ref<any> }) => React.ReactNode
) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Payload['props']>;

  type _PolymorphicComponent = <C = Payload['defaultComponent']>(
    props: ComponentProps<C>
  ) => React.ReactElement;

  type ComponentProperties = Omit<React.FunctionComponent<ComponentProps<any>>, never>;

  type PolymorphicComponent = _PolymorphicComponent &
    ComponentProperties &
    ThemeExtend<Payload> &
    ComponentClasses<Payload> &
    ComponentVariablesResolver<Payload> &
    PolymorphicComponentWithProps<Payload> &
    StaticComponents<Payload['staticComponents']>;

  const Component = ui as unknown as PolymorphicComponent;
  Component.withProps = (fixedProps: any) => {
    const Extended = (props: any) => <Component {...fixedProps} {...props} />;
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };

  Component.extend = identity as any;

  return Component as PolymorphicComponent;
}

export type MantinePolymorphicComponent<Payload extends PolymorphicFactoryPayload> = (<
  C = Payload['defaultComponent'],
>(
  props: PolymorphicComponentProps<C, Payload['props']>
) => React.ReactElement) &
  Omit<React.FunctionComponent<PolymorphicComponentProps<any, Payload['props']>>, never> &
  ThemeExtend<Payload> &
  ComponentClasses<Payload> &
  ComponentVariablesResolver<Payload> &
  PolymorphicComponentWithProps<Payload> &
  StaticComponents<Payload['staticComponents']>;
