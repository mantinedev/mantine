import React, { useState } from 'react';
import {
  LoadingOverlay,
  Button,
  Group,
  useMantineTheme,
  DEFAULT_THEME,
  rem,
  Box,
} from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';
import { demoBase } from './_demo-base';

const code = `
import { DEFAULT_THEME, LoadingOverlay } from '@mantine/core';

const customLoader = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={DEFAULT_THEME.colors.blue[6]}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

function Demo() {
  return <LoadingOverlay loader={customLoader} visible />;
}
`;

const customLoader = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={DEFAULT_THEME.colors.blue[6]}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

export function Demo() {
  const [visible, setVisible] = useState(true);
  const theme = useMantineTheme();

  return (
    <>
      <Box
        sx={{
          borderRadius: rem(4),
          position: 'relative',
          margin: 'auto',
        }}
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          sx={{ borderRadius: rem(4) }}
          loader={customLoader}
        />
        <AuthenticationForm noSubmit noShadow={theme.colorScheme === 'dark'} />
      </Box>

      <Group position="center" mt="xl">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}

export const loader: MantineDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};
