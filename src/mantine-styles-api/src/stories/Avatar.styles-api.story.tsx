import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Avatar, AvatarsGroup } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Avatar as AvatarStylesApi, AvatarsGroup as AvatarsGroupStylesApi } from '../styles-api';

const avatarStyles = generateBorderStyles(AvatarStylesApi);
const avatarsGroupStyles = generateBorderStyles(AvatarsGroupStylesApi);
const useAvatarStyles = createStyles(() => avatarStyles);
const useAvatarsGroupStyles = createStyles(() => avatarsGroupStyles);

function WithClassNames() {
  return (
    <div style={{ padding: 40 }}>
      <Avatar classNames={useAvatarStyles().classes} />
      <AvatarsGroup classNames={useAvatarsGroupStyles().classes} mt="md">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarsGroup>
    </div>
  );
}

storiesOf('@mantine/core/Avatar/styles-api', module)
  .add('With sx', () => (
    <div style={{ padding: 40 }}>
      <Avatar sx={{ border: '1px solid red' }} />
      <AvatarsGroup sx={{ border: '1px solid red' }} mt="xl">
        <Avatar />
      </AvatarsGroup>
    </div>
  ))
  .add('With styles as object', () => (
    <div style={{ padding: 40 }}>
      <Avatar styles={avatarStyles} />
      <Avatar styles={{ placeholder: { backgroundColor: 'red' } }} mt="md" />
      <AvatarsGroup styles={avatarsGroupStyles} mt="md">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarsGroup>

      <AvatarsGroup limit={1} styles={{ truncated: { backgroundColor: 'red' } }}>
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarsGroup>
    </div>
  ))
  .add('With styles as function', () => (
    <div style={{ padding: 40 }}>
      <Avatar styles={() => avatarStyles} />
      <AvatarsGroup styles={() => avatarsGroupStyles} mt="md">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarsGroup>
    </div>
  ))
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider
      styles={{
        Avatar: () => avatarStyles,
        AvatarsGroup: () => avatarsGroupStyles,
      }}
    >
      <div style={{ padding: 40 }}>
        <Avatar />
        <AvatarsGroup mt="md">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarsGroup>
      </div>
    </MantineProvider>
  ));
