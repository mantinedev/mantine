import { DEFAULT_THEME } from '@mantine/core';
import type { PresetSource } from '@/presets/load-source';
import {
  getGoogleFontsUrl,
  type GoogleFont,
  type ThemeExport,
  type ThemeExportValue,
} from '@/preview';

const THEME_KEYS = [
  'primaryColor',
  'primaryShade',
  'autoContrast',
  'luminanceThreshold',
  'white',
  'black',
  'colors',
  'fontFamily',
  'fontFamilyMonospace',
  'fontSizes',
  'lineHeights',
  'fontWeights',
  'headings',
  'defaultRadius',
  'radius',
  'spacing',
  'breakpoints',
  'shadows',
  'scale',
  'fontSmoothing',
  'focusRing',
  'cursorType',
  'respectReducedMotion',
  'disabledOpacity',
  'defaultGradient',
  'overlayStack',
  'surfaces',
  'other',
];

const IDENTIFIER = /^[a-z_$][\w$]*$/i;
const INLINE_LIMIT = 60;

class Raw {
  constructor(public code: string) {}
}

type CodeValue = ThemeExportValue | Raw | CodeValue[] | { [key: string]: CodeValue };

const SCALE_SOURCE =
  'calc\\(calc\\((-?[\\d.]+)rem \\* var\\(--mantine-scale\\)\\) \\* (-?[\\d.]+)\\)|calc\\((-?[\\d.]+)rem \\* var\\(--mantine-scale\\)\\)';
const SCALE_SOME = new RegExp(SCALE_SOURCE);
const SCALE_ALL = new RegExp(SCALE_SOURCE, 'g');
const SCALE_WHOLE = new RegExp(`^(?:${SCALE_SOURCE})$`);

function roundPx(value: number) {
  return String(Math.round(value * 100) / 100);
}

function toRemCall(match: string, nestedRem: string, factor: string, plainRem: string) {
  const px = nestedRem
    ? Number.parseFloat(nestedRem) * 16 * Number.parseFloat(factor)
    : Number.parseFloat(plainRem) * 16;
  return Number.isFinite(px) ? `rem(${roundPx(px)})` : match;
}

function quote(value: string) {
  const escaped = value.replace(/\\/g, '\\\\');
  if (value.includes("'") && !value.includes('"')) {
    return `"${escaped}"`;
  }
  return `'${escaped.replace(/'/g, "\\'")}'`;
}

