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

  it('renders the itemOpposite element only for items that set opposite', () => {
    const { container } = render(
      <Timeline>
        <Timeline.Item opposite="test">1</Timeline.Item>
        <Timeline.Item>2</Timeline.Item>
      </Timeline>
    );
    expect(container.querySelectorAll('.mantine-Timeline-itemOpposite')).toHaveLength(1);
  });

  it('honours an index prop declared on Timeline.Item', () => {
    const { container } = render(
      <Timeline active={1}>
        <Timeline.Item>1</Timeline.Item>
        <Timeline.Item index={2}>2</Timeline.Item>
        <Timeline.Item>3</Timeline.Item>
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    expect(items[0]).toHaveAttribute('data-active');
    expect(items[1]).not.toHaveAttribute('data-active');
    expect(items[2]).not.toHaveAttribute('data-active');
  });

  it('honours active and lineActive props declared on Timeline.Item', () => {
    const { container } = render(
      <Timeline active={-1}>
        <Timeline.Item>1</Timeline.Item>
        <Timeline.Item active lineActive>
          2
        </Timeline.Item>
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    expect(items[0]).not.toHaveAttribute('data-active');
    expect(items[1]).toHaveAttribute('data-active');
    expect(items[1]).toHaveAttribute('data-line-active');
  });

  it('supports a wrapped Timeline.Item that declares its index', () => {
    function WrappedItem(_props: { children?: React.ReactNode }) {
      return <Timeline.Item index={1}>wrapped</Timeline.Item>;
    }

    const { container } = render(
      <Timeline active={1}>
        <Timeline.Item>1</Timeline.Item>
        <WrappedItem />
        <Timeline.Item>3</Timeline.Item>
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    expect(items[1]).toHaveAttribute('data-active');
    expect(items[1]).not.toHaveAttribute('data-line-active');
    expect(items[0]).toHaveAttribute('data-line-active');
    expect(items[2]).not.toHaveAttribute('data-active');
  });

  it('renders a wrapped Timeline.Item that declares no index as inactive', () => {
    function WrappedItem(_props: { children?: React.ReactNode }) {
      return <Timeline.Item>wrapped</Timeline.Item>;
    }

    const { container } = render(
      <Timeline active={2}>
        <Timeline.Item>1</Timeline.Item>
        <WrappedItem />
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    expect(items[0]).toHaveAttribute('data-active');
    expect(items[1]).not.toHaveAttribute('data-active');
  });

  it('keeps the line and spacing of an item wrapped in a DOM element', () => {
    function WrappedItem({ index, children }: { index?: number; children?: React.ReactNode }) {
      return (
        <div>
          <Timeline.Item index={index}>{children}</Timeline.Item>
        </div>
      );
    }

    const { container } = render(
      <Timeline active={1}>
        <Timeline.Item>1</Timeline.Item>
        <WrappedItem>2</WrappedItem>
        <Timeline.Item>3</Timeline.Item>
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    expect(items[1]).not.toHaveAttribute('data-first');
    expect(items[1]).not.toHaveAttribute('data-last');
    expect(items[0]).toHaveAttribute('data-first');
    expect(items[2]).toHaveAttribute('data-last');
  });

  it('resolves reverseActive for a wrapped Timeline.Item', () => {
    function WrappedItem(_props: { children?: React.ReactNode }) {
      return <Timeline.Item index={2}>wrapped</Timeline.Item>;
    }

    const { container } = render(
      <Timeline active={0} reverseActive>
        <Timeline.Item>1</Timeline.Item>
        <Timeline.Item>2</Timeline.Item>
        <WrappedItem />
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    expect(items[0]).not.toHaveAttribute('data-active');
    expect(items[1]).not.toHaveAttribute('data-active');
    expect(items[2]).toHaveAttribute('data-active');
  });

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });
});
