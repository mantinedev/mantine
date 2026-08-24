import { createTheme } from '../create-theme/create-theme';
import { DEFAULT_THEME } from '../default-theme';
import { mergeMantineTheme } from '../merge-mantine-theme/merge-mantine-theme';
import { defaultCssVariablesResolver } from './default-css-variables-resolver';
import { getCSSColorVariables } from './get-css-color-variables';

test('default-css-variables-resolver', () => {
  expect(defaultCssVariablesResolver(DEFAULT_THEME)).toMatchSnapshot();
});

describe('semantic color role variables', () => {
  const result = defaultCssVariablesResolver(DEFAULT_THEME);

  describe('scheme-specific vars – light', () => {
    it('--mantine-color-border resolves to var(--mantine-color-neutral-4) in light', () => {
      expect(result.light['--mantine-color-border']).toBe('var(--mantine-color-neutral-4)');
    });

    it('--mantine-color-border-subtle resolves to var(--mantine-color-gray-2) in light', () => {
      expect(result.light['--mantine-color-border-subtle']).toBe('var(--mantine-color-gray-2)');
    });

    it('--mantine-color-border-strong resolves to var(--mantine-color-gray-4) in light', () => {
      expect(result.light['--mantine-color-border-strong']).toBe('var(--mantine-color-gray-4)');
    });

    it('--mantine-color-hover resolves to var(--mantine-color-neutral-2) in light', () => {
      expect(result.light['--mantine-color-hover']).toBe('var(--mantine-color-neutral-2)');
    });

    it('--mantine-color-active resolves to var(--mantine-color-gray-1) in light', () => {
      expect(result.light['--mantine-color-active']).toBe('var(--mantine-color-gray-1)');
    });

    it('--mantine-color-selected resolves to var(--mantine-color-gray-1) in light', () => {
      expect(result.light['--mantine-color-selected']).toBe('var(--mantine-color-gray-1)');
    });

    it('--mantine-color-track resolves to var(--mantine-color-neutral-3) in light', () => {
      expect(result.light['--mantine-color-track']).toBe('var(--mantine-color-neutral-3)');
    });
  });

  describe('scheme-specific vars – dark', () => {
    it('--mantine-color-border resolves to var(--mantine-color-neutral-4) in dark', () => {
      expect(result.dark['--mantine-color-border']).toBe('var(--mantine-color-neutral-4)');
    });

    it('--mantine-color-border-subtle resolves to var(--mantine-color-dark-5) in dark', () => {
      expect(result.dark['--mantine-color-border-subtle']).toBe('var(--mantine-color-dark-5)');
    });

    it('--mantine-color-border-strong resolves to var(--mantine-color-dark-3) in dark', () => {
      expect(result.dark['--mantine-color-border-strong']).toBe('var(--mantine-color-dark-3)');
    });

    it('--mantine-color-hover resolves to var(--mantine-color-neutral-1) in dark', () => {
      expect(result.dark['--mantine-color-hover']).toBe('var(--mantine-color-neutral-1)');
    });

    it('--mantine-color-active resolves to var(--mantine-color-dark-5) in dark', () => {
      expect(result.dark['--mantine-color-active']).toBe('var(--mantine-color-dark-5)');
    });

    it('--mantine-color-selected resolves to var(--mantine-color-dark-5) in dark', () => {
      expect(result.dark['--mantine-color-selected']).toBe('var(--mantine-color-dark-5)');
    });

    it('--mantine-color-track resolves to var(--mantine-color-neutral-3) in dark', () => {
      expect(result.dark['--mantine-color-track']).toBe('var(--mantine-color-neutral-3)');
    });
  });

  describe('scheme-independent vars – variables', () => {
    it('--mantine-color-divider resolves to var(--mantine-color-border)', () => {
      expect(result.variables['--mantine-color-divider']).toBe('var(--mantine-color-border)');
    });

    it('--mantine-color-text-muted resolves to var(--mantine-color-dimmed)', () => {
      expect(result.variables['--mantine-color-text-muted']).toBe('var(--mantine-color-dimmed)');
    });
  });

  describe('zero-change proof – existing vars are unchanged or value-identically re-anchored', () => {
    it('--mantine-color-body aliases surface-page in light', () => {
      expect(result.light['--mantine-color-body']).toBe('var(--mantine-color-surface-page)');
    });

    it('--mantine-color-default is re-anchored onto surface-panel in light', () => {
      expect(result.light['--mantine-color-default']).toBe('var(--mantine-color-surface-panel)');
    });

    it('--mantine-color-default-border is unchanged in light', () => {
      expect(result.light['--mantine-color-default-border']).toBe('var(--mantine-color-gray-4)');
    });

    it('--mantine-color-dimmed is re-anchored onto neutral-6 in light', () => {
      expect(result.light['--mantine-color-dimmed']).toBe('var(--mantine-color-neutral-6)');
    });

    it('--mantine-color-body aliases surface-page in dark', () => {
      expect(result.dark['--mantine-color-body']).toBe('var(--mantine-color-surface-page)');
    });

    it('--mantine-color-default is re-anchored onto surface-panel in dark', () => {
      expect(result.dark['--mantine-color-default']).toBe('var(--mantine-color-surface-panel)');
    });

    it('--mantine-color-default-border is unchanged in dark', () => {
      expect(result.dark['--mantine-color-default-border']).toBe('var(--mantine-color-dark-4)');
    });

    it('--mantine-color-dimmed is re-anchored onto neutral-6 in dark', () => {
      expect(result.dark['--mantine-color-dimmed']).toBe('var(--mantine-color-neutral-6)');
    });
  });
});

