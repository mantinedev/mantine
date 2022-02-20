import React from 'react';
import { Carousel } from '@mantine/core';

function Demo() {
  return (
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
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
