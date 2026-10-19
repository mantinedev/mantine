import type { Modifier } from '@docs/styles-api';

export interface StylesApiData {
  selectors: Record<string, string>;
  vars: Record<string, Record<string, string>>;
  modifiers: Modifier<string>[];
}

const stylesApiCache = new Map<string, Promise<StylesApiData | null>>();

export function loadStylesApiData(component: string): Promise<StylesApiData | null> {
  if (!stylesApiCache.has(component)) {
    stylesApiCache.set(
      component,
      import('@docs/styles-api')
        .then((module) => (module as Record<string, any>)[`${component}StylesApi`] ?? null)
        .catch(() => null)
    );
  }

  return stylesApiCache.get(component)!;
}
