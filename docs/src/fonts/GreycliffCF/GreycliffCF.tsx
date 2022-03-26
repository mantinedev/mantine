import React from 'react';
import { Global } from '@mantine/core';
import bold from './GreycliffCF-Bold.woff2';
import heavy from './GreycliffCF-Heavy.woff2';

export function GreycliffCF() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${heavy}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
