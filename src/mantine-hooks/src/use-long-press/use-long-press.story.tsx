import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@mantine/core';
import { useLongPress } from './use-long-press';

const Demo = () => {
  const [isVisible, setVisible] = useState(false);
  const timeout = 500;
  const ref = useLongPress<HTMLButtonElement>(
    () => {
      setVisible(!isVisible);
    },
    { timeout }
  );

  return (
    <div>
      <Button ref={ref}>{`${isVisible ? 'hide' : 'show'} in ${timeout}ms`}</Button>
      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus est, accumsan in
          purus vitae, feugiat molestie quam. Nam volutpat nunc dignissim, sodales massa at,
          convallis leo. Phasellus accumsan, libero quis tempus tempor, arcu odio bibendum magna, ac
          elementum magna metus sed urna. Integer gravida dolor at purus blandit malesuada. Morbi
          finibus, mi in rhoncus accumsan, ante lacus bibendum magna, eget lacinia metus purus at
          neque.
        </p>
      )}
    </div>
  );
};

storiesOf('Hooks/use-long-press', module).add('Horizontal usage', () => (
  <div style={{ padding: 40 }}>
    <Demo />
  </div>
));
