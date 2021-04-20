import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { AuthenticationForm } from '@mantine/demos';
import { Button } from '../Button/Button';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { LoadingOverlay } from './LoadingOverlay';

function LoadingOverlayDemo(props?: any) {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ width: 400, padding: 20 }}>
      <div style={{ width: 400, position: 'relative' }}>
        <LoadingOverlay visible={visible} {...props} />
        <AuthenticationForm />
      </div>

      <ElementsGroup position="center" style={{ marginTop: 30 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </div>
  );
}

storiesOf('@mantine/core/LoadingOverlay', module)
  .add('General usage', () => <LoadingOverlayDemo />)
  .add('Custom Loader props', () => (
    <LoadingOverlayDemo loaderProps={{ size: 'lg', color: 'grape' }} />
  ))
  .add('Custom Overlay props', () => <LoadingOverlayDemo overlayOpacity={0.6} overlayColor="red" />)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <LoadingOverlayDemo themeOverride={{ colorScheme: 'dark' }} />
    </div>
  ));
