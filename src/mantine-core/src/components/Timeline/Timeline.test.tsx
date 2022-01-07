import React from 'react';
import { itFiltersChildren, itSupportsSystemProps } from '@mantine/tests';
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
  itSupportsSystemProps({
    component: Timeline,
    props: defaultProps,
    displayName: '@mantine/core/Timeline',
    refType: HTMLDivElement,
  });

  itFiltersChildren(Timeline, defaultProps, '.mantine-Timeline-item', [
    <Timeline.Item>Child 1</Timeline.Item>,
    <Timeline.Item>Child 2</Timeline.Item>,
  ]);

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });
});
