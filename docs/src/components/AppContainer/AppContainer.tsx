import 'normalize.css';
import 'typeface-roboto';
import 'typeface-ibm-plex-mono';

import React from 'react';
import { useMantineTheme } from '@mantine/core';
import useStyles from './AppContainer.styles';

export default function AppContainer({ children }: { children: React.ReactNode }) {
  useStyles({ theme: useMantineTheme() });
  return <>{children}</>;
}
