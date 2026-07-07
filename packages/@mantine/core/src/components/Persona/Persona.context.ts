import { createSafeContext, GetStylesApi, MantineRadius, MantineSize } from '../../core';
import type { PersonaFactory } from './Persona';

interface PersonaContextValue {
  getStyles: GetStylesApi<PersonaFactory>;
  size: MantineSize | (string & {}) | undefined;
  radius: MantineRadius | undefined;
  name: string | undefined;
  unstyled: boolean | undefined;
}

export const [PersonaProvider, usePersonaContext] = createSafeContext<PersonaContextValue>(
  'Persona component was not found in tree'
);

export type { PersonaContextValue };
