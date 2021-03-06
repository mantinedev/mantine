import React from 'react';
import { storiesOf } from '@storybook/react';
import { Overlay } from './Overlay';

storiesOf('@mantine/core', module).add('Overlay', () => <Overlay color="#000" opacity={0.5} />);
