import React from 'react';
import { storiesOf } from '@storybook/react';
import { Carousel } from './Carousel';
//import { Image } from '../Image';

storiesOf('@mantine/core/Carousel/stories', module).add('Test Story', () => (
  <Carousel
    style={{
      maxWidth: 400,
    }}
    height={200}
  >
    <Carousel.Item>
      <div
        style={{
          width: 400,
          height: 200,
          backgroundColor: '#FFF661',
          textAlign: 'center',
          verticalAlign: 'center',
        }}
      />
    </Carousel.Item>
    <Carousel.Item>
      <div
        style={{
          width: 400,
          height: 200,
          backgroundColor: '#FF9FBB',
          textAlign: 'center',
          verticalAlign: 'center',
        }}
      />
    </Carousel.Item>
  </Carousel>
));
