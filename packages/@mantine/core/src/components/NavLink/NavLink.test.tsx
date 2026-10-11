import { fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { NavLink, NavLinkProps, NavLinkStylesNames } from './NavLink';

const defaultProps = {
  href: '#test-link',
  leftSection: '$',
  label: 'label',
};

const parentProps = {
  leftSection: '$',
  label: 'label',
};

describe('@mantine/core/NavLink', () => {
  tests.itSupportsSystemProps<NavLinkProps, NavLinkStylesNames>({
    component: NavLink,
    props: { ...defaultProps, children: 'test' },
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/NavLink',
    stylesApiSelectors: ['root', 'body', 'chevron', 'children', 'description', 'label', 'section'],
  });

  it('supports onClick handler (with children)', async () => {
    const spy = jest.fn();
    render(
      <NavLink {...parentProps} onClick={spy}>
        <NavLink {...defaultProps} />
        <NavLink {...defaultProps} />
      </NavLink>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalled();
  });

  it('sets correct data-expanded attribute on the expandable parent (uncontrolled)', async () => {
    render(
      <NavLink {...parentProps}>
        <div>test-dropdown</div>
      </NavLink>
    );

    expect(screen.getByRole('button')).not.toHaveAttribute('data-expanded');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on the expandable parent (uncontrolled) when onClick is provided', async () => {
    render(
      <NavLink {...parentProps} onClick={() => {}}>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('button')).not.toHaveAttribute('data-expanded');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on the expandable parent based on defaultOpened prop (uncontrolled)', async () => {
    render(
      <NavLink {...parentProps} defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('button')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on the expandable parent based on opened prop (controlled)', async () => {
    render(
      <NavLink {...parentProps} opened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('button')).toHaveAttribute('data-expanded');
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
      <NavLink {...parentProps} rightSection="test-right-section">
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });

  it('adds data-rotate attribute to rightSection when collapse is opened', async () => {
    render(
      <NavLink {...parentProps} rightSection="test-right-section" defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).toHaveAttribute('data-rotate');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
  });

  it('does not add data-rotate attribute to rightSection if disableRightSectionRotation is set', async () => {
    render(
      <NavLink
        {...parentProps}
        rightSection="test-right-section"
        defaultOpened
        disableRightSectionRotation
      >
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
    await userEvent.click(screen.getByRole('button'));
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
      <NavLink {...parentProps} size="md" defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    const getChildren = () => container.querySelector('.mantine-NavLink-children');
    expect(getChildren()).toHaveStyle({ '--nl-offset': 'var(--nl-children-offset-md)' });

    rerender(
      <NavLink {...parentProps} size="md" childrenOffset={20} defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(getChildren()).toHaveStyle({ '--nl-offset': 'calc(1.25rem * var(--mantine-scale))' });
  });

  it('sets data-with-guideline attribute on nested links wrapper when withGuideline is set', () => {
    const { container } = render(
      <NavLink {...parentProps} withGuideline defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(container.querySelector('.mantine-NavLink-children')).toHaveAttribute(
      'data-with-guideline'
    );
  });

  it('does not set data-with-guideline attribute by default', () => {
    const { container } = render(
      <NavLink {...parentProps} defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(container.querySelector('.mantine-NavLink-children')).not.toHaveAttribute(
      'data-with-guideline'
    );
  });

  it('sets data-variant attribute on nested links wrapper', () => {
    const { container } = render(
      <NavLink {...parentProps} variant="rail" defaultOpened>
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

  it('renders expandable parent as a button disclosure with aria-expanded and aria-controls', async () => {
    const { container } = render(
      <NavLink label="parent">
        <div>test-dropdown</div>
      </NavLink>
    );
    const control = screen.getByRole('button', { name: 'parent' });
    expect(control.tagName).toBe('BUTTON');
    expect(control).toHaveAttribute('type', 'button');
    expect(control).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(control);
    expect(control).toHaveAttribute('aria-expanded', 'true');
    const collapse = container.querySelector(`#${control.getAttribute('aria-controls')}`);
    expect(collapse).toContainElement(screen.getByText('test-dropdown'));
  });

  it('does not set aria-expanded on links without children', () => {
    render(<NavLink {...defaultProps} />);
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-expanded');
  });

  it('prevents default click behavior and calls onChange when toggled', async () => {
    const onChange = jest.fn();
    const onClick = jest.fn((event: React.MouseEvent) => event.defaultPrevented);
    render(
      <NavLink label="parent" component="a" href="#test" onClick={onClick} onChange={onChange}>
        <div>test-dropdown</div>
      </NavLink>
    );

    const control = screen.getByRole('link', { name: 'parent' });
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    control.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(onChange).toHaveBeenLastCalledWith(true);

    await userEvent.click(control);
    expect(onChange).toHaveBeenLastCalledWith(false);
  });

  it('respects controlled opened prop', async () => {
    const onChange = jest.fn();
    render(
      <NavLink label="parent" opened={false} onChange={onChange}>
        <div>test-dropdown</div>
      </NavLink>
    );

    const control = screen.getByRole('button', { name: 'parent' });
    await userEvent.click(control);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(control).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles with Space and Enter keys', async () => {
    render(
      <NavLink label="parent">
        <div>test-dropdown</div>
      </NavLink>
    );
    const control = screen.getByRole('button', { name: 'parent' });
    await userEvent.tab();
    expect(control).toHaveFocus();

    await userEvent.keyboard('[Space]');
    expect(control).toHaveAttribute('aria-expanded', 'true');

    await userEvent.keyboard('[Enter]');
    expect(control).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles with Space key when rendered as a link', async () => {
    render(
      <NavLink label="parent" component="a" href="#test">
        <div>test-dropdown</div>
      </NavLink>
    );
    const control = screen.getByRole('link', { name: 'parent' });
    await userEvent.tab();
    await userEvent.keyboard('[Space]');
    expect(control).toHaveAttribute('aria-expanded', 'true');
  });

  it('sets aria-disabled and ignores clicks when disabled', async () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    render(
      <NavLink label="parent" disabled onClick={onClick} onChange={onChange}>
        <div>test-dropdown</div>
      </NavLink>
    );
    const control = screen.getByRole('button', { name: 'parent' });
    expect(control).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(control);
    expect(onClick).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders parent with href as a link', () => {
    render(
      <NavLink label="Parent" href="/parent">
        <NavLink label="Child" />
      </NavLink>
    );
    const parent = screen.getByText('Parent').closest('a');
    expect(parent).toHaveAttribute('href', '/parent');
    expect(parent).toHaveAttribute('aria-expanded', 'false');
  });
});
