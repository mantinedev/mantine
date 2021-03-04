import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Spoiler } from './Spoiler';

const content = (
  <>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus ad non natus nam facilis
      quidem rerum numquam? Quae impedit, minima accusantium doloribus laudantium sunt consequuntur
      harum non. Saepe, laborum!
    </Text>

    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus ad non natus nam facilis
      quidem rerum numquam? Quae impedit, minima accusantium doloribus laudantium sunt consequuntur
      harum non. Saepe, laborum!
    </Text>

    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus ad non natus nam facilis
      quidem rerum numquam? Quae impedit, minima accusantium doloribus laudantium sunt consequuntur
      harum non. Saepe, laborum!
    </Text>
  </>
);

storiesOf('@mantine/core', module).add('Spoiler', () => (
  <div style={{ maxWidth: 400, padding: 50 }}>
    <Spoiler showLabel="Show more" hideLabel="Hide" maxHeight={100}>
      {content}
    </Spoiler>

    <Spoiler
      showLabel="No animations"
      hideLabel="No animations"
      transitionDuration={null}
      maxHeight={100}
    >
      {content}
    </Spoiler>

    <Spoiler maxHeight={100} showLabel="Show" hideLabel="Hide">
      <Text>No Spoiler here when content is not high enough for spoiler</Text>
    </Spoiler>
  </div>
));
