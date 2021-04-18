import React from 'react';
import { ChatBubbleIcon } from '@modulz/radix-icons';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Blockquote } from './Blockquote';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Blockquote cite="– The great thinker" color={color} {...props}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sed eveniet deserunt
      accusantium, est aut itaque tempora iure id reprehenderit culpa aliquid repudiandae,
      consequatur commodi dolore nesciunt illo expedita quaerat?
    </Blockquote>
  ));

storiesOf('@mantine/core/Blockquote', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 500, padding: 50 }}>
      <Blockquote cite="– The great thinker">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sed eveniet deserunt
        accusantium, est aut itaque tempora iure id reprehenderit culpa aliquid repudiandae,
        consequatur commodi dolore nesciunt illo expedita quaerat?
      </Blockquote>
    </div>
  ))
  .add('Custom icon', () => (
    <div style={{ maxWidth: 500, padding: 50 }}>
      <Blockquote
        icon={<ChatBubbleIcon style={{ width: 20, height: 20 }} />}
        cite="– The great thinker"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sed eveniet deserunt
        accusantium, est aut itaque tempora iure id reprehenderit culpa aliquid repudiandae,
        consequatur commodi dolore nesciunt illo expedita quaerat?
      </Blockquote>
    </div>
  ))
  .add('Without icon', () => (
    <div style={{ maxWidth: 500, padding: 50 }}>
      <Blockquote cite="– The great thinker" icon={null}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sed eveniet deserunt
        accusantium, est aut itaque tempora iure id reprehenderit culpa aliquid repudiandae,
        consequatur commodi dolore nesciunt illo expedita quaerat?
      </Blockquote>
    </div>
  ))
  .add('Themes', () => (
    <div style={{ maxWidth: 500, padding: 50 }}>{getThemes({ style: { marginTop: 20 } })}</div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <div style={{ maxWidth: 500, padding: 50 }}>
        {getThemes({ style: { marginTop: 20 }, themeOverride: { colorScheme: 'dark' } })}
      </div>
    </div>
  ));
