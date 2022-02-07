import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useInterval } from '@mantine/hooks';
import { Image } from './Image';

const images = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3748&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3506&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
];

function ImageChangesOverTime() {
  const [current, setCurrent] = useState(0);
  const interval = useInterval(() => setCurrent((c) => (c === 2 ? 0 : c + 1)), 2000);
  useEffect(() => {
    interval.start();
  }, []);
  return <Image src={images[current]} withPlaceholder />;
}

storiesOf('@mantine/core/Image/stories', module)
  .add('Caption with fixed height', () => (
    <>
      <Image
        src="https://images.unsplash.com/photo-1490855680410-49b201432be4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTk3MDQyMDI&ixlib=rb-1.2.1&q=85&dl=unsplash-bantersnaps.jpg"
        height={200}
        caption="This is caption"
      />
      <Image mt="xl" height={200} caption="This is caption" />
      <Image mt="xl" height={200} caption="This is caption" withPlaceholder />
    </>
  ))
  .add('src changes over time', () => <ImageChangesOverTime />);
