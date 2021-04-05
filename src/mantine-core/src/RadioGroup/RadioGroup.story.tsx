import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioGroup, Radio } from './RadioGroup';

storiesOf('@mantine/core/RadioGroup', module).add('General usage', () => (
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
    <RadioGroup
      style={{ marginTop: 40 }}
      defaultValue="react"
      label="Your favorite library/framework"
      required
      description="Don't worry it's anonymous, you can safely pick Angular"
      variant="vertical"
    >
      <Radio value="react">React</Radio>
      <Radio value="ng" disabled title="Unless you can't, haha">
        Angular
      </Radio>
      <Radio value="vue" size="xl">
        Vue
      </Radio>
    </RadioGroup>
  </div>
));
