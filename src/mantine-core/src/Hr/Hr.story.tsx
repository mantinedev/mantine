import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hr } from './Hr';

storiesOf('@mantine/core/Hr', module).add('General usage', () => (
  <>
    <Hr />
    <Hr variant="dotted" style={{ marginTop: 15 }} />
    <Hr variant="solid" style={{ marginTop: 15 }} />
  </>
));
