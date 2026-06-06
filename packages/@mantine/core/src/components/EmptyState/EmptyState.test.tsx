import { render, screen, tests } from '@mantine-tests/core';
import { EmptyState, EmptyStateProps, EmptyStateStylesNames } from './EmptyState';
import { EmptyStateActions } from './EmptyStateActions/EmptyStateActions';
import { EmptyStateDescription } from './EmptyStateDescription/EmptyStateDescription';
import { EmptyStateIndicator } from './EmptyStateIndicator/EmptyStateIndicator';
import { EmptyStateTitle } from './EmptyStateTitle/EmptyStateTitle';

const defaultProps: EmptyStateProps = {
  children: (
    <>
      <EmptyState.Indicator>
        <svg data-testid="icon" />
      </EmptyState.Indicator>
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>Try adjusting your filters.</EmptyState.Description>
      <EmptyState.Actions>
        <button type="button">Reset</button>
      </EmptyState.Actions>
    </>
  ),
};

describe('@mantine/core/EmptyState', () => {
  tests.itSupportsSystemProps<EmptyStateProps, EmptyStateStylesNames>({
    component: EmptyState,
    props: defaultProps,
    varsResolver: true,
    children: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/EmptyState',
    stylesApiSelectors: ['root', 'body', 'indicator', 'title', 'description', 'actions'],
  });

  it('exposes sub-components as static properties', () => {
    expect(EmptyState.Indicator).toBe(EmptyStateIndicator);
    expect(EmptyState.Title).toBe(EmptyStateTitle);
    expect(EmptyState.Description).toBe(EmptyStateDescription);
    expect(EmptyState.Actions).toBe(EmptyStateActions);
  });

  it('renders content from shorthand props', () => {
    render(
      <EmptyState
        icon={<svg data-testid="icon" />}
        title="No results found"
        description="Try adjusting your filters."
      />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('No results found')).toBeInTheDocument();
    expect(screen.getByText('Try adjusting your filters.')).toBeInTheDocument();
  });

  it('does not render shorthand parts when corresponding prop is not set', () => {
    const { container } = render(<EmptyState title="Only title" />);
    expect(container.querySelector('.mantine-EmptyState-indicator')).toBe(null);
    expect(container.querySelector('.mantine-EmptyState-description')).toBe(null);
    expect(screen.getByText('Only title')).toBeInTheDocument();
  });

  it('renders shorthand content before children', () => {
    const { container } = render(
      <EmptyState title="Shorthand title">
        <EmptyState.Title>Compound title</EmptyState.Title>
      </EmptyState>
    );

    const titles = container.querySelectorAll('.mantine-EmptyState-title');
    expect(titles).toHaveLength(2);
    expect(titles[0]).toHaveTextContent('Shorthand title');
    expect(titles[1]).toHaveTextContent('Compound title');
  });

  it('renders title as a div by default', () => {
    const { container } = render(<EmptyState title="Title" />);
    const title = container.querySelector('.mantine-EmptyState-title');
    expect(title?.tagName).toBe('DIV');
  });

  it('renders title as a heading when order is set', () => {
    render(
      <EmptyState>
        <EmptyState.Title order={2}>Heading title</EmptyState.Title>
      </EmptyState>
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Heading title' })).toBeInTheDocument();
  });

  it('sets data-with-background on indicator when withIndicatorBackground is set', () => {
    const { container, rerender } = render(
      <EmptyState withIndicatorBackground icon={<svg data-testid="icon" />} />
    );
    expect(container.querySelector('.mantine-EmptyState-indicator')).toHaveAttribute(
      'data-with-background'
    );

    rerender(<EmptyState icon={<svg data-testid="icon" />} />);
    expect(container.querySelector('.mantine-EmptyState-indicator')).not.toHaveAttribute(
      'data-with-background'
    );
  });

  it('sets data-align attribute on root', () => {
    const { container, rerender } = render(<EmptyState title="Title" />);
    expect(container.querySelector('.mantine-EmptyState-root')).toHaveAttribute(
      'data-align',
      'center'
    );

    rerender(<EmptyState title="Title" align="left" />);
    expect(container.querySelector('.mantine-EmptyState-root')).toHaveAttribute(
      'data-align',
      'left'
    );

    rerender(<EmptyState title="Title" align="right" />);
    expect(container.querySelector('.mantine-EmptyState-root')).toHaveAttribute(
      'data-align',
      'right'
    );
  });

  it('extracts the indicator from children wrapped in a fragment', () => {
    const { container } = render(
      <EmptyState>
        <>
          <EmptyState.Indicator>
            <svg data-testid="icon" />
          </EmptyState.Indicator>
          <EmptyState.Title>Title</EmptyState.Title>
        </>
      </EmptyState>
    );

    const indicator = container.querySelector('.mantine-EmptyState-indicator');
    const body = container.querySelector('.mantine-EmptyState-body');
    expect(indicator).not.toBe(null);
    expect(body?.contains(indicator)).toBe(false);
    expect(body?.querySelector('.mantine-EmptyState-title')).not.toBe(null);
  });

  it('does not render the body element when there is no body content', () => {
    const { container, rerender } = render(<EmptyState icon={<svg data-testid="icon" />} />);
    expect(container.querySelector('.mantine-EmptyState-body')).toBe(null);

    rerender(<EmptyState icon={<svg data-testid="icon" />} title="Title" />);
    expect(container.querySelector('.mantine-EmptyState-body')).not.toBe(null);
  });

  it('sets data-variant on root and forces indicator background when variant is set', () => {
    const { container } = render(
      <EmptyState variant="filled" color="red" icon={<svg data-testid="icon" />} />
    );

    expect(container.querySelector('.mantine-EmptyState-root')).toHaveAttribute(
      'data-variant',
      'filled'
    );
    expect(container.querySelector('.mantine-EmptyState-indicator')).toHaveAttribute(
      'data-with-background'
    );
  });
});
