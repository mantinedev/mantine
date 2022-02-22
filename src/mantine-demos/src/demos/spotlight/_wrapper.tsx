import React from 'react';
import { SpotlightProvider, SpotlightProviderProps } from '@mantine/spotlight';
import { actions } from './_actions';
import { SpotlightControl } from './_control';

export function Wrapper(props: Partial<SpotlightProviderProps>) {
  return (
    <SpotlightProvider actions={actions} {...props}>
      <SpotlightControl />
    </SpotlightProvider>
  );
}
