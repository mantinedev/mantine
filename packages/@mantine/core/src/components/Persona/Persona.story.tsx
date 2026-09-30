import { Avatar } from '../Avatar';
import { Tooltip } from '../Tooltip';
import { Persona } from './Persona';

export default { title: 'Persona' };

const IMAGE =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png';

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

export function Polymorphic() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        component="a"
        href="https://mantine.dev"
        target="_blank"
        rel="noopener noreferrer"
        name="Vitaly Rtishchev"
        secondaryText="Open profile"
        avatar={{ src: IMAGE }}
        presence="available"
      />
    </div>
  );
}

export function PolymorphicButton() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona
        component="button"
        name="Vitaly Rtishchev"
        secondaryText="Open profile"
        avatar={{ src: IMAGE }}
        presence="available"
      />
    </div>
  );
}

export function Labels() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Persona
        name="Jane Doe"
        secondaryText="Produktdesignerin"
        presence="available"
        labels={{ available: 'Verfügbar', busy: 'Beschäftigt', outOfOffice: 'nicht im Büro' }}
      />
      <Persona
        name="John Doe"
        secondaryText="Ortszeit 16:32"
        presence={{ status: 'busy', outOfOffice: true }}
        labels={{ available: 'Verfügbar', busy: 'Beschäftigt', outOfOffice: 'nicht im Büro' }}
      />
      <Persona labels={{ away: 'Abwesend' }}>
        <Persona.Avatar name="Max Mustermann" />
        <Persona.Presence presence="away" labels={{ away: '' }} />
        <Persona.Text level={1}>Max Mustermann</Persona.Text>
        <Persona.Text level={2}>Abwesend</Persona.Text>
      </Persona>
    </div>
  );
}

export function BelowTruncation() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ width: 120, outline: '1px dashed gray' }}>
        <Persona
          textPosition="below"
          name="Vitaly Rtishchev the creator of Mantine"
          secondaryText="Creator of Mantine and many other open source libraries"
          avatar={{ src: IMAGE }}
          presence="available"
        />
      </div>
    </div>
  );
}

export function CustomAvatar() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Persona
        name="Jane Doe"
        secondaryText="Custom avatar node"
        avatar={
          <Avatar color="grape" variant="filled" aria-hidden>
            JD
          </Avatar>
        }
        presence="busy"
      />
      <Persona
        name="Jane Doe"
        secondaryText="Avatar color override"
        avatar={{ color: 'blue' }}
        presence="available"
      />
    </div>
  );
}

export function TooltipPresence() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <Persona component="a" href="#">
        <Persona.Avatar src={IMAGE} name="Vitaly Rtishchev" />
        <Tooltip label="Busy">
          <Persona.Presence presence="busy" />
        </Tooltip>
        <Persona.Text level={1}>Vitaly Rtishchev</Persona.Text>
        <Persona.Text level={2}>Hover the badge</Persona.Text>
      </Persona>
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
