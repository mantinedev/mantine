import { createSafeContext, GetStylesApi, MantineRadius, MantineSize } from '../../core';
import type { PersonaFactory } from './Persona';
import type { PersonaPresenceLabels } from './resolve-presence';

interface PersonaContextValue {
  getStyles: GetStylesApi<PersonaFactory>;
  size: MantineSize | (string & {}) | undefined;
  radius: MantineRadius | undefined;
  name: string | undefined;
  unstyled: boolean | undefined;
  labels: PersonaPresenceLabels | undefined;
}

export const [PersonaProvider, usePersonaContext] = createSafeContext<PersonaContextValue>(
  'Persona component was not found in tree'
);

export type { PersonaContextValue };
