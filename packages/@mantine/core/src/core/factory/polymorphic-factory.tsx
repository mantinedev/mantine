import { forwardRef } from 'react';
import { PolymorphicComponentProps } from './create-polymorphic-component';
import {
  ComponentClasses,
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
  ui: React.ForwardRefRenderFunction<Payload['defaultRef'], Payload['props']>
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
    PolymorphicComponentWithProps<Payload> &
    StaticComponents<Payload['staticComponents']>;

  const Component = forwardRef(ui) as unknown as PolymorphicComponent;
  Component.withProps = (fixedProps: any) => {
    const Extended = forwardRef((props, ref) => (
      <Component {...fixedProps} {...props} ref={ref as any} />
    )) as any;
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };

  Component.extend = identity as any;

  return Component as PolymorphicComponent;
}
