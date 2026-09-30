import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { VisuallyHidden } from '../VisuallyHidden';
import { usePersonaContext } from './Persona.context';
import {
  getPresenceLabel,
  isPresenceVisible,
  PersonaPresenceGlyph,
  PersonaPresenceLabels,
  PersonaPresenceValue,
  resolvePresenceAppearance,
} from './resolve-presence';

export type PersonaPresenceStylesNames = 'presence';

export interface PersonaPresenceProps
  extends BoxProps, CompoundStylesApiProps<PersonaPresenceFactory>, ElementProps<'span'> {
  /** Presence status string or configuration object */
  presence?: PersonaPresenceValue;

  /** Status labels announced by screen readers. Keys set here take precedence over the `labels` of the parent `Persona`, which take precedence over theme default `labels`. An empty string label renders no status text */
  labels?: PersonaPresenceLabels;
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
  const themeLabels = useProps('PersonaPresence', null, {} as PersonaPresenceProps).labels;
  const { className, style, classNames, styles, vars, presence, labels, mod, ...others } = props;
  const ctx = usePersonaContext();

  if (!isPresenceVisible(presence)) {
    return null;
  }

  const appearance = resolvePresenceAppearance(presence);
  const label = getPresenceLabel(presence, { ...themeLabels, ...ctx.labels, ..._props.labels });

  return (
    <>
      <Box
        component="span"
        aria-hidden="true"
        mod={[
          {
            status: appearance.status,
            variant: appearance.variant,
            processing: appearance.processing,
          },
          mod,
        ]}
        {...ctx.getStyles('presence', { className, style, classNames, styles })}
        {...others}
      >
        <PresenceGlyph glyph={appearance.glyph} />
      </Box>
      {label !== '' && <VisuallyHidden>{label}</VisuallyHidden>}
    </>
  );
});

PersonaPresence.displayName = '@mantine/core/PersonaPresence';
