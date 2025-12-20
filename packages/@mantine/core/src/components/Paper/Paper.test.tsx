import { render, tests } from '@mantine-tests/core';
import { Paper, PaperProps, PaperStylesNames } from './Paper';

const defaultProps: PaperProps = {};

describe('@mantine/core/Paper', () => {
  tests.itSupportsSystemProps<PaperProps, PaperStylesNames>({
    component: Paper,
    props: defaultProps,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/Paper',
    stylesApiSelectors: ['root'],
  });

  it('sets data-with-border attribute when withBorder props is set', () => {
    const { rerender, container } = render(<Paper {...defaultProps} withBorder />);
    expect(container.querySelector('div')).toHaveAttribute('data-with-border');
    rerender(<Paper {...defaultProps} withBorder={false} />);
    expect(container.querySelector('div')).not.toHaveAttribute('data-with-border');
  });
});
