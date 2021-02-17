import React from 'react';
import { shallow as enzymeShallow, ShallowWrapper } from 'enzyme';
import { MantineProvider } from '@mantine/theme';

export function shallow(children: React.ReactNode) {
  return enzymeShallow(<MantineProvider>{children}</MantineProvider>).dive();
}

export function unwrapForwardedRef(component: ShallowWrapper) {
  return component.dive().dive();
}
