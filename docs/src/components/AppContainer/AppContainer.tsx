import 'normalize.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/700.css';

import React from 'react';
import useStyles from './AppContainer.styles';

export default function AppContainer({ children }: { children: React.ReactNode }) {
  useStyles();
  return <>{children}</>;
}
