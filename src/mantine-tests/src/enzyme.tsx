import React from 'react';
import { shallow as enzymeShallow, mount as enzymeMount, ShallowWrapper } from 'enzyme';
import { MantineProvider } from '@mantine/theme';

export function shallow(children: React.ReactNode) {
  return enzymeShallow(<MantineProvider>{children}</MantineProvider>).dive();
}

export function mount(children: React.ReactNode) {
  return enzymeMount(<MantineProvider>{children}</MantineProvider>);
}

export function unwrapForwardedRef(component: ShallowWrapper) {
  return component.dive().dive();
}
