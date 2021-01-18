import React from 'react';
import { storiesOf } from '@storybook/react';
import Hr from './Hr';

storiesOf('@mantine/core/Hr', module).add('General Usage', () => (
  <>
    <Hr />
    <Hr type="dotted" style={{ marginTop: 15 }} />
    <Hr type="solid" style={{ marginTop: 15 }} />
  </>
));