describe('legacy surface-level vars (surface-0..5, surface-recessed) are removed', () => {
  const result = defaultCssVariablesResolver(DEFAULT_THEME);

  it('removes old light surface-level vars (surface-0..5, surface-recessed)', () => {
    expect(result.light['--mantine-color-surface-0']).toBeUndefined();
    expect(result.light['--mantine-color-surface-1']).toBeUndefined();
    expect(result.light['--mantine-color-surface-2']).toBeUndefined();
    expect(result.light['--mantine-color-surface-3']).toBeUndefined();
    expect(result.light['--mantine-color-surface-4']).toBeUndefined();
    expect(result.light['--mantine-color-surface-5']).toBeUndefined();
    expect(result.light['--mantine-color-surface-recessed']).toBeUndefined();
  });

  it('removes old dark surface-level vars (surface-0..5, surface-recessed)', () => {
    expect(result.dark['--mantine-color-surface-0']).toBeUndefined();
    expect(result.dark['--mantine-color-surface-1']).toBeUndefined();
    expect(result.dark['--mantine-color-surface-2']).toBeUndefined();
    expect(result.dark['--mantine-color-surface-3']).toBeUndefined();
    expect(result.dark['--mantine-color-surface-4']).toBeUndefined();
    expect(result.dark['--mantine-color-surface-5']).toBeUndefined();
    expect(result.dark['--mantine-color-surface-recessed']).toBeUndefined();
  });

  it('body remains aliased to surface-page and track remains on the neutral ladder', () => {
    expect(result.light['--mantine-color-body']).toBe('var(--mantine-color-surface-page)');
    expect(result.light['--mantine-color-track']).toBe('var(--mantine-color-neutral-3)');
    expect(result.dark['--mantine-color-body']).toBe('var(--mantine-color-surface-page)');
    expect(result.dark['--mantine-color-track']).toBe('var(--mantine-color-neutral-3)');
  });
});

