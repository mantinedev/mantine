import React from 'react';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { Timeline } from './Timeline';
import { TimelineItem } from './TimelineItem/TimelineItem';
import { Timeline as TimelineStylesApi } from './styles.api';

const defaultProps = {
  children: [
    <Timeline.Item key="1" title="Hello" bullet="$">
      1
    </Timeline.Item>,
    <Timeline.Item key="2">2</Timeline.Item>,
    <Timeline.Item key="3">3</Timeline.Item>,
  ],
};

describe('@mantine/core/Timeline', () => {
  itSupportsClassName(Timeline, defaultProps);
  itSupportsStyle(Timeline, defaultProps);
  itSupportsOthers(Timeline, defaultProps);
  itSupportsMargins(Timeline, defaultProps);

  itSupportsStylesApi(
    Timeline,
    { ...defaultProps, active: 1 },
    Object.keys(TimelineStylesApi),
    'Timeline'
  );

  it('exports Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });

  it('has correct displayName', () => {
    expect(Timeline.displayName).toEqual('@mantine/core/Timeline');
  });
});
