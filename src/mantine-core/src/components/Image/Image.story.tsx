import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Image } from './Image';
import { DarkStory } from '../../../demos';

function BaseStory() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Image
        withPlaceholder
        radius="sm"
        src="https://images.unsplash.com/photo-1490855680410-49b201432be4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTk3MDQyMDI&ixlib=rb-1.2.1&q=85&dl=unsplash-bantersnaps.jpg"
        caption="Hello there"
      />
      <Image height={200} withPlaceholder radius="sm" src={null} style={{ marginTop: 20 }} />
      <Image
        height={200}
        withPlaceholder
        placeholder={<Text>Hello</Text>}
        radius="sm"
        src={null}
        style={{ marginTop: 20 }}
      />
      <Image height={200} alt="oh-oh" radius="sm" src={null} style={{ marginTop: 20 }} />
    </div>
  );
}

storiesOf('@mantine/core/Image', module)
  .add('General usage', () => <BaseStory />)
  .add('Dark theme', () => (
    <DarkStory>
      <BaseStory />
    </DarkStory>
  ));
