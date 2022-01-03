import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Button } from '../Button';
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

  it('filters out unexpected children', () => {
    const { container } = render(
      <Timeline>
        <Timeline.Item>Child 1</Timeline.Item>
        <p className="unexpected">Unexpected child 1</p>
        <div className="unexpected">Unexpected child 1</div>
        <Timeline.Item>Child 2</Timeline.Item>
        <Button>Unexpected component</Button>
      </Timeline>
    );

    expect(container.querySelectorAll('.mantine-Timeline-item')).toHaveLength(2);
    expect(container.querySelectorAll('.mantine-Button-root')).toHaveLength(0);
    expect(container.querySelectorAll('.unexpected')).toHaveLength(0);
  });

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });
});
