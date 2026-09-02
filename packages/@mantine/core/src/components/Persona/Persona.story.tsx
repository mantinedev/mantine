import { PersonaPresenceStatus } from './get-presence-props';
import { Persona } from './Persona';

export default { title: 'Persona' };

const IMAGE =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png';

const STATUSES: PersonaPresenceStatus[] = [
  'available',
  'away',
  'busy',
  'do-not-disturb',
  'offline',
  'out-of-office',
  'blocked',
  'unknown',
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="Creator of Mantine"
        tertiaryText="Available"
        avatar={{ src: IMAGE }}
        presence="available"
      />
    </div>
  );
}

export function Initials() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        name="Jane Doe"
        secondaryText="Product designer"
        presence={{ status: 'busy', outOfOffice: true }}
      />
    </div>
  );
}

export function Statuses() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {STATUSES.map((status) => (
        <Persona key={status} name="Jane Doe" secondaryText={status} presence={status} />
      ))}
    </div>
  );
}

export function Processing() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        name="Jane Doe"
        secondaryText="Joining the call"
        presence={{ status: 'available', processing: true }}
      />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Persona
          key={size}
          size={size}
          name="Vitaly Rtishchev"
          secondaryText="Creator of Mantine"
          avatar={{ src: IMAGE }}
          presence="available"
        />
      ))}
    </div>
  );
}

export function TextPosition() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
      {(['after', 'before', 'below'] as const).map((textPosition) => (
        <Persona
          key={textPosition}
          textPosition={textPosition}
          textAlignment={textPosition === 'below' ? 'center' : 'start'}
          name="Jane Doe"
          secondaryText={textPosition}
          avatar={{ src: IMAGE }}
          presence="available"
        />
      ))}
    </div>
  );
}

export function PresenceOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        name="Server status"
        secondaryText="All systems operational"
        presence="available"
        presenceOnly
      />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="Creator of Mantine"
        avatar={{ src: IMAGE }}
        presence="available"
        radius="md"
      />
    </div>
  );
}

export function Compound() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona>
        <Persona.Avatar src={IMAGE} />
        <Persona.Presence presence="available" />
        <Persona.Text level={1}>Vitaly Rtishchev</Persona.Text>
        <Persona.Text level={2}>Creator of Mantine</Persona.Text>
      </Persona>
    </div>
  );
}

export function Polymorphic() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        component="a"
        href="https://mantine.dev"
        target="_blank"
        name="Vitaly Rtishchev"
        secondaryText="Open profile"
        avatar={{ src: IMAGE }}
        presence="available"
      />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        unstyled
        name="Vitaly Rtishchev"
        secondaryText="Creator of Mantine"
        avatar={{ src: IMAGE }}
        presence="available"
      />
    </div>
  );
}
