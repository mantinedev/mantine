import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { ProgressRoot } from '../ProgressRoot/ProgressRoot';
import {
  ProgressSection,
  ProgressSectionProps,
  ProgressSectionStylesNames,
} from './ProgressSection';

const TestContainer = createContextContainer(ProgressSection, ProgressRoot, {});

const defaultProps: ProgressSectionProps = {
  value: 20,
};

describe('@mantine/core/ProgressSection', () => {
  tests.axe([<TestContainer {...defaultProps} aria-label="test" key="1" />]);

  tests.itSupportsSystemProps<ProgressSectionProps, ProgressSectionStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ProgressSection',
    stylesApiSelectors: ['section'],
    stylesApiName: 'Progress',
    selector: '[role="progressbar"]',
    compound: true,
    providerStylesApi: false,
  });

  it('sets aria attributes based on props', () => {
    render(<TestContainer value={20} />);
    const element = screen.getByRole('progressbar');

    expect(element).toHaveAttribute('aria-valuemax', '100');
    expect(element).toHaveAttribute('aria-valuemin', '0');
    expect(element).toHaveAttribute('aria-valuenow', '20');
    expect(element).toHaveAttribute('aria-valuetext', '20%');
  });

  it('sets data-striped attribute based on striped prop', () => {
    const { rerender } = render(<TestContainer value={20} striped />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('data-striped');
    rerender(<TestContainer value={20} striped={false} />);
    expect(screen.getByRole('progressbar')).not.toHaveAttribute('data-striped');
  });

  it('sets data-animated attribute based on animated prop', () => {
    const { rerender } = render(<TestContainer value={20} animated />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('data-animated');
    expect(screen.getByRole('progressbar')).toHaveAttribute('data-striped');
    rerender(<TestContainer value={20} animated={false} />);
    expect(screen.getByRole('progressbar')).not.toHaveAttribute('data-animated');
  });
});
