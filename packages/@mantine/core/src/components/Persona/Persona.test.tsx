import { render, screen, tests } from '@mantine-tests/core';
import { Persona, PersonaProps, PersonaStylesNames } from './Persona';
import { PersonaAvatar } from './PersonaAvatar';
import { PersonaPresence } from './PersonaPresence';
import { PersonaText } from './PersonaText';

const defaultProps: PersonaProps = {
  name: 'John Doe',
  secondaryText: 'Software engineer',
  tertiaryText: 'Available',
  quaternaryText: 'PST',
  presence: 'available',
};

describe('@mantine/core/Persona', () => {
  tests.axe([
    <Persona name="John Doe" key="1" />,
    <Persona name="John Doe" presence="available" key="2" />,
    <Persona name="John Doe" presence={{ status: 'busy', outOfOffice: true }} key="3" />,
  ]);

  tests.itSupportsSystemProps<PersonaProps, PersonaStylesNames>({
    component: Persona,
    props: defaultProps,
    polymorphic: true,
    children: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Persona',
    stylesApiSelectors: ['root', 'avatarWrapper', 'avatar', 'presence', 'body', 'text'],
  });

  it('exposes compound components as static properties', () => {
    expect(Persona.Avatar).toBe(PersonaAvatar);
    expect(Persona.Presence).toBe(PersonaPresence);
    expect(Persona.Text).toBe(PersonaText);
  });

  it('renders the text lines from shorthand props', () => {
    render(<Persona {...defaultProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software engineer')).toBeInTheDocument();
    expect(screen.getByText('Available')).toBeInTheDocument();
    expect(screen.getByText('PST')).toBeInTheDocument();
  });

  it('assigns levels to shorthand text lines', () => {
    const { container } = render(<Persona {...defaultProps} />);
    expect(container.querySelector('.mantine-Persona-text[data-level="1"]')).toHaveTextContent(
      'John Doe'
    );
    expect(container.querySelector('.mantine-Persona-text[data-level="2"]')).toHaveTextContent(
      'Software engineer'
    );
    expect(container.querySelector('.mantine-Persona-text[data-level="3"]')).toHaveTextContent(
      'Available'
    );
    expect(container.querySelector('.mantine-Persona-text[data-level="4"]')).toHaveTextContent(
      'PST'
    );
  });

  it('does not render text lines that are not provided', () => {
    const { container } = render(<Persona name="John Doe" />);
    expect(container.querySelectorAll('.mantine-Persona-text')).toHaveLength(1);
    expect(container.querySelector('.mantine-Persona-text')).toHaveAttribute('data-level', '1');
  });

  it('renders the presence badge with an accessible label', () => {
    render(<Persona name="John Doe" presence="do-not-disturb" />);
    expect(screen.getByRole('img', { name: 'Do not disturb' })).toBeInTheDocument();
  });

  it('does not render the presence badge when presence is not set', () => {
    const { container } = render(<Persona name="John Doe" />);
    expect(container.querySelector('.mantine-Persona-presence')).toBe(null);
  });

  it('does not render the presence badge when presence is "none"', () => {
    const { container } = render(<Persona name="John Doe" presence="none" />);
    expect(container.querySelector('.mantine-Persona-presence')).toBe(null);
  });

  it('does not render a compound presence badge when its status is "none"', () => {
    const { container } = render(
      <Persona>
        <Persona.Avatar src="test.png" />
        <Persona.Presence presence="none" />
        <Persona.Text>Jane Doe</Persona.Text>
      </Persona>
    );
    expect(container.querySelector('.mantine-Persona-presence')).toBe(null);
  });

  it('does not render an empty avatar wrapper for a hidden presence without an avatar', () => {
    const { container } = render(
      <Persona>
        <Persona.Presence presence="none" />
        <Persona.Text>Jane Doe</Persona.Text>
      </Persona>
    );
    expect(container.querySelector('.mantine-Persona-avatarWrapper')).toBe(null);
    expect(container.querySelector('.mantine-Persona-presence')).toBe(null);
  });

  it('renders only the presence badge inline when presenceOnly is set', () => {
    const { container } = render(<Persona name="John Doe" presence="available" presenceOnly />);
    expect(container.querySelector('.mantine-Persona-avatarWrapper')).toBe(null);
    expect(container.querySelector('.mantine-Persona-presence')).not.toBe(null);
    expect(container.querySelector('.mantine-Persona-root')).toHaveAttribute('data-presence-only');
  });

  it('renders a custom avatar node', () => {
    render(<Persona name="John Doe" avatar={<div data-testid="custom-avatar" />} />);
    expect(screen.getByTestId('custom-avatar')).toBeInTheDocument();
  });

  it('renders an avatar from avatar props object', () => {
    const { container } = render(
      <Persona name="John Doe" avatar={{ src: 'test.png', alt: 'John Doe' }} />
    );
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', 'test.png');
  });

  it('sets data-text-position and data-text-alignment attributes on root', () => {
    const { container, rerender } = render(<Persona name="John Doe" />);
    const root = container.querySelector('.mantine-Persona-root');
    expect(root).toHaveAttribute('data-text-position', 'after');
    expect(root).toHaveAttribute('data-text-alignment', 'start');

    rerender(<Persona name="John Doe" textPosition="below" textAlignment="center" />);
    expect(container.querySelector('.mantine-Persona-root')).toHaveAttribute(
      'data-text-position',
      'below'
    );
    expect(container.querySelector('.mantine-Persona-root')).toHaveAttribute(
      'data-text-alignment',
      'center'
    );
  });

  it('sets data-variant=outline on the presence badge for ring statuses', () => {
    const { container } = render(<Persona name="John Doe" presence="offline" />);
    expect(container.querySelector('.mantine-Persona-presence')).toHaveAttribute(
      'data-variant',
      'outline'
    );
  });

  it('renders custom children instead of the shorthand composition', () => {
    const { container } = render(
      <Persona name="Ignored name">
        <Persona.Text>Custom content</Persona.Text>
      </Persona>
    );

    expect(screen.getByText('Custom content')).toBeInTheDocument();
    expect(screen.queryByText('Ignored name')).toBe(null);
    expect(container.querySelector('.mantine-Persona-avatarWrapper')).toBe(null);
  });

  it('distributes compound Avatar and Presence into the avatar wrapper', () => {
    const { container } = render(
      <Persona>
        <Persona.Avatar src="test.png" />
        <Persona.Presence presence="available" />
        <Persona.Text level={1}>Jane Doe</Persona.Text>
      </Persona>
    );

    const wrapper = container.querySelector('.mantine-Persona-avatarWrapper');
    const body = container.querySelector('.mantine-Persona-body');
    expect(wrapper?.querySelector('.mantine-Persona-avatar')).not.toBe(null);
    expect(wrapper?.querySelector('.mantine-Persona-presence')).not.toBe(null);
    expect(body?.querySelector('.mantine-Persona-text')).not.toBe(null);
    expect(body?.querySelector('.mantine-Persona-presence')).toBe(null);
  });

  it('ignores shorthand avatar and presence props when custom children are used', () => {
    const { container } = render(
      <Persona avatar={{ src: 'test.png' }} presence="available">
        <Persona.Text>Custom</Persona.Text>
      </Persona>
    );

    expect(container.querySelector('.mantine-Persona-avatarWrapper')).toBe(null);
    expect(container.querySelector('.mantine-Persona-presence')).toBe(null);
    expect(container.querySelector('img')).toBe(null);
  });

  it('renders a non-element avatar node without spreading it as props', () => {
    render(<Persona name="John Doe" avatar="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('does not pass the initials color to the avatar when there is no name', () => {
    const { container } = render(
      <Persona>
        <Persona.Avatar>JD</Persona.Avatar>
        <Persona.Text>Only avatar content</Persona.Text>
      </Persona>
    );

    const avatar = container.querySelector('.mantine-Persona-avatar');
    expect(avatar?.getAttribute('style') ?? '').not.toContain('initials');
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
