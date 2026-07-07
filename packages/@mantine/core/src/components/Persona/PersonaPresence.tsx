import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { usePersonaContext } from './Persona.context';
import {
  getPresenceProps,
  isPresenceVisible,
  PersonaPresenceGlyph,
  PersonaPresenceValue,
} from './get-presence-props';

export type PersonaPresenceStylesNames = 'presence';

export interface PersonaPresenceProps
  extends BoxProps, CompoundStylesApiProps<PersonaPresenceFactory>, ElementProps<'span'> {
  /** Presence status string or configuration object */
  presence?: PersonaPresenceValue;
}

export type PersonaPresenceFactory = Factory<{
  props: PersonaPresenceProps;
  ref: HTMLSpanElement;
  stylesNames: PersonaPresenceStylesNames;
  compound: true;
}>;

function PresenceGlyph({ glyph }: { glyph: PersonaPresenceGlyph }) {
  if (glyph === 'do-not-disturb') {
    return (
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="3.5" y="7" width="9" height="2" rx="1" fill="currentColor" />
      </svg>
    );
  }

  if (glyph === 'blocked') {
    return (
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4.5 11.5 11.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (glyph === 'out-of-office') {
    return (
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M6 4.5 10 8 6 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}

export const PersonaPresence = factory<PersonaPresenceFactory>((_props) => {
  const props = useProps('PersonaPresence', null, _props);
  const { className, style, classNames, styles, vars, presence, mod, ...others } = props;
  const ctx = usePersonaContext();
  const resolved = getPresenceProps(presence);

  if (!isPresenceVisible(presence)) {
    return null;
  }

  return (
    <Box
      component="span"
      role="img"
      aria-label={resolved.label}
      __vars={{ '--persona-presence-color': resolved.color }}
      mod={[{ variant: resolved.variant, processing: resolved.processing }, mod]}
      {...ctx.getStyles('presence', { className, style, classNames, styles })}
      {...others}
    >
      <PresenceGlyph glyph={resolved.glyph} />
    </Box>
  );
});

PersonaPresence.displayName = '@mantine/core/PersonaPresence';
