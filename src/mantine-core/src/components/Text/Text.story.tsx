import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '../../theme';
import { Text } from './Text';

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

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Text key={color} color={color} style={{ marginTop: 5 }} {...props}>
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
    <Text
      style={{
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
      }}
      lineClamp={7}
    >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum optio adipisci dolore
        itaque nobis unde tempore iusto ullam nisi cupiditate blanditiis earum minus modi officia
        ducimus iste, minima incidunt. Facilis nihil fugiat soluta repellat voluptatem in quasi
        dicta explicabo dolor animi sed commodi, laborum, optio tempora eius eligendi rem?
      </p>
      <p>
        Quidem saepe magnam soluta eos quis dolorem earum sapiente aspernatur iste, consectetur sunt
        error? Esse assumenda reiciendis vitae. Molestiae, fugiat perferendis neque error vero rerum
        iusto blanditiis reprehenderit officia asperiores laboriosam distinctio exercitationem
        pariatur fuga aliquid sint dicta labore minima dolorum quod nobis. Nisi ea commodi inventore
        obcaecati ullam optio.
      </p>
      <p>
        Cumque beatae animi et molestiae ea. Veritatis doloremque repellendus accusantium molestiae
        iusto nihil, pariatur qui obcaecati, natus perferendis sapiente voluptate sequi sit ut
        facilis. Voluptate id modi adipisci, saepe, quo aspernatur hic asperiores sequi, temporibus
        doloribus minus. Recusandae, enim molestiae. Iusto beatae facilis quidem alias! Suscipit
        delectus magnam distinctio iste!
      </p>
      <p>
        Eveniet suscipit ipsam tempore sapiente, quos debitis! Quae natus minus porro quam voluptate
        enim et, molestias blanditiis explicabo eius aliquid nam ipsa accusantium velit officiis
        nisi, quos sit. Illo nostrum, harum unde error voluptate dolorem, magnam delectus et
        officiis sint, vero atque enim laborum impedit iure ab ipsum consequatur voluptates!
      </p>
    </Text>
  ))
  .add('Themes', () => <div style={{ padding: 20 }}>{getThemes()}</div>)
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Link', () => (
    <div style={{ padding: 20 }}>
      <Text component="a" href="https://mantine.dev" variant="link">
        Link
      </Text>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Text themeOverride={{ colorScheme: 'dark' }}>Default text</Text>
      <Text themeOverride={{ colorScheme: 'dark' }} weight={500}>
        Semibold text
      </Text>
      <Text themeOverride={{ colorScheme: 'dark' }} weight={700}>
        Bold text
      </Text>

      {getThemes({ themeOverride: { colorScheme: 'dark' } })}
    </div>
  ));
