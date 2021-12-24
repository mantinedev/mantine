import React from 'react';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsSx,
  itSupportsRef,
} from '@mantine/tests';
import { Timeline } from './Timeline';
import { TimelineItem } from './TimelineItem/TimelineItem';

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
  itSupportsSx(Timeline, defaultProps);
  itSupportsMargins(Timeline, defaultProps);
  itSupportsRef(Timeline, defaultProps, HTMLDivElement);

  it('exports Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });

  it('has correct displayName', () => {
    expect(Timeline.displayName).toEqual('@mantine/core/Timeline');
  });
});
