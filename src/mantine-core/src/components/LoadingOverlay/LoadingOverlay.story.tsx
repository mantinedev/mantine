import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { AuthenticationForm } from '../../../demos';
import { DEFAULT_THEME, MantineProvider } from '../../theme';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { LoadingOverlay } from './LoadingOverlay';

function LoadingOverlayDemo(props?: any) {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ width: 400, padding: 20 }}>
      <div style={{ width: 400, position: 'relative' }}>
        <LoadingOverlay visible={visible} {...props} />
        <AuthenticationForm />
      </div>

      <Group position="center" style={{ marginTop: 30 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </div>
  );
}

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

storiesOf('@mantine/core/LoadingOverlay', module)
  .add('General usage', () => <LoadingOverlayDemo />)
  .add('Custom Loader props', () => (
    <MantineProvider theme={{ loader: 'bars' }}>
      <LoadingOverlayDemo loaderProps={{ size: 'lg', color: 'grape' }} />
    </MantineProvider>
  ))
  .add('Custom Overlay props', () => <LoadingOverlayDemo overlayOpacity={0.6} overlayColor="red" />)
  .add('Custom loader', () => <LoadingOverlayDemo loader={customLoader} />)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <LoadingOverlayDemo themeOverride={{ colorScheme: 'dark' }} />
    </div>
  ));
