import fs from 'node:fs';
import path from 'node:path';
import fg from 'fast-glob';
import { getPath } from '../utils/get-path';

export interface Site {
  name: string;
  origin: string;
  pagesDir: string;
  outDir: string;
  sharedContentDir?: string;
}

export const SITES: Site[] = [
  {
    name: 'mantine.dev',
    origin: 'https://mantine.dev',
    pagesDir: getPath('apps/mantine.dev/src/pages'),
    outDir: getPath('apps/mantine.dev/out'),
    sharedContentDir: getPath('apps/mantine.dev/src/components/MdxProvider/MdxSharedContent'),
  },
  {
    name: 'help.mantine.dev',
    origin: 'https://help.mantine.dev',
    pagesDir: getPath('apps/help.mantine.dev/src/pages'),
    outDir: getPath('apps/help.mantine.dev/out'),
  },
];

const IGNORED_PAGES = new Set(['_app', '_document', '404']);

const DYNAMIC_ROUTE_SOURCES: Record<string, string> = {
  '/combobox/[example]': getPath(
    'apps/mantine.dev/src/combobox-examples/combobox-examples-data.ts'
  ),
  '/form/examples/[example]': getPath('apps/mantine.dev/src/form-examples/form-examples-data.ts'),
  '/app-shell/[example]': getPath(
    'apps/mantine.dev/src/app-shell-examples/app-shell-examples-data.ts'
  ),
};

function getDynamicRouteIds(route: string) {
  const source = DYNAMIC_ROUTE_SOURCES[route];
  if (!source) {
    return null;
  }

  const content = fs.readFileSync(source, 'utf-8');
  return new Set([...content.matchAll(/^\s*id: '([^']+)'/gm)].map((match) => match[1]));
}

export function normalizeRoute(route: string) {
  const trimmed = route.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Returns a map of route → source file for every page of the site, with known dynamic routes expanded */
export function getSiteRoutes(pagesDir: string) {
  const files = fg.sync(['**/*.{mdx,tsx}'], { cwd: pagesDir });
  const routes = new Map<string, string>();

  for (const file of files) {
    const withoutExt = file.replace(/\.(mdx|tsx)$/, '');
    const base = path.posix.basename(withoutExt);
    if (IGNORED_PAGES.has(base)) {
      continue;
    }

    const route = base === 'index' ? path.posix.dirname(withoutExt) : withoutExt;
    const normalized = normalizeRoute(route === '.' ? '/' : `/${route}`);
    const ids = getDynamicRouteIds(normalized);

    if (ids) {
      ids.forEach((id) =>
        routes.set(normalized.replace(/\[[^\]]+\]$/, id), path.posix.join(pagesDir, file))
      );
      continue;
    }

    routes.set(normalized, path.posix.join(pagesDir, file));
  }

  return routes;
}
