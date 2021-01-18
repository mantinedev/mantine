import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorNotification from './ErrorNotification';

storiesOf('@mantine/core/ErrorNotification', module).add('General Usage', () => (
  <div style={{ maxWidth: 400 }}>
    <ErrorNotification
      title="An error occured"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quia ex repellat alias ipsam placeat adipisci dolor commodi, quis rem iure, exercitationem dolorem ad cupiditate nisi impedit maxime sunt molestias."
      error={new Error('undefined is not a function')}
    />

    <ErrorNotification
      style={{ marginTop: 20 }}
      title="Error with no error"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quia ex repellat alias ipsam placeat adipisci dolor commodi, quis rem iure, exercitationem dolorem ad cupiditate nisi impedit maxime sunt molestias."
    />

    <ErrorNotification
      style={{ marginTop: 20 }}
      description="Error with no title. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias quibusdam vero commodi vitae nulla nam, provident possimus odit quidem minus totam itaque saepe ea! Deserunt nihil libero rem voluptatem?"
      error={new Error('undefined is not a function')}
    />
  </div>
));
