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

  it('sets aria-expanded on link with children (uncontrolled)', async () => {
    render(
      <NavLink {...defaultProps}>
        <div>test-dropdown</div>
      </NavLink>
    );

    expect(screen.getByRole('link')).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByRole('link')).toHaveAttribute('aria-expanded', 'true');
  });

  it('sets aria-expanded on link with children based on opened prop (controlled)', () => {
    render(
      <NavLink {...defaultProps} opened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('link')).toHaveAttribute('aria-expanded', 'true');
  });

  it('connects link with children to its collapse with aria-controls', () => {
    render(
      <NavLink {...defaultProps} opened>
        <div>test-dropdown</div>
      </NavLink>
    );
    const controls = screen.getByRole('link').getAttribute('aria-controls');
    expect(controls).toBeTruthy();
    expect(document.getElementById(controls!)).toContainElement(screen.getByText('test-dropdown'));
  });

  it('does not set aria-expanded on link without children', () => {
    render(<NavLink href="#test-link" label="label" />);
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-expanded');
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-controls');
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
});
