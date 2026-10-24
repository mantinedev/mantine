import fs from 'node:fs';
import path from 'node:path';
import fg from 'fast-glob';
import GithubSlugger from 'github-slugger';
import { getSiteRoutes, normalizeRoute, Site, SITES } from './site-routes';

interface BrokenLink {
  file: string;
  line: number;
  link: string;
  reason: string;
}

function stripFencedCode(source: string) {
  const lines = source.split('\n');
  let inFence = false;
  return lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return '';
      }
      return inFence ? '' : line;
    })
    .join('\n');
}

function headingText(raw: string) {
  return raw
    .replace(/<[^>]+>/g, '')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_~]/g, '')
    .trim();
}

function getSharedContentAnchors(sharedContentDir: string | undefined) {
  const result = new Map<string, string[]>();
  if (!sharedContentDir) {
    return result;
  }

  for (const file of fg.sync(['Mdx*.tsx'], { cwd: sharedContentDir })) {
    const component = path.posix.basename(file, '.tsx').replace(/^Mdx/, '');
    const content = fs.readFileSync(path.posix.join(sharedContentDir, file), 'utf-8');
    const ids = [...content.matchAll(/<MdxTitle[^>]*\sid="([^"]+)"/g)].map((m) => m[1]);
    if (ids.length > 0) {
      result.set(component, ids);
    }
  }

  return result;
}

function getAnchors(file: string, sharedAnchors: Map<string, string[]>) {
  const anchors = new Set<string>();
  if (!file.endsWith('.mdx')) {
    return anchors;
  }

  const source = stripFencedCode(fs.readFileSync(file, 'utf-8'));
  const slugger = new GithubSlugger();

  for (const line of source.split('\n')) {
    const heading = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (heading) {
      anchors.add(slugger.slug(headingText(heading[1])));
      continue;
    }

    const component = line.match(/^\s*<([A-Z][A-Za-z]*)\b/);
    if (component && sharedAnchors.has(component[1])) {
      sharedAnchors.get(component[1])!.forEach((id) => anchors.add(id));
    }
  }

  for (const match of source.matchAll(/\sid="([^"]+)"/g)) {
    anchors.add(match[1]);
  }

  return anchors;
}

interface SiteIndex {
  site: Site;
  routes: Map<string, string>;
  anchors: Map<string, Set<string>>;
}

function indexSite(site: Site): SiteIndex {
  const routes = getSiteRoutes(site.pagesDir);
  const sharedAnchors = getSharedContentAnchors(site.sharedContentDir);
  const anchors = new Map<string, Set<string>>();
  routes.forEach((file, route) => anchors.set(route, getAnchors(file, sharedAnchors)));
  return { site, routes, anchors };
}

function matchRoute(routes: Map<string, string>, route: string) {
  if (routes.has(route)) {
    return route;
  }

  const segments = route.split('/');

  for (const candidate of routes.keys()) {
    if (!candidate.includes('[')) {
      continue;
    }

    const candidateSegments = candidate.split('/');
    const matches =
      candidateSegments.length === segments.length &&
      candidateSegments.every(
        (segment, index) => segment.startsWith('[') || segment === segments[index]
      );

    if (matches) {
      return candidate;
    }
  }

  return null;
}

const LINK_PATTERN = /(?:\]\(|href=["'])([^\s)"']+)/g;
const EXTERNAL_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

function stripInlineCode(line: string) {
  return line.replace(/`[^`]*`/g, '');
}

function checkLink(
  link: string,
  currentRoute: string,
  current: SiteIndex,
  indexes: SiteIndex[]
): string | null {
  let target = link;
  let index = current;

  if (link.startsWith('#')) {
    target = `${currentRoute}${link}`;
  } else if (EXTERNAL_PATTERN.test(link)) {
    const absolute = link.match(/^(https?:\/\/[^/]+)(\/.*)?$/);
    const found = absolute && indexes.find((item) => item.site.origin === absolute[1]);
    if (!found) {
      return null;
    }
    index = found;
    target = absolute[2] || '/';
  } else if (!link.startsWith('/')) {
    const resolved = new URL(link, `${current.site.origin}${currentRoute}/`);
    return `relative link resolves to ${resolved.pathname}, use a root-relative path starting with /`;
  }

  const [pathWithQuery, hash] = target.split('#');
  const [pathname] = pathWithQuery.split('?');
  const route = normalizeRoute(pathname);

  if (route.startsWith('/_next') || /\.[a-z0-9]+$/i.test(route)) {
    return null;
  }

  const matched = matchRoute(index.routes, route);

  if (!matched) {
    return `page ${index.site.origin}${route} does not exist`;
  }

  if (
    hash &&
    index.routes.get(matched)!.endsWith('.mdx') &&
    !index.anchors.get(matched)!.has(hash)
  ) {
    return `anchor #${hash} not found on ${index.site.origin}${route}`;
  }

  return null;
}

function checkSite(current: SiteIndex, indexes: SiteIndex[]) {
  const broken: BrokenLink[] = [];

  current.routes.forEach((file, route) => {
    if (!file.endsWith('.mdx')) {
      return;
    }

    const lines = stripFencedCode(fs.readFileSync(file, 'utf-8')).split('\n');
    lines.forEach((line, lineIndex) => {
      for (const match of stripInlineCode(line).matchAll(LINK_PATTERN)) {
        const reason = checkLink(match[1], route, current, indexes);
        if (reason) {
          broken.push({
            file: path.relative(process.cwd(), file),
            line: lineIndex + 1,
            link: match[1],
            reason,
          });
        }
      }
    });
  });

  return broken;
}

const indexes = SITES.map(indexSite);
const broken = indexes.flatMap((index) => checkSite(index, indexes));

if (broken.length === 0) {
  process.stdout.write('All internal docs links resolve.\n');
  process.exit(0);
}

broken.forEach((item) => {
  process.stdout.write(`${item.file}:${item.line}  ${item.link}\n    ${item.reason}\n`);
});
process.stdout.write(`\n${broken.length} broken link(s) found\n`);
process.exit(1);
