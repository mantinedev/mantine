import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@mantine/tests';
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
  itSupportsProviderVariant(Timeline, defaultProps, 'Timeline', ['root', 'item']);
  itSupportsSystemProps({
    component: Timeline,
    props: defaultProps,
    excludePadding: true,
    displayName: '@mantine/core/Timeline',
    refType: HTMLDivElement,
    providerName: 'Timeline',
  });

  it('handles active item correctly', () => {
    const { container: secondActive } = render(<Timeline {...defaultProps} active={1} />);
    const { container: thirdActive } = render(<Timeline {...defaultProps} active={2} />);

    expect(secondActive.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(2);
    expect(secondActive.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(
      1
    );

    expect(thirdActive.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(3);
    expect(thirdActive.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(
      2
    );
  });

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });
});
