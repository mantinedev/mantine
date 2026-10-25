import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourBody, TourBodyProps, TourBodyStylesNames } from './TourBody';

const TestContainer = createContextContainer(TourBody, Tour.Root, { active: true, stepsCount: 1 });

const defaultProps: TourBodyProps = {};

describe('@mantine/core/TourBody', () => {
  tests.itSupportsSystemProps<TourBodyProps, TourBodyStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/TourBody',
    stylesApiSelectors: ['body'],
    stylesApiName: 'Tour',
    compound: true,
    providerStylesApi: false,
    selector: '.mantine-Tour-body',
  });

  it('renders children', () => {
    render(<TestContainer>Test body content</TestContainer>);
    expect(screen.getByText('Test body content')).toBeInTheDocument();
  });
});
