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
    StaticComponents<Payload['staticComponents']>;

  const Component = forwardRef(ui) as unknown as PolymorphicComponent;

  Component.extend = identity as any;

  return Component as PolymorphicComponent;
}
