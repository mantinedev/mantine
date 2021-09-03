import React from 'react';
import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { Timeline } from './Timeline';

const defaultProps = {
  children: [<Timeline.Item key="1">1</Timeline.Item>, <Timeline.Item key="2">2</Timeline.Item>],
};

describe('@mantine/core/Timeline', () => {
  itSupportsClassName(Timeline, defaultProps);
  itRendersChildren(Timeline, defaultProps);
  itSupportsStyle(Timeline, defaultProps);
  itSupportsOthers(Timeline, defaultProps);

  it('has correct displayName', () => {
    expect(Timeline.displayName).toEqual('@mantine/core/Timeline');
  });
});
