import React from 'react';
import { storiesOf } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { DEFAULT_THEME, MantineProvider } from '../../theme';

storiesOf('@mantine/core/Skeleton', module)
  .add('General usage', () => (
    <>
      <Skeleton height={65} />
      <Skeleton height={55} />
      <Skeleton height={45} />
    </>
  ))
  .add('animated usage', () => (
    <>
      <Skeleton height={20} animated type="circle" />
      <Skeleton height={10} animated />
      <Skeleton height={10} animated />
      <Skeleton height={50} animated />
      <Skeleton height={56} animated type="circle" startColor="#ff0000" endColor="#0000ff" />
      <Skeleton height={56} animated startColor="#ff0000" endColor="#0000ff" />
    </>
  ))
  .add('type circle usage', () => (
    <>
      <Skeleton height={56} type="circle" />
      <Skeleton height={56} type="circle" animated />
      <Skeleton height={56} type="circle" animated startColor="#ff0000" endColor="#0000ff" />
    </>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: '1rem' }}
      >
        <Skeleton themeOverride={{ colorScheme: 'dark' }} height={40} />
        <Skeleton themeOverride={{ colorScheme: 'dark' }} height={40} animated />
        <Skeleton
          themeOverride={{ colorScheme: 'dark' }}
          height={56}
          animated
          type="circle"
          startColor="#ff0000"
          endColor="#0000ff"
        />
        <Skeleton
          themeOverride={{ colorScheme: 'dark' }}
          height={56}
          animated
          startColor="#ff0000"
          endColor="#0000ff"
        />
      </div>
    </MantineProvider>
  ));
