import { render, screen, tests } from '@mantine-tests/core';
import { MantineProvider } from '../../core';
import { Avatar } from '../Avatar';
import { Tooltip } from '../Tooltip';
import { Persona, PersonaProps, PersonaStylesNames } from './Persona';
import { PersonaAvatar } from './PersonaAvatar';
import { PersonaPresence } from './PersonaPresence';
import { PersonaText } from './PersonaText';

const defaultProps: PersonaProps = {
  name: 'John Doe',
  secondaryText: 'Software engineer',
  tertiaryText: 'Remote',
  quaternaryText: 'PST',
  presence: 'available',
};

describe('@mantine/core/Persona', () => {
  tests.axe([
    <Persona name="John Doe" key="1" />,
    <Persona name="John Doe" presence="available" key="2" />,
    <Persona name="John Doe" presence={{ status: 'busy', outOfOffice: true }} key="3" />,
    <Persona name="John Doe" avatar={{ src: 'test.png' }} presence="available" key="4" />,
    <Persona component="a" href="#" name="John Doe" presence="busy" key="5" />,
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

  describe('layout and reading order', () => {
    it('sets data-text-position and data-text-alignment attributes on root', () => {
      const { container, rerender } = render(<Persona name="John Doe" />);
      const root = container.querySelector('.mantine-Persona-root');
      expect(root).toHaveAttribute('data-text-position', 'after');
      expect(root).toHaveAttribute('data-text-alignment', 'start');

      rerender(
        <>
          <Persona name="John Doe" textPosition="below" textAlignment="center" />
        </>
      );
      expect(container.querySelector('.mantine-Persona-root')).toHaveAttribute(
        'data-text-position',
        'below'
      );
      expect(container.querySelector('.mantine-Persona-root')).toHaveAttribute(
        'data-text-alignment',
        'center'
      );
    });

    it('renders the text lines before the avatar in the DOM so the name is read before the status', () => {
      const { container } = render(<Persona name="John Doe" presence="available" />);
      const root = container.querySelector('.mantine-Persona-root')!;
      expect(root.firstElementChild).toHaveClass('mantine-Persona-body');
      expect(root.lastElementChild).toHaveClass('mantine-Persona-avatarWrapper');
    });
    it.each(['after', 'before', 'below'] as const)(
      'announces name, secondary text and status in order for textPosition="%s"',
      (textPosition) => {
        render(
          <Persona
            component="a"
            href="#"
            name="Jane"
            secondaryText="Open profile"
            presence="available"
            textPosition={textPosition}
          />
        );
        expect(screen.getByRole('link')).toHaveAccessibleName('Jane Open profile Available');
      }
    );

    it('places the presence badge on the circle when the radius is at least half the avatar size', () => {
      const { container } = render(
        <>
          <Persona name="John Doe" presence="available" />
          <Persona name="John Doe" presence="available" radius="xl" />
          <Persona name="John Doe" presence="available" size="xs" radius="lg" />
          <Persona name="John Doe" presence="available" avatar={{ radius: 'xl' }} />
          <Persona name="John Doe" presence="available" radius={1000} />
          <Persona name="John Doe" presence="available" radius="50%" />
          <Persona name="John Doe" presence="available" radius="999px" />
          <Persona name="John Doe" presence="available" radius="calc(1em + 2px)" />
        </>
      );
      container.querySelectorAll('.mantine-Persona-root').forEach((root) => {
        expect(root.getAttribute('style') ?? '').not.toContain('--persona-presence-offset');
      });
    });

    it('compares radius and avatar size independently of theme.scale', () => {
      const { container } = render(
        <MantineProvider theme={{ scale: 0.5 }}>
          <Persona name="John Doe" presence="available" radius="xl" />
          <Persona name="John Doe" presence="available" radius="md" />
        </MantineProvider>
      );
      const [round, corner] = Array.from(container.querySelectorAll('.mantine-Persona-root'));
      expect(round.getAttribute('style') ?? '').not.toContain('--persona-presence-offset');
      expect(corner).toHaveStyle({ '--persona-presence-offset': '0px' });
    });

    it('places the presence badge on the corner when the radius is less than half the avatar size', () => {
      const { container } = render(
        <>
          <Persona name="John Doe" presence="available" radius="md" />
          <Persona name="John Doe" presence="available" size="xl" radius="xl" />
          <Persona name="John Doe" presence="available" avatar={{ radius: 0 }} />
          <Persona name="John Doe" presence="available" avatar={{ radius: 'md' }} radius="xl" />
          <Persona name="John Doe" presence="available" radius="10px" />
        </>
      );
      container.querySelectorAll('.mantine-Persona-root').forEach((root) => {
        expect(root).toHaveStyle({ '--persona-presence-offset': '0px' });
      });
    });
  });

  describe('text lines', () => {
    it('renders the text lines from shorthand props', () => {
      render(<Persona {...defaultProps} />);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Software engineer')).toBeInTheDocument();
      expect(screen.getByText('Remote')).toBeInTheDocument();
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
        'Remote'
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

    it('does not render empty or false text lines', () => {
      const { container } = render(
        <Persona name="John Doe" secondaryText="" tertiaryText={false} quaternaryText={null} />
      );
      expect(container.querySelectorAll('.mantine-Persona-text')).toHaveLength(1);
    });

    it('treats an empty or whitespace-only name as unset', () => {
      const { container } = render(<Persona name="   " secondaryText="Guest" />);
      expect(container.querySelectorAll('.mantine-Persona-text')).toHaveLength(1);
      expect(container.querySelector('.mantine-Persona-text')).toHaveAttribute('data-level', '2');
      const withoutName = render(<Persona secondaryText="Guest" />).container;
      expect(container.querySelector('.mantine-Persona-avatar')?.getAttribute('style')).toBe(
        withoutName.querySelector('.mantine-Persona-avatar')?.getAttribute('style')
      );
    });

    it('sets title on text lines with string content', () => {
      const { container } = render(
        <Persona name="John Doe" secondaryText={<span>Node content</span>} />
      );
      const lines = container.querySelectorAll('.mantine-Persona-text');
      expect(lines[0]).toHaveAttribute('title', 'John Doe');
      expect(lines[1]).not.toHaveAttribute('title');
    });
  });

  describe('presence and status text', () => {
    it('renders the presence status as visually hidden text and hides the badge', () => {
      const { container } = render(<Persona name="John Doe" presence="do-not-disturb" />);
      expect(screen.getByText('Do not disturb')).toBeInTheDocument();
      expect(container.querySelector('.mantine-Persona-presence')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
      expect(screen.queryByRole('img')).toBe(null);
    });

    it('renders the out-of-office status text', () => {
      render(<Persona name="John Doe" presence={{ status: 'busy', outOfOffice: true }} />);
      expect(screen.getByText('Busy, out of office')).toBeInTheDocument();
    });

    it('renders exactly one status text', () => {
      render(<Persona name="Jane" presence="available" />);
      expect(screen.getAllByText('Available')).toHaveLength(1);
      render(
        <Persona>
          <Persona.Avatar name="Max" />
          <Persona.Presence presence="away" />
          <Persona.Text>Max</Persona.Text>
        </Persona>
      );
      expect(screen.getAllByText('Away')).toHaveLength(1);
    });

    it('renders the status text for a presence set by theme default props', () => {
      render(
        <MantineProvider
          theme={{ components: { PersonaPresence: { defaultProps: { presence: 'available' } } } }}
        >
          <Persona>
            <Persona.Avatar name="Jane Doe" />
            <Persona.Presence />
            <Persona.Text>Jane Doe</Persona.Text>
          </Persona>
        </MantineProvider>
      );
      expect(screen.getByText('Available')).toBeInTheDocument();
    });

    it('sets data-status and data-variant on the badge', () => {
      const { container } = render(<Persona name="John Doe" presence="offline" />);
      const badge = container.querySelector('.mantine-Persona-presence');
      expect(badge).toHaveAttribute('data-status', 'offline');
      expect(badge).toHaveAttribute('data-variant', 'outline');
    });

    it('lets vars override the presence color', () => {
      const { container } = render(
        <Persona
          name="Jane"
          presence="busy"
          vars={() => ({ root: {}, presence: { '--persona-presence-color': 'blue' } })}
        />
      );
      const badge = container.querySelector('.mantine-Persona-presence')!;
      expect(badge).toHaveAttribute('data-status', 'busy');
      expect(badge).toHaveStyle({ '--persona-presence-color': 'blue' });
    });

    it('sets data-processing on the presence badge', () => {
      const { container } = render(
        <Persona name="John Doe" presence={{ status: 'available', processing: true }} />
      );
      expect(container.querySelector('.mantine-Persona-presence')).toHaveAttribute(
        'data-processing'
      );
    });

    it('does not render the presence badge when presence is not set', () => {
      const { container } = render(<Persona name="John Doe" />);
      expect(container.querySelector('.mantine-Persona-presence')).toBe(null);
    });

    it('does not render the presence badge when presence is "none"', () => {
      const { container } = render(<Persona name="John Doe" presence="none" />);
      expect(container.querySelector('.mantine-Persona-presence')).toBe(null);
      expect(container.querySelector('.mantine-VisuallyHidden-root')).toBe(null);
    });

    it('renders only the presence badge inline when presenceOnly is set', () => {
      const { container } = render(<Persona name="John Doe" presence="available" presenceOnly />);
      expect(container.querySelector('.mantine-Persona-avatarWrapper')).toBe(null);
      expect(container.querySelector('.mantine-Persona-presence')).not.toBe(null);
      expect(container.querySelector('.mantine-Persona-root')).toHaveAttribute(
        'data-presence-only'
      );
    });

    it('announces the status after the text lines in presenceOnly mode', () => {
      render(
        <Persona
          component="a"
          href="#"
          name="API"
          secondaryText="Operational"
          presence="available"
          presenceOnly
        />
      );
      expect(screen.getByRole('link')).toHaveAccessibleName('API Operational Available');
    });

    it('announces the status in presenceOnly mode without text lines', () => {
      render(<Persona component="a" href="#" presence="busy" presenceOnly />);
      expect(screen.getByRole('link')).toHaveAccessibleName('Busy');
    });
  });

  describe('labels', () => {
    it('supports custom presence labels on Persona', () => {
      render(
        <Persona
          name="John Doe"
          presence={{ status: 'away', outOfOffice: true }}
          labels={{ away: 'Abwesend', outOfOffice: 'nicht im Büro' }}
        />
      );
      expect(screen.getByText('Abwesend, nicht im Büro')).toBeInTheDocument();
    });

    it('supports custom presence labels on Persona.Presence, own labels win over Persona labels', () => {
      const { container } = render(
        <Persona labels={{ available: 'Root label', away: 'Abwesend' }}>
          <Persona.Avatar name="Jane Doe" />
          <Persona.Presence presence="available" labels={{ available: 'Verfügbar' }} />
          <Persona.Text>Jane Doe</Persona.Text>
        </Persona>
      );
      expect(screen.getByText('Verfügbar')).toBeInTheDocument();
      expect(screen.queryByText('Root label')).toBe(null);
      expect(container.querySelector('.mantine-Persona-presence')).toHaveAttribute(
        'data-variant',
        'filled'
      );
    });

    it('uses Persona labels for compound Persona.Presence without own labels', () => {
      render(
        <Persona labels={{ away: 'Abwesend' }}>
          <Persona.Avatar name="Jane Doe" />
          <Persona.Presence presence="away" />
          <Persona.Text>Jane Doe</Persona.Text>
        </Persona>
      );
      expect(screen.getByText('Abwesend')).toBeInTheDocument();
    });

    it('uses Persona labels over PersonaPresence theme default labels', () => {
      render(
        <MantineProvider
          theme={{
            components: {
              PersonaPresence: { defaultProps: { labels: { available: 'ThemePresence' } } },
            },
          }}
        >
          <Persona name="Jane Doe" presence="available" labels={{ available: 'Instance' }} />
        </MantineProvider>
      );
      expect(screen.getByText('Instance')).toBeInTheDocument();
      expect(screen.queryByText('ThemePresence')).toBe(null);
    });

    it('announces only the out-of-office suffix for an empty status label', () => {
      render(
        <Persona
          name="Jane"
          presence={{ status: 'available', outOfOffice: true }}
          labels={{ available: '' }}
        />
      );
      expect(screen.getByText('out of office')).toBeInTheDocument();
    });

    it('does not add a separator for an empty outOfOffice label', () => {
      render(
        <Persona
          name="Jane"
          presence={{ status: 'available', outOfOffice: true }}
          labels={{ outOfOffice: '' }}
        />
      );
      expect(screen.getByText('Available')).toBeInTheDocument();
    });

    it('does not render the status text for an empty-string label', () => {
      const { container } = render(
        <Persona
          name="Jane"
          tertiaryText="Available"
          presence="available"
          labels={{ available: '' }}
        />
      );
      expect(screen.getAllByText('Available')).toHaveLength(1);
      expect(container.querySelector('.mantine-VisuallyHidden-root')).toBe(null);
      render(<Persona name="John" presence="busy" labels={{ available: '' }} />);
      expect(screen.getByText('Busy')).toBeInTheDocument();
    });
  });

  describe('avatar', () => {
    it('renders initials from name', () => {
      const { container } = render(<Persona name="John Doe" />);
      expect(container.querySelector('.mantine-Avatar-placeholder')).toHaveTextContent('JD');
    });

    it('sets empty alt on image avatars by default', () => {
      const { container } = render(<Persona name="John Doe" avatar={{ src: 'x.png' }} />);
      expect(container.querySelector('img')).toHaveAttribute('alt', '');
      expect(container.querySelector('.mantine-Persona-avatar')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
    });

    it('keeps a custom alt on image avatars', () => {
      const { container } = render(
        <Persona>
          <Persona.Avatar src="x.png" alt="John Doe" />
        </Persona>
      );
      expect(container.querySelector('img')).toHaveAttribute('alt', 'John Doe');
      expect(container.querySelector('.mantine-Persona-avatar')).not.toHaveAttribute('aria-hidden');
    });

    it.each([
      ['empty string', ''],
      ['false', false],
      ['null', null],
    ])('renders the default avatar for a %s avatar value', (_, value) => {
      const { container } = render(<Persona name="John Doe" avatar={value} presence="available" />);
      const wrapper = container.querySelector('.mantine-Persona-avatarWrapper');
      expect(wrapper?.querySelector('.mantine-Persona-avatar')).toHaveTextContent('JD');
      expect(wrapper?.querySelector('.mantine-Persona-presence')).not.toBe(null);
    });

    it('renders a custom avatar node', () => {
      render(<Persona name="John Doe" avatar={<div data-testid="custom-avatar" />} />);
      expect(screen.getByTestId('custom-avatar')).toBeInTheDocument();
    });

    it('renders a non-element avatar node without spreading it as props', () => {
      render(<Persona name="John Doe" avatar="JD" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('keeps an aria-hidden custom avatar node out of the accessible name', () => {
      render(
        <Persona component="a" href="#" name="Jane Doe" avatar={<Avatar aria-hidden>JD</Avatar>} />
      );
      expect(screen.getByRole('link')).toHaveAccessibleName('Jane Doe');
    });

    it('exposes a custom avatar node with alt as given', () => {
      render(
        <Persona
          component="a"
          href="#"
          name="Jane Doe"
          avatar={<img src="x.png" alt="Team lead" />}
        />
      );
      expect(screen.getByRole('link')).toHaveAccessibleName('Jane Doe Team lead');
    });

    it('renders an avatar from avatar props object', () => {
      const { container } = render(
        <Persona name="John Doe" avatar={{ src: 'test.png', alt: 'John Doe' }} />
      );
      expect(container.querySelector('img')).toHaveAttribute('src', 'test.png');
    });

    it('applies Persona classNames.avatar to the avatar root', () => {
      const { container } = render(<Persona name="John Doe" classNames={{ avatar: 'x' }} />);
      expect(container.querySelector('.mantine-Avatar-root')).toHaveClass('x');
    });

    it('passes Persona.Avatar classNames to the inner Avatar selectors', () => {
      const { container } = render(
        <Persona name="John Doe">
          <Persona.Avatar classNames={{ placeholder: 'y' }} />
        </Persona>
      );
      expect(container.querySelector('.mantine-Avatar-placeholder')).toHaveClass('y');
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

  describe('compound components', () => {
    it('exposes compound components as static properties', () => {
      expect(Persona.Avatar).toBe(PersonaAvatar);
      expect(Persona.Presence).toBe(PersonaPresence);
      expect(Persona.Text).toBe(PersonaText);
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

    it('announces the compound status after the text lines', () => {
      render(
        <Persona component="a" href="#">
          <Persona.Avatar name="Jane Doe" />
          <Persona.Presence presence="busy" labels={{ busy: 'Occupé' }} />
          <Persona.Text>Jane Doe</Persona.Text>
        </Persona>
      );
      expect(screen.getByRole('link')).toHaveAccessibleName('Jane Doe Occupé');
    });

    it('renders the presence status text when there are no text lines', () => {
      const { container } = render(
        <Persona>
          <Persona.Avatar name="Jane Doe" />
          <Persona.Presence presence="away" />
        </Persona>
      );
      expect(container.querySelector('.mantine-Persona-body')).toBe(null);
      expect(screen.getByText('Away')).toBeInTheDocument();
    });

    it('places a Persona.Presence wrapped in a Tooltip on the avatar and keeps its status text', () => {
      const { container } = render(
        <Persona component="a" href="#">
          <Persona.Avatar name="Jane Doe" />
          <Tooltip label="Busy">
            <Persona.Presence presence="busy" />
          </Tooltip>
          <Persona.Text>Jane Doe</Persona.Text>
        </Persona>
      );
      expect(screen.getByRole('link')).toHaveAccessibleName('Jane Doe Busy');
      expect(
        container.querySelector('.mantine-Persona-avatarWrapper .mantine-Persona-presence')
      ).not.toBe(null);
    });

    it('keeps a Persona.Presence wrapped in Persona.Text in the text block', () => {
      const { container } = render(
        <Persona>
          <Persona.Avatar name="Jane Doe" />
          <Persona.Presence presence="available" />
          <Persona.Text level={1}>Jane Doe</Persona.Text>
          <Persona.Text level={2}>
            <Persona.Presence presence="busy" />
          </Persona.Text>
        </Persona>
      );
      const wrapperBadges = container.querySelectorAll(
        '.mantine-Persona-avatarWrapper .mantine-Persona-presence'
      );
      expect(wrapperBadges).toHaveLength(1);
      expect(wrapperBadges[0]).toHaveAttribute('data-status', 'available');
      expect(screen.getByText('Available')).toBeInTheDocument();

      const line = container.querySelector(
        '.mantine-Persona-body .mantine-Persona-text[data-level="2"]'
      );
      const inlineBadge = line?.querySelector('.mantine-Persona-presence');
      expect(inlineBadge).toHaveAttribute('data-status', 'busy');
      expect(inlineBadge).toHaveAttribute('aria-hidden', 'true');
      expect(line).toHaveTextContent('Busy');
    });

    it('keeps a Persona.Presence wrapped in a host element in the text block', () => {
      const { container } = render(
        <Persona>
          <Persona.Avatar name="Jane Doe" />
          <div data-testid="host">
            <Persona.Presence presence="busy" />
          </div>
          <Persona.Text>Jane Doe</Persona.Text>
        </Persona>
      );
      expect(
        container.querySelector('.mantine-Persona-avatarWrapper .mantine-Persona-presence')
      ).toBe(null);
      expect(
        container.querySelector(
          '.mantine-Persona-body [data-testid="host"] .mantine-Persona-presence'
        )
      ).not.toBe(null);
    });

    it('keeps the status text of a Persona.Presence rendered by a user component', () => {
      function Status() {
        return <Persona.Presence presence="busy" />;
      }

      render(
        <Persona component="a" href="#">
          <Persona.Avatar name="Jane Doe" />
          <Persona.Text>Jane Doe</Persona.Text>
          <Status />
        </Persona>
      );
      expect(screen.getByRole('link')).toHaveAccessibleName('Jane Doe Busy');
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
  });

  describe('polymorphic', () => {
    it('renders as a link', () => {
      render(<Persona component="a" href="https://mantine.dev" name="John Doe" />);
      expect(screen.getByRole('link')).toHaveAttribute('href', 'https://mantine.dev');
    });

    it('sets type="button" when rendered as a button', () => {
      render(<Persona component="button" name="John Doe" />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });
});
