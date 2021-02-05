import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../Text/Text';
import DropdownBody from './DropdownBody';

storiesOf('@mantine/core', module).add('DropdownBody', () => (
  <DropdownBody style={{ width: 260, height: 300 }}>
    <Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi, placeat
      quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus dignissimos
      reiciendis quasi repellat quos voluptas ullam.
    </Text>
  </DropdownBody>
));
