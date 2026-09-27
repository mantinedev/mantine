import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourTitle, TourTitleProps, TourTitleStylesNames } from './TourTitle';

const TestContainer = createContextContainer(TourTitle, Tour.Root, { active: true, stepsCount: 1 });

const defaultProps: TourTitleProps = {};

describe('@mantine/core/TourTitle', () => {
  tests.itSupportsSystemProps<TourTitleProps, TourTitleStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/TourTitle',
    stylesApiSelectors: ['title'],
    stylesApiName: 'Tour',
    compound: true,
    providerStylesApi: false,
    selector: '.mantine-Tour-title',
  });

  it('renders children', () => {
    render(<TestContainer>Test title</TestContainer>);
    expect(screen.getByText('Test title')).toBeInTheDocument();
  });

  it('renders as h3 element', () => {
    render(<TestContainer>Heading</TestContainer>);
    expect(screen.getByText('Heading').tagName).toBe('H3');
  });
});
