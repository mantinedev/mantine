import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Text from './Text';

storiesOf('@mantine/core', module).add('Text', () => (
  <MantineProvider>
    <Text>Default text</Text>
    <Text weight={500}>Semibold default text</Text>
    <Text weight={700}>Bold default text</Text>
    <Text color="teal">Success text</Text>
    <Text color="yellow">Warning text</Text>
    <Text color="blue">Primary text</Text>
    <Text color="red">Danger text</Text>
    <Text color="gray">Muted text</Text>
    <Text size="xs">xs text</Text>
    <Text size="sm">sm text</Text>
    <Text size="md">md text</Text>
    <Text size="lg">lg text</Text>
    <Text size="xl">xl text</Text>
    <Text component="p" color="gray" weight={900}>
      Bold muted paragraph text
    </Text>
    <Text<'a'> component="a" color="blue" href="https://google.com">
      Link
    </Text>
    <Text>
      Multiline: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque commodi
      perferendis velit itaque. Harum magnam voluptas molestias a dolore atque hic. Repudiandae
      aliquam et hic aut ducimus debitis voluptatem cumque veniam aliquid commodi, ratione quae iste
      similique aperiam tenetur quo eius labore rem animi ex. Assumenda deserunt dolore, dicta vero
      veritatis enim perferendis ea inventore earum alias adipisci error quisquam obcaecati officia
      suscipit quidem sequi qui? Itaque asperiores perspiciatis sit iure eum voluptate commodi
      officia pariatur quae consectetur atque error, facere illum ad corrupti, rerum aperiam
      molestias cupiditate numquam ipsa ratione doloremque repudiandae? Eveniet deleniti consequatur
      officia rem quisquam enim.
    </Text>
  </MantineProvider>
));
