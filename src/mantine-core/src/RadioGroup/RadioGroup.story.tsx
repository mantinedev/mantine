import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import { RadioGroup, Radio } from './RadioGroup';

storiesOf('@mantine/core/RadioGroup', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <RadioGroup
        label="Your favorite library/framework"
        required
        description="Don't worry it's anonymous, you can safely pick Angular"
      >
        <Radio value="react">React</Radio>
        <Radio value="ng" disabled title="Unless you can't, haha">
          Angular
        </Radio>
        <Radio value="vue">Vue</Radio>
      </RadioGroup>
    </div>
  ))
  .add('Too many items in horizontal', () => (
    <RadioGroup
      style={{ padding: 40, maxWidth: 300, background: '#f5f5f5' }}
      label="Too many items"
    >
      <Radio value="item-1">item-1</Radio>
      <Radio value="item-2">item-2</Radio>
      <Radio value="item-3">item-3</Radio>
      <Radio value="item-4">item-4</Radio>
      <Radio value="item-5">item-5</Radio>
      <Radio value="item-6">item-6</Radio>
    </RadioGroup>
  ))
  .add('Vertical', () => (
    <RadioGroup
      style={{ padding: 40 }}
      defaultValue="react"
      label="Your favorite library/framework"
      required
      description="Don't worry it's anonymous, you can safely pick Angular"
      variant="vertical"
      spacing="xl"
    >
      <Radio value="react">React</Radio>
      <Radio value="ng" disabled title="Unless you can't, haha">
        Angular
      </Radio>
      <Radio value="vue">Vue</Radio>
    </RadioGroup>
  ))
  .add('Sizes', () => (
    <>
      <RadioGroup style={{ padding: 40 }} defaultValue="1" label="Xs size" variant="vertical">
        <Radio value="1" size="xs">
          xs
        </Radio>
        <Radio value="2" size="xs">
          xs
        </Radio>
        <Radio value="3" size="xs">
          xs
        </Radio>
      </RadioGroup>
      <RadioGroup style={{ padding: 40 }} defaultValue="1" label="Sm size" variant="vertical">
        <Radio value="1" size="sm">
          sm
        </Radio>
        <Radio value="2" size="sm">
          sm
        </Radio>
        <Radio value="3" size="sm">
          sm
        </Radio>
      </RadioGroup>
      <RadioGroup style={{ padding: 40 }} defaultValue="1" label="md size" variant="vertical">
        <Radio value="1" size="md">
          md
        </Radio>
        <Radio value="2" size="md">
          md
        </Radio>
        <Radio value="3" size="md">
          md
        </Radio>
      </RadioGroup>
      <RadioGroup style={{ padding: 40 }} defaultValue="1" label="lg size" variant="vertical">
        <Radio value="1" size="lg">
          lg
        </Radio>
        <Radio value="2" size="lg">
          lg
        </Radio>
        <Radio value="3" size="lg">
          lg
        </Radio>
      </RadioGroup>
      <RadioGroup style={{ padding: 40 }} defaultValue="1" label="xl size" variant="vertical">
        <Radio value="1" size="xl">
          xl
        </Radio>
        <Radio value="2" size="xl">
          xl
        </Radio>
        <Radio value="3" size="xl">
          xl
        </Radio>
      </RadioGroup>
    </>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <RadioGroup
          label="Your favorite library/framework"
          required
          description="Don't worry it's anonymous, you can safely pick Angular"
        >
          <Radio value="react">React</Radio>
          <Radio value="ng" disabled title="Unless you can't, haha">
            Angular
          </Radio>
          <Radio value="vue">Vue</Radio>
        </RadioGroup>
      </div>
    </MantineProvider>
  ));
