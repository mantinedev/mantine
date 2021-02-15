import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Text from '../Text/Text';
import Spoiler from './Spoiler';

storiesOf('@mantine/core', module).add('Spoiler', () => (
  <MantineProvider>
    <div style={{ maxWidth: 400, padding: 50 }}>
      <Spoiler showLabel="Show more" hideLabel="Hide" maxHeight={100}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus ad non natus nam
          facilis quidem rerum numquam? Quae impedit, minima accusantium doloribus laudantium sunt
          consequuntur harum non. Saepe, laborum!
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus ad non natus nam
          facilis quidem rerum numquam? Quae impedit, minima accusantium doloribus laudantium sunt
          consequuntur harum non. Saepe, laborum!
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus ad non natus nam
          facilis quidem rerum numquam? Quae impedit, minima accusantium doloribus laudantium sunt
          consequuntur harum non. Saepe, laborum!
        </Text>
      </Spoiler>
    </div>
  </MantineProvider>
));
