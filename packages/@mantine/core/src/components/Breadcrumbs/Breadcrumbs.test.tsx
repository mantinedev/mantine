import { render, screen, tests } from '@mantine-tests/core';
import { Breadcrumbs, BreadcrumbsProps, BreadcrumbsStylesNames } from './Breadcrumbs';

const defaultProps: BreadcrumbsProps = {
  children: [<div key="1">1</div>, <div key="2">2</div>, <div key="3">3</div>],
};

describe('@mantine/core/Breadcrumbs', () => {
  tests.itSupportsSystemProps<BreadcrumbsProps, BreadcrumbsStylesNames>({
    component: Breadcrumbs,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Breadcrumbs',
    stylesApiSelectors: ['root', 'breadcrumb', 'separator'],
  });

  it('renders correct amount of children and separators', () => {
    const { container } = render(<Breadcrumbs {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-Breadcrumbs-breadcrumb')).toHaveLength(3);
    expect(container.querySelectorAll('.mantine-Breadcrumbs-separator')).toHaveLength(2);
  });

  it('accepts separator from props', () => {
    render(<Breadcrumbs separator="test-separator" {...defaultProps} />);
    expect(screen.getAllByText('test-separator')).toHaveLength(2);
  });

  it('renders a nav element with a default aria-label', () => {
    const { container, rerender } = render(<Breadcrumbs {...defaultProps} />);
    const root = container.querySelector('.mantine-Breadcrumbs-root')!;
    expect(root.tagName).toBe('NAV');
    expect(root).toHaveAttribute('aria-label', 'Breadcrumbs');

    rerender(<Breadcrumbs {...defaultProps} aria-label="Test label" />);
    expect(container.querySelector('.mantine-Breadcrumbs-root')).toHaveAttribute(
      'aria-label',
      'Test label'
    );
  });

  it('hides separators from assistive technologies', () => {
    const { container } = render(<Breadcrumbs {...defaultProps} />);
    container.querySelectorAll('.mantine-Breadcrumbs-separator').forEach((separator) => {
      expect(separator).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('wraps non-element children with a breadcrumb element', () => {
    const { container } = render(
      <Breadcrumbs>
        first
        {2}
      </Breadcrumbs>
    );

    const breadcrumbs = container.querySelectorAll('.mantine-Breadcrumbs-breadcrumb');
    expect(breadcrumbs).toHaveLength(2);
    expect(breadcrumbs[0]).toHaveTextContent('first');
    expect(breadcrumbs[1]).toHaveTextContent('2');
  });

  it('supports React node separator', () => {
    const { container } = render(
      <Breadcrumbs {...defaultProps} separator={<span data-test-separator>-</span>} />
    );
    expect(container.querySelectorAll('[data-test-separator]')).toHaveLength(2);
  });

  it('allows to set child className', () => {
    render(
      <Breadcrumbs>
        <button type="button" className="test-class">
          test-label
        </button>
      </Breadcrumbs>
    );

    expect(screen.getByRole('button')).toHaveClass('test-class');
  });
});
