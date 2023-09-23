import React from 'react';
import { render, tests, createContextContainer, screen } from '@mantine/tests';
import { TimelineItem, TimelineItemProps, TimelineItemStylesNames } from './TimelineItem';
import { Timeline } from '../Timeline';

const TestContainer = createContextContainer(TimelineItem, Timeline, {});

const defaultProps: TimelineItemProps = {
  title: 'test-title',
  bullet: 'test-bullet',
};

describe('@mantine/core/TimelineItem', () => {
  tests.itSupportsSystemProps<TimelineItemProps, TimelineItemStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/TimelineItem',
    stylesApiSelectors: ['itemBody', 'itemContent', 'itemBullet', 'item', 'itemTitle'],
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
});
