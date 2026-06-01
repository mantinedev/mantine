import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, relative } from 'node:path';
import { globSync } from 'glob';

const REPO_ROOT = new URL('../..', import.meta.url).pathname.replace(/\/$/, '');
const OUTPUT_PATH = `${REPO_ROOT}/claude/colors-10.0/inventory-raw-color-usage.md`;

const CSS_RE = /var\(--mantine-color-(gray|dark)-(\d)\)/g;
const TS_RE = /theme\.colors\.(gray|dark)\[(\d)\]/g;

const HOVER_SELECTOR_RE =
  /:hover|:focus|:active|\[data-hovered\]|\[data-pressed\]|\[data-focused\]|\[data-active\]/i;
const TRACK_CONTEXT_RE = /track|progress|slider|thumb|rail/i;

function inferPurpose(line, prop) {
  if (TRACK_CONTEXT_RE.test(line)) return 'track';
  if (/border|outline/i.test(prop)) return 'border';
  if (/background/i.test(prop)) {
    if (HOVER_SELECTOR_RE.test(line)) return 'hover';
    return 'surface-background';
  }
  if (/^color$|^fill$|^stroke$/i.test(prop)) return 'text-muted';
  if (HOVER_SELECTOR_RE.test(line)) return 'hover';
  return 'other';
}

function extractCssProp(line) {
  const m = line.match(/^\s*([\w-]+)\s*:/);
  return m ? m[1] : '';
}

function collectHits(files) {
  const hits = [];

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const isCSS = file.endsWith('.css');
    const re = isCSS ? CSS_RE : TS_RE;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(line)) !== null) {
        const scale = m[1];
        const shade = Number(m[2]);
        const variable = isCSS
          ? `--mantine-color-${scale}-${shade}`
          : `theme.colors.${scale}[${shade}]`;
        const prop = isCSS ? extractCssProp(line) : '';
        const purpose = inferPurpose(line, prop);
        hits.push({ file, line: i + 1, scale, shade, variable, context: line.trim(), purpose });
      }
    }
  }

  return hits;
}

function packageName(filePath) {
  const rel = relative(REPO_ROOT, filePath);
  const m = rel.match(/^packages\/@mantine\/([^/]+)\//);
  return m ? `@mantine/${m[1]}` : rel.split('/').slice(0, 2).join('/');
}

function buildFreqTable(hits) {
  const table = {};
  for (const h of hits) {
    const key = h.variable;
    if (!table[key]) table[key] = {};
    table[key][h.purpose] = (table[key][h.purpose] || 0) + 1;
  }
  return table;
}

function buildPackageBreakdown(hits) {
  const pkgs = {};
  for (const h of hits) {
    const pkg = packageName(h.file);
    if (!pkgs[pkg]) pkgs[pkg] = [];
    pkgs[pkg].push(h);
  }
  return pkgs;
}

function renderFreqTable(table) {
  const purposes = ['border', 'surface-background', 'hover', 'text-muted', 'track', 'other'];
  const header = `| Variable | ${purposes.join(' | ')} | Total |`;
  const sep = `| --- | ${purposes.map(() => '---').join(' | ')} | --- |`;
  const rows = Object.entries(table)
    .sort(([a], [b]) => {
      const [, sa, na] = a.match(/(gray|dark)[-[](\d)/) || [];
      const [, sb, nb] = b.match(/(gray|dark)[-[](\d)/) || [];
      if (sa !== sb) return sa === 'gray' ? -1 : 1;
      return Number(na) - Number(nb);
    })
    .map(([variable, counts]) => {
      const total = Object.values(counts).reduce((s, n) => s + n, 0);
      const cells = purposes.map((p) => counts[p] || 0);
      return `| \`${variable}\` | ${cells.join(' | ')} | **${total}** |`;
    });
  return [header, sep, ...rows].join('\n');
}

function renderPackageBreakdown(pkgs) {
  return Object.entries(pkgs)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([pkg, hits]) => {
      const byFile = {};
      for (const h of hits) {
        const rel = relative(REPO_ROOT, h.file);
        if (!byFile[rel]) byFile[rel] = [];
        byFile[rel].push(h);
      }

      const fileBlocks = Object.entries(byFile)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([rel, fileHits]) => {
          const rows = fileHits
            .map(
              (h) =>
                `| ${h.line} | \`${h.variable}\` | \`${h.purpose}\` | ${h.context.replace(/\|/g, '\\|').slice(0, 100)} |`
            )
            .join('\n');
          return `**\`${rel}\`**\n\n| Line | Variable | Purpose | Context |\n| --- | --- | --- | --- |\n${rows}`;
        })
        .join('\n\n');

      return `## ${pkg}\n\n${fileBlocks}`;
    })
    .join('\n\n---\n\n');
}

const files = globSync('packages/@mantine/**/src/**/*.{css,tsx,ts}', {
  absolute: true,
  cwd: REPO_ROOT,
  ignore: ['**/default-css-variables.css'],
});

const hits = collectHits(files);
const freqTable = buildFreqTable(hits);
const pkgBreakdown = buildPackageBreakdown(hits);

const report = `# Raw Color Usage Inventory

Generated: ${new Date().toISOString()}

Raw hardcoded \`var(--mantine-color-gray-N)\` / \`var(--mantine-color-dark-N)\` and \`theme.colors.gray[N]\` / \`theme.colors.dark[N]\` usages across all \`packages/@mantine/**/src\` files. These are candidates for migration to semantic role variables in a later phase.

> Notes: the semantic-token definition file \`default-css-variables.css\` is excluded (it defines these variables rather than consuming them). Hover detection is line-local, so background-on-hover usages whose hover selector sits on a preceding line are classified as \`surface-background\` — check the context column when migrating.

**Total hits: ${hits.length}**

---

## Summary: Frequency by Variable and Purpose

${renderFreqTable(freqTable)}

---

## Per-package Breakdown

${renderPackageBreakdown(pkgBreakdown)}
`;

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, report, 'utf8');

console.log(`Total raw-color hits: ${hits.length} (report: ${OUTPUT_PATH})`);
