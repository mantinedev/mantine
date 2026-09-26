import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { Timeline } from '../Timeline';
import { TimelineItem, TimelineItemProps, TimelineItemStylesNames } from './TimelineItem';

const TestContainer = createContextContainer(TimelineItem, Timeline, {});

const defaultProps: TimelineItemProps = {
  title: 'test-title',
  bullet: 'test-bullet',
  opposite: 'test-opposite',
};

describe('@mantine/core/TimelineItem', () => {
  tests.itSupportsSystemProps<TimelineItemProps, TimelineItemStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/TimelineItem',
    stylesApiSelectors: [
      'itemBody',
      'itemContent',
      'itemBullet',
      'item',
      'itemTitle',
      'itemOpposite',
    ],
    stylesApiName: 'Timeline',
    compound: true,
    providerStylesApi: false,
    selector: '.mantine-Timeline-item',
  });

  it('renders given bullet', () => {
    render(<TestContainer bullet="test-bullet" />);
    expect(screen.getByText('test-bullet')).toBeInTheDocument();
  });

  it('renders given title', () => {
    render(<TestContainer title="test-title" />);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });

  it('renders given opposite content', () => {
    render(<TestContainer opposite="test-opposite" />);
    expect(screen.getByText('test-opposite')).toBeInTheDocument();
  });

  it('does not render itemOpposite element when opposite prop is not set', () => {
    const { container } = render(<TestContainer />);
    expect(container.querySelector('.mantine-Timeline-itemOpposite')).not.toBeInTheDocument();
  });

  it('renders itemOpposite element when opposite prop is set', () => {
    const { container } = render(<TestContainer opposite="opposite content" />);
    expect(container.querySelector('.mantine-Timeline-itemOpposite')).toBeInTheDocument();
  });

  it('sets data-alternate attribute when alternate prop is set', () => {
    const { container } = render(<TestContainer alternate />);
    expect(container.querySelector('.mantine-Timeline-item')).toHaveAttribute('data-alternate');
  });

  it('does not set data-alternate attribute when alternate prop is not set', () => {
    const { container } = render(<TestContainer />);
    expect(container.querySelector('.mantine-Timeline-item')).not.toHaveAttribute('data-alternate');
  });
});
