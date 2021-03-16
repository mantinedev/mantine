import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Anchor } from './Text';

const CustomComponent = ({
  emoji,
  children,
  ...others
}: {
  emoji: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {emoji} {children}
  </div>
);

storiesOf('@mantine/core/Text', module).add('Text', () => (
  <>
    <Text>Default text</Text>
    <Text weight={500}>Semibold text</Text>
    <Text weight={700}>Bold text</Text>
    <Text color="teal">Teal text</Text>
    <Text color="yellow">Yellow text</Text>
    <Text color="blue">Blue text</Text>
    <Text color="red">Red text</Text>
    <Text color="gray">Gray text</Text>
    <Text size="xs">xs text</Text>
    <Text size="sm">sm text</Text>
    <Text size="md">md text</Text>
    <Text size="lg">lg text</Text>
    <Text size="xl">xl text</Text>
    <Text transform="uppercase">uppercase</Text>
    <Text transform="lowercase">LOWERcase</Text>
    <Text<'i'> component="i">italic</Text>
    <Text component="p" color="gray" weight={900}>
      Bold muted paragraph text
    </Text>
    <Text<'a'> component="a" href="https://mantine.dev" variant="link">
      Link
    </Text>
    <Anchor href="https://mantine.dev" target="_blank">
      Anchor
    </Anchor>

    <Text<typeof CustomComponent> component={CustomComponent} emoji="😮">
      Custom component
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
  </>
));