function stringifyString(value: string, usage: { rem: boolean }) {
  if (!SCALE_SOME.test(value)) {
    return quote(value);
  }

  usage.rem = true;
  const single = value.match(SCALE_WHOLE);
  if (single) {
    return toRemCall(single[0], single[1], single[2], single[3]);
  }

  const template = value
    .replace(/[`\\]/g, '\\$&')
    .replace(/\$\{/g, '\\${')
    .replace(SCALE_ALL, (...args) => `\${${toRemCall(args[0], args[1], args[2], args[3])}}`);
  return `\`${template}\``;
}

function formatKey(key: string) {
  return IDENTIFIER.test(key) ? key : quote(key);
}

function hasNested(value: CodeValue) {
  return typeof value === 'object' && value !== null && !(value instanceof Raw);
}

function indentation(level: number) {
  return '  '.repeat(level);
}

function stringify(value: CodeValue, level: number, usage: { rem: boolean }): string {
  if (value instanceof Raw) {
    return value.code;
  }

  if (typeof value === 'string') {
    return stringifyString(value, usage);
  }

  if (typeof value !== 'object' || value === null) {
    return String(value);
  }

  const inner = indentation(level + 1);
  const outer = indentation(level);

  if (Array.isArray(value)) {
    const items = value.map((item) => stringify(item, level + 1, usage));
    const inline = `[${items.join(', ')}]`;
    if (inline.length <= INLINE_LIMIT && !value.some(hasNested)) {
      return inline;
    }
    return `[\n${items.map((item) => `${inner}${item},`).join('\n')}\n${outer}]`;
  }

  const entries = Object.entries(value).map(([key, item]) =>
    item instanceof Raw && item.code === key
      ? key
      : `${formatKey(key)}: ${stringify(item, level + 1, usage)}`
  );
  if (entries.length === 0) {
    return '{}';
  }
  const inline = `{ ${entries.join(', ')} }`;
  if (inline.length <= INLINE_LIMIT && !Object.values(value).some(hasNested)) {
    return inline;
  }
  return `{\n${entries.map((entry) => `${inner}${entry},`).join('\n')}\n${outer}}`;
}

function getColors(themeExport: ThemeExport, usage: { rem: boolean }) {
  const colors: Record<string, CodeValue> = {};
  let virtual = false;

  const entries = Object.entries(themeExport.colors).sort(
    ([a], [b]) => Number(a in DEFAULT_THEME.colors) - Number(b in DEFAULT_THEME.colors)
  );

  entries.forEach(([name, value]) => {
    if (Array.isArray(value)) {
      colors[name] = value;
    } else {
      virtual = true;
      colors[name] = new Raw(`virtualColor(${stringify({ ...value.virtual }, 1, usage)})`);
    }
  });

  return { colors, virtual };
}

const LINE_LIMIT = 80;

function compareImportNames(a: string, b: string) {
  return a
    .replace(/^type /, '')
    .localeCompare(b.replace(/^type /, ''), 'en', { sensitivity: 'base' });
}

function formatImport(names: Set<string>, module: string) {
  const sorted = [...names].sort(compareImportNames);
  const inline = `import { ${sorted.join(', ')} } from '${module}';`;
  if (inline.length <= LINE_LIMIT) {
    return inline;
  }
  return `import {\n${sorted.map((name) => `  ${name},`).join('\n')}\n} from '${module}';`;
}

function getSourceText(source: PresetSource) {
  return [source.helpers, source.components, source.variantColorResolver].join('\n');
}

function getImports(core: string[], source: PresetSource | null) {
  const modules = new Map<string, Set<string>>();
  modules.set('@mantine/core', new Set(core));

  Object.entries(source?.imports ?? {}).forEach(([module, names]) => {
    const set = modules.get(module) ?? new Set<string>();
    names.forEach((name) => set.add(name));
    modules.set(module, set);
  });

  const lines = [...modules.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([module, names]) => formatImport(names, module));

  if (source && /(?<![\w$])classes(?![\w$])/.test(getSourceText(source))) {
    lines.push("import classes from './theme.module.css';");
  }

  return lines;
}

export function hasPresetStyles(source: PresetSource | null): source is PresetSource {
  return source !== null && (source.components !== null || source.variantColorResolver !== null);
}

export function hasVariables(themeExport: ThemeExport) {
  return Object.values(themeExport.variables).some((section) => Object.keys(section).length > 0);
}

export function generateThemeCode(themeExport: ThemeExport, source: PresetSource | null) {
  const usage = { rem: false };
  const { colors, virtual } = getColors(themeExport, usage);
  const values: Record<string, CodeValue> = { ...themeExport.theme };
  if (Object.keys(colors).length > 0) {
    values.colors = colors;
  }

  const ordered: Record<string, CodeValue> = {};
  THEME_KEYS.forEach((key) => {
    if (key in values) {
      ordered[key] = values[key];
    }
  });

  if (source?.variantColorResolver) {
    ordered.variantColorResolver = new Raw(source.variantColorResolver);
  }
  if (source?.components) {
    ordered.components = new Raw(source.components);
  }

  const withResolver = hasVariables(themeExport);
  const themeCode = stringify(ordered, 0, usage);
  const resolverCode = withResolver ? stringify({ ...themeExport.variables }, 0, usage) : null;
  const coreImports = [
    'createTheme',
    ...(withResolver ? ['type CSSVariablesResolver'] : []),
    ...(usage.rem ? ['rem'] : []),
    ...(virtual ? ['virtualColor'] : []),
  ];

  const lines = [
    ...getImports(coreImports, source),
    '',
    ...(source?.helpers ? [source.helpers, ''] : []),
    `export const theme = createTheme(${themeCode});`,
  ];

  if (resolverCode) {
    lines.push(
      '',
      `export const cssVariablesResolver: CSSVariablesResolver = () => (${resolverCode});`
    );
  }

  return `${lines.join('\n')}\n`;
}

export function generateAppCode(themeExport: ThemeExport) {
  const withResolver = hasVariables(themeExport);
  const named = withResolver ? 'cssVariablesResolver, theme' : 'theme';
  const props = withResolver
    ? 'theme={theme} cssVariablesResolver={cssVariablesResolver}'
    : 'theme={theme}';

  return [
    "import '@mantine/core/styles.css';",
    '',
    "import { MantineProvider } from '@mantine/core';",
    `import { ${named} } from './theme';`,
    '',
    'export default function App() {',
    '  return (',
    `    <MantineProvider ${props}>`,
    '      {/* Your app here */}',
    '    </MantineProvider>',
    '  );',
    '}',
    '',
  ].join('\n');
}

function getFirstFamily(stack: string | undefined) {
  if (typeof stack !== 'string') {
    return null;
  }
  return (stack.split(',')[0] ?? '').trim().replace(/^['"]|['"]$/g, '');
}

export function getExportFonts(themeExport: ThemeExport, catalog: GoogleFont[]) {
  const headings = themeExport.theme.headings;
  const families = [
    getFirstFamily(themeExport.theme.fontFamily as string | undefined),
    getFirstFamily(themeExport.theme.fontFamilyMonospace as string | undefined),
    getFirstFamily(
      typeof headings === 'object' && headings !== null && !Array.isArray(headings)
        ? (headings.fontFamily as string | undefined)
        : undefined
    ),
  ];

  return catalog.filter((font) => families.includes(font.family));
}

export function generateFontsCode(fonts: GoogleFont[]) {
  const url = getGoogleFontsUrl(fonts);
  if (!url) {
    return null;
  }

  return [
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    `<link href="${url}" rel="stylesheet" />`,
    '',
  ].join('\n');
}
