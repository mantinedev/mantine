import React from 'react';
import { SpotlightProvider, SpotlightProviderProps } from '@mantine/spotlight';
import { actions } from './_actions';
import { SpotlightControl } from './_control';

export function Wrapper({
  buttonLabel,
  ...others
}: Partial<SpotlightProviderProps> & { buttonLabel?: string }) {
  return (
    <SpotlightProvider actions={actions} {...others}>
      <SpotlightControl buttonLabel={buttonLabel} />
    </SpotlightProvider>
  );
}
