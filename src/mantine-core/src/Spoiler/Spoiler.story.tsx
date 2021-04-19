import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
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

storiesOf('@mantine/core/Spoiler', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 400, padding: 50 }}>
      <Spoiler showLabel="Show more" hideLabel="Hide" maxHeight={100}>
        {content}
      </Spoiler>
    </div>
  ))
  .add('No animations', () => (
    <div style={{ maxWidth: 400, padding: 50 }}>
      <Spoiler
        showLabel="No animations"
        hideLabel="No animations"
        transitionDuration={null}
        maxHeight={100}
      >
        {content}
      </Spoiler>
    </div>
  ))
  .add('No spoiler', () => (
    <div style={{ maxWidth: 400, padding: 50 }}>
      <Spoiler maxHeight={100} showLabel="Show" hideLabel="Hide">
        <Text>No Spoiler here when content is not high enough for spoiler</Text>
      </Spoiler>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}>
      <div style={{ maxWidth: 400, padding: 50 }}>
        <Spoiler
          showLabel="Show more"
          hideLabel="Hide"
          maxHeight={100}
          themeOverride={{ colorScheme: 'dark' }}
        >
          <Text themeOverride={{ colorScheme: 'dark' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi officia harum!
            Iure minima pariatur vero aperiam ea, magni itaque ut voluptate voluptates, in molestias
            nesciunt sunt. Repellendus, aliquid id? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt inventore cumque reprehenderit, illum corporis, quaerat
            officia voluptatem dolores eius tenetur architecto, ratione labore quibusdam deserunt
            delectus sequi modi officiis doloribus.
          </Text>
        </Spoiler>
      </div>
    </div>
  ));
