import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('@mantine/core/Text', module).add('General usage', () => (
  <div>
    <Text>Default text</Text>
    <Text bold>Bold default text</Text>
    <Text theme="success">Success text</Text>
    <Text theme="warning">Warning text</Text>
    <Text theme="primary">Primary text</Text>
    <Text theme="danger">Danger text</Text>
    <Text theme="muted">Muted text</Text>
    <Text size="xs">xs text</Text>
    <Text size="sm">sm text</Text>
    <Text size="md">md text</Text>
    <Text size="lg">lg text</Text>
    <Text size="xl">xl text</Text>
    <Text component="p" theme="muted" bold>
      Bold muted paragraph text
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
  </div>
));
