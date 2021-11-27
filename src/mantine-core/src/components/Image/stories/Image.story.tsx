import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '../Image';

storiesOf('@mantine/core/Image/stories', module).add('Caption with fixed height', () => (
  <>
    <Image
      src="https://images.unsplash.com/photo-1490855680410-49b201432be4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTk3MDQyMDI&ixlib=rb-1.2.1&q=85&dl=unsplash-bantersnaps.jpg"
      height={200}
      caption="This is caption"
    />
    <Image mt="xl" height={200} caption="This is caption" />
    <Image mt="xl" height={200} caption="This is caption" withPlaceholder />
  </>
));