describe('dark-scheme light variant uses color-mix instead of darken/rgba', () => {
  const result = defaultCssVariablesResolver(DEFAULT_THEME);

  it('dark --mantine-color-blue-light is a color-mix string, not a darken/rgba value', () => {
    expect(result.dark['--mantine-color-blue-light']).toBe(
      'color-mix(in srgb, var(--mantine-color-blue-8), var(--mantine-color-body) 64%)'
    );
  });

  it('dark --mantine-color-blue-light-hover uses shade-8 with 57% body mix', () => {
    expect(result.dark['--mantine-color-blue-light-hover']).toBe(
      'color-mix(in srgb, var(--mantine-color-blue-8), var(--mantine-color-body) 57%)'
    );
  });

  it('dark --mantine-color-blue-light-color points to shade 1 (not 0)', () => {
    expect(result.dark['--mantine-color-blue-light-color']).toBe('var(--mantine-color-blue-1)');
  });

  it('light-scheme light vars use half-step hover (Fix 4) and shade-9 color', () => {
    expect(result.light['--mantine-color-blue-light']).toBe('var(--mantine-color-blue-1)');
    expect(result.light['--mantine-color-blue-light-hover']).toBe(
      'color-mix(in srgb, var(--mantine-color-blue-1), var(--mantine-color-blue-2) 50%)'
    );
    expect(result.light['--mantine-color-blue-light-color']).toBe('var(--mantine-color-blue-9)');
  });

  it('dark filled/filled-hover/text/outline track primaryShade.dark = 7', () => {
    expect(result.dark['--mantine-color-blue-filled']).toBe('var(--mantine-color-blue-7)');
    expect(result.dark['--mantine-color-blue-filled-hover']).toBe('var(--mantine-color-blue-8)');
    expect(result.dark['--mantine-color-blue-text']).toBe('var(--mantine-color-blue-4)');
    expect(result.dark['--mantine-color-blue-outline']).toBe('var(--mantine-color-blue-3)');
  });

  it('getCSSColorVariables produces the color-mix string directly', () => {
    const vars = getCSSColorVariables({
      theme: DEFAULT_THEME,
      color: 'blue',
      colorScheme: 'dark',
      withColorValues: false,
    });
    expect(vars['--mantine-color-blue-light']).toBe(
      'color-mix(in srgb, var(--mantine-color-blue-8), var(--mantine-color-body) 64%)'
    );
    expect(vars['--mantine-color-blue-light']).not.toMatch(/rgba?\(/);
    expect(vars['--mantine-color-blue-light']).not.toMatch(/darken/);
  });
});

describe('neutral ladder variables', () => {
  const result = defaultCssVariablesResolver(DEFAULT_THEME);

  it('emits the neutral ladder with current-value picks', () => {
    expect(result.light['--mantine-color-neutral-0']).toBe('var(--mantine-color-white)');
    expect(result.light['--mantine-color-neutral-2']).toBe('var(--mantine-color-gray-0)');
    expect(result.light['--mantine-color-neutral-8']).toBe('var(--mantine-color-black)');
    expect(result.dark['--mantine-color-neutral-0']).toBe('var(--mantine-color-dark-7)');
    expect(result.dark['--mantine-color-neutral-2']).toBe('var(--mantine-color-dark-5)');
    expect(result.dark['--mantine-color-neutral-9']).toBe('var(--mantine-color-white)');
  });
});

describe('role-var re-anchoring onto the neutral system', () => {
  it('re-anchors role vars onto the neutral system with identical values', () => {
    const resolved = defaultCssVariablesResolver(DEFAULT_THEME);
    expect(resolved.light['--mantine-color-default']).toBe('var(--mantine-color-surface-panel)');
    expect(resolved.dark['--mantine-color-default']).toBe('var(--mantine-color-surface-panel)');
    expect(resolved.light['--mantine-color-default-hover']).toBe('var(--mantine-color-neutral-2)');
    expect(resolved.dark['--mantine-color-default-hover']).toBe('var(--mantine-color-neutral-2)');
    expect(resolved.light['--mantine-color-border']).toBe('var(--mantine-color-neutral-4)');
    expect(resolved.dark['--mantine-color-border']).toBe('var(--mantine-color-neutral-4)');
    expect(resolved.light['--mantine-color-hover']).toBe('var(--mantine-color-neutral-2)');
    expect(resolved.dark['--mantine-color-hover']).toBe('var(--mantine-color-neutral-1)');
  });
});

describe('surface tokens with named aliases', () => {
  const result = defaultCssVariablesResolver(DEFAULT_THEME);

  it('emits named surface tokens and aliases body to surface-page', () => {
    expect(result.light['--mantine-color-surface-page']).toBe('var(--mantine-color-white)');
    expect(result.light['--mantine-color-surface-panel']).toBe('var(--mantine-color-white)');
    expect(result.light['--mantine-color-surface-panel-2']).toBe('var(--mantine-color-white)');
    expect(result.light['--mantine-color-surface-sunken']).toBe('var(--mantine-color-gray-1)');
    expect(result.light['--mantine-color-body']).toBe('var(--mantine-color-surface-page)');
    expect(result.dark['--mantine-color-surface-page']).toBe('var(--mantine-color-dark-7)');
    expect(result.dark['--mantine-color-surface-panel']).toBe('var(--mantine-color-dark-6)');
    expect(result.dark['--mantine-color-surface-panel-2']).toBe('var(--mantine-color-dark-5)');
    expect(result.dark['--mantine-color-surface-sunken']).toBe('var(--mantine-color-dark-8)');
    expect(result.dark['--mantine-color-body']).toBe('var(--mantine-color-surface-page)');
    expect(result.light['--mantine-color-surface-0']).toBeUndefined();
    expect(result.light['--mantine-color-surface-recessed']).toBeUndefined();
  });
});

describe('theme.surfaces overrides', () => {
  it('applies theme.surfaces overrides per scheme', () => {
    const theme = mergeMantineTheme(
      DEFAULT_THEME,
      createTheme({
        surfaces: { dark: { panel: '#101113' }, light: { sunken: 'var(--mantine-color-gray-2)' } },
      })
    );
    const resolved = defaultCssVariablesResolver(theme);
    expect(resolved.dark['--mantine-color-surface-panel']).toBe('#101113');
    expect(resolved.dark['--mantine-color-surface-page']).toBe('var(--mantine-color-dark-7)');
    expect(resolved.light['--mantine-color-surface-sunken']).toBe('var(--mantine-color-gray-2)');
  });
});
