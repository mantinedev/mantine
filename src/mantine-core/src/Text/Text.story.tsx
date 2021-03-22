import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
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

const themes = Object.keys(DEFAULT_THEME.colors).map((color) => (
  <Text key={color} color={color} style={{ marginTop: 5 }}>
    {color} text
  </Text>
));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Text size={size} key={size}>
    {size} text
  </Text>
));

storiesOf('@mantine/core/Text', module)
  .add('General usage', () => (
    <>
      <Text>Default text</Text>
      <Text weight={500}>Semibold text</Text>
      <Text weight={700}>Bold text</Text>
      <Text transform="uppercase">uppercase</Text>
      <Text transform="lowercase">LOWERcase</Text>
      <Text component="i">italic</Text>
    </>
  ))
  .add('Custom component', () => (
    <Text component={CustomComponent} emoji="😮">
      Custom component
    </Text>
  ))
  .add('Multiline', () => (
    <Text style={{ padding: 20 }}>
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
  ))
  .add('Themes', () => <div style={{ padding: 20 }}>{themes}</div>)
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Links', () => (
    <>
      <Text component="a" href="https://mantine.dev" variant="link">
        Link
      </Text>
      <br />
      <Anchor href="https://mantine.dev" target="_blank">
        Anchor
      </Anchor>
    </>
  ));
