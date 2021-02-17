import React from 'react';
import { shallow as enzymeShallow } from 'enzyme';
import { MantineProvider } from '@mantine/theme';

export function shallow(children: React.ReactNode) {
  return enzymeShallow(<MantineProvider>{children}</MantineProvider>);
}
