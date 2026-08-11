import { render, tests } from '@mantine-tests/core';
import { Timeline, TimelineProps, TimelineStylesNames } from './Timeline';
import { TimelineItem } from './TimelineItem/TimelineItem';

const defaultProps: TimelineProps = {
  children: [
    <Timeline.Item key="1" title="First" bullet="$" opposite="Opposite 1">
      1
    </Timeline.Item>,
    <Timeline.Item key="2" title="Second" bullet="$" opposite="Opposite 2">
      2
    </Timeline.Item>,
    <Timeline.Item key="3" title="Third" bullet="$" opposite="Opposite 3">
      3
    </Timeline.Item>,
  ],
};

describe('@mantine/core/Timeline', () => {
  tests.itSupportsSystemProps<TimelineProps, TimelineStylesNames>({
    component: Timeline,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Timeline',
    stylesApiSelectors: [
      'root',
      'itemBody',
      'itemContent',
      'itemBullet',
      'item',
      'itemTitle',
      'itemOpposite',
    ],
  });

  it('handles active item correctly', () => {
    const { container, rerender } = render(<Timeline {...defaultProps} active={1} />);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(2);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(1);

    rerender(<Timeline {...defaultProps} active={2} />);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(3);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(2);
  });

  it('sets data-opposite attribute when any item has opposite prop', () => {
    const { container, rerender } = render(
      <Timeline>
        <Timeline.Item opposite="test">1</Timeline.Item>
        <Timeline.Item>2</Timeline.Item>
      </Timeline>
    );
    expect(container.querySelector('.mantine-Timeline-root')).toHaveAttribute('data-opposite');

    rerender(
      <Timeline>
        <Timeline.Item>1</Timeline.Item>
        <Timeline.Item>2</Timeline.Item>
      </Timeline>
    );
    expect(container.querySelector('.mantine-Timeline-root')).not.toHaveAttribute('data-opposite');
  });

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });
});
