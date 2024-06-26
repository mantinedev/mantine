import { render, tests } from '@mantine-tests/core';
import { Timeline, TimelineProps, TimelineStylesNames } from './Timeline';
import { TimelineItem } from './TimelineItem/TimelineItem';

const defaultProps: TimelineProps = {
  children: [
    <Timeline.Item key="1" title="First" bullet="$">
      1
    </Timeline.Item>,
    <Timeline.Item key="2" title="Second" bullet="$">
      2
    </Timeline.Item>,
    <Timeline.Item key="3" title="Third" bullet="$">
      3
    </Timeline.Item>,
  ],
};

describe('@mantine/core/Timeline', () => {
  tests.itSupportsSystemProps<TimelineProps, TimelineStylesNames>({
    component: Timeline,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Timeline',
    stylesApiSelectors: ['root', 'itemBody', 'itemContent', 'itemBullet', 'item', 'itemTitle'],
  });

  it('handles active item correctly', () => {
    const { container, rerender } = render(<Timeline {...defaultProps} active={1} />);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(2);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(1);

    rerender(<Timeline {...defaultProps} active={2} />);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(3);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(2);
  });

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });
});
