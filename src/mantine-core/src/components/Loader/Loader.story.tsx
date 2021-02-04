import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './Loader';

storiesOf('@mantine/core/Loader', module).add('General Usage', () => (
  <>
    <Loader color="teal" style={{ marginTop: 20 }} size={60} />
    <Loader color="indigo" style={{ marginTop: 20 }} size={42} />
    <Loader color="lime" style={{ marginTop: 20 }} size={36} />
    <Loader style={{ marginTop: 20 }} size={30} />
    <Loader color="cyan" style={{ marginTop: 20 }} size={24} />
    <Loader color="gray" style={{ marginTop: 20 }} size={18} />
    <Loader color="orange" style={{ marginTop: 20 }} size={12} />
  </>
));
