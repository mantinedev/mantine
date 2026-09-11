import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { NavLink, NavLinkProps, NavLinkStylesNames } from './NavLink';

const defaultProps = {
  href: '#test-link',
  leftSection: '$',
  label: 'label',
  children: 'test',
};

describe('@mantine/core/NavLink', () => {
  tests.itSupportsSystemProps<NavLinkProps, NavLinkStylesNames>({
    component: NavLink,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/NavLink',
    stylesApiSelectors: ['root', 'body', 'chevron', 'children', 'description', 'label', 'section'],
  });

  it('supports onClick handler (with children)', async () => {
    const spy = jest.fn();
    render(
      <NavLink {...defaultProps} onClick={spy}>
        <NavLink {...defaultProps} />
        <NavLink {...defaultProps} />
      </NavLink>
    );
    await userEvent.click(screen.getByRole('link'));
    expect(spy).toHaveBeenCalled();
  });

  it('sets correct data-expanded attribute on link (uncontrolled)', async () => {
    render(
      <NavLink {...defaultProps}>
        <div>test-dropdown</div>
      </NavLink>
    );

    expect(screen.getByRole('link')).not.toHaveAttribute('data-expanded');
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByRole('link')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on link (uncontrolled) when onClick is provided', async () => {
    render(
      <NavLink {...defaultProps} onClick={() => {}}>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('link')).not.toHaveAttribute('data-expanded');
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByRole('link')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on link based on defaultOpened prop (uncontrolled)', async () => {
    render(
      <NavLink {...defaultProps} defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('link')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on link based on opened prop (controlled)', async () => {
    render(
      <NavLink {...defaultProps} opened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('link')).toHaveAttribute('data-expanded');
  });

  it('renders given leftSection', () => {
    render(<NavLink {...defaultProps} leftSection="test-leftSection" />);
    expect(screen.getByText('test-leftSection')).toBeInTheDocument();
  });

  it('renders given description', () => {
    render(<NavLink {...defaultProps} description="test-description" />);
    expect(screen.getByText('test-description')).toBeInTheDocument();
  });

  it('renders given rightSection (without children)', () => {
    render(<NavLink {...defaultProps} rightSection="test-right-section" />);
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });

  it('renders given rightSection (with children)', () => {
    render(
      <NavLink {...defaultProps} rightSection="test-right-section">
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });

  it('adds data-rotate attribute to rightSection when collapse is opened', async () => {
    render(
      <NavLink {...defaultProps} rightSection="test-right-section" defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).toHaveAttribute('data-rotate');
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
  });

  it('does not add data-rotate attribute to rightSection if disableRightSectionRotation is set', async () => {
    render(
      <NavLink
        {...defaultProps}
        rightSection="test-right-section"
        defaultOpened
        disableRightSectionRotation
      >
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
  });

  it('sets size and radius css variables on the root element', () => {
    render(<NavLink {...defaultProps} size="md" radius="xl" />);
    const root = screen.getByRole('link');
    expect(root).toHaveStyle({
      '--nl-fz': 'var(--nl-fz-md)',
      '--nl-padding-y': 'var(--nl-padding-y-md)',
      '--nl-chevron-size': 'var(--nl-chevron-size-md)',
      '--nl-radius': 'var(--mantine-radius-xl)',
    });
  });

  it('derives nested links offset from size when childrenOffset is not set', () => {
    const { container, rerender } = render(
      <NavLink {...defaultProps} size="md" defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    const getChildren = () => container.querySelector('.mantine-NavLink-children');
    expect(getChildren()).toHaveStyle({ '--nl-offset': 'var(--nl-children-offset-md)' });

    rerender(
      <>
        <NavLink {...defaultProps} size="md" childrenOffset={20} defaultOpened>
          <div>test-dropdown</div>
        </NavLink>
      </>
    );
    expect(getChildren()).toHaveStyle({ '--nl-offset': 'calc(1.25rem * var(--mantine-scale))' });
  });

  it('sets data-with-guideline attribute on nested links wrapper when withGuideline is set', () => {
    const { container } = render(
      <NavLink {...defaultProps} withGuideline defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(container.querySelector('.mantine-NavLink-children')).toHaveAttribute(
      'data-with-guideline'
    );
  });

  it('does not set data-with-guideline attribute by default', () => {
    const { container } = render(
      <NavLink {...defaultProps} defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(container.querySelector('.mantine-NavLink-children')).not.toHaveAttribute(
      'data-with-guideline'
    );
  });

  it('sets data-variant attribute on nested links wrapper', () => {
    const { container } = render(
      <NavLink {...defaultProps} variant="rail" defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(container.querySelector('.mantine-NavLink-children')).toHaveAttribute(
      'data-variant',
      'rail'
    );
  });

  it('sets rail color from color prop for rail variant and does not set active colors', () => {
    render(<NavLink {...defaultProps} variant="rail" color="red" active />);
    const root = screen.getByRole('link');
    expect(root).toHaveAttribute('data-variant', 'rail');
    expect(root).toHaveStyle({ '--nl-rail-color': 'var(--mantine-color-red-filled)' });
    expect(root.style.getPropertyValue('--nl-bg')).toBe('');
    expect(root.style.getPropertyValue('--nl-color')).toBe('');
  });

  it('does not set rail color when color is not passed to rail variant', () => {
    render(<NavLink {...defaultProps} variant="rail" active />);
    expect(screen.getByRole('link').style.getPropertyValue('--nl-rail-color')).toBe('');
  });
});
