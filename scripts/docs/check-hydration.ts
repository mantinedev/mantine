import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { parseArgs } from 'node:util';
import chalk from 'chalk';
import { chromium, firefox, webkit, type Browser, type BrowserContext } from 'playwright';
import { getSiteRoutes, Site, SITES } from './site-routes';

function print(message = '') {
  process.stdout.write(`${message}\n`);
}

const { values: args } = parseArgs({
  options: {
    site: { type: 'string', default: 'mantine.dev' },
    browser: { type: 'string', default: 'chromium' },
    concurrency: { type: 'string', default: '8' },
    filter: { type: 'string', multiple: true },
    timezone: { type: 'string' },
    'time-offset': { type: 'string', default: '0' },
    origin: { type: 'string' },
    help: { type: 'boolean', default: false },
  },
});

if (args.help) {
  print(`
Opens every page of a built docs site in a headless browser and reports hydration errors.
Build the site first: npm run docs:build (or next build in the app folder).

Options:
  --site <name>          mantine.dev (default), help.mantine.dev or all
  --browser <name>       chromium (default), firefox or webkit
  --concurrency <n>      pages opened in parallel, 8 by default
  --filter <text>        only check routes that include the given text, can be repeated
  --timezone <tz>        browser timezone, for example America/New_York
  --time-offset <value>  shift the browser clock forward, for example 30s, 10m, 2h, 3d
  --origin <url>         check an already running server instead of the build output,
                         for example http://localhost:7545 with next dev for full error messages
`);
  process.exit(0);
}

const BROWSERS = { chromium, firefox, webkit };
const HYDRATION_PATTERN = /hydrat|react\.dev\/errors\/(418|419|422|423|424|425)\b/i;

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.wasm': 'application/wasm',
};

interface PageIssue {
  kind: 'hydration' | 'error' | 'warning';
  message: string;
}

interface PageResult {
  route: string;
  issues: PageIssue[];
}

function parseTimeOffset(value: string) {
  const match = value.trim().match(/^(\d+)(ms|s|m|h|d)?$/);
  if (!match) {
    throw new Error(
      `Invalid --time-offset value "${value}", expected a number with ms, s, m, h or d suffix`
    );
  }

  const multipliers = { ms: 1, s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 };
  return Number(match[1]) * multipliers[(match[2] ?? 'ms') as keyof typeof multipliers];
}

function resolveSites(name: string) {
  if (name === 'all') {
    return SITES;
  }

  const site = SITES.find((item) => item.name === name);
  if (!site) {
    throw new Error(
      `Unknown site "${name}", expected one of: ${SITES.map((item) => item.name).join(', ')}, all`
    );
  }

  return [site];
}

function resolveStaticFile(outDir: string, pathname: string) {
  const decoded = decodeURIComponent(pathname.split('?')[0]);
  const safePath = path.posix.normalize(decoded).replace(/^(\.\.(\/|$))+/, '');
  const candidates = safePath.endsWith('/')
    ? [
        path.join(outDir, safePath, 'index.html'),
        path.join(outDir, `${safePath.slice(0, -1)}.html`),
      ]
    : [
        path.join(outDir, safePath),
        path.join(outDir, `${safePath}.html`),
        path.join(outDir, safePath, 'index.html'),
      ];

  return candidates.find(
    (candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()
  );
}

function serveStatic(outDir: string) {
  return new Promise<{ origin: string; close: () => Promise<void> }>((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const file = resolveStaticFile(outDir, req.url ?? '/') ?? path.join(outDir, '404.html');
      if (!fs.existsSync(file)) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      const isFallback = file.endsWith('404.html');
      res.writeHead(isFallback ? 404 : 200, {
        'Content-Type': MIME_TYPES[path.extname(file)] ?? 'application/octet-stream',
      });
      fs.createReadStream(file).pipe(res);
    });

    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        reject(new Error('Failed to start static server'));
        return;
      }

      resolve({
        origin: `http://127.0.0.1:${address.port}`,
        close: () => new Promise((done) => server.close(() => done())),
      });
    });
  });
}

function getClockShiftScript(offsetMs: number) {
  return `(() => {
    const offset = ${offsetMs};
    const OriginalDate = Date;
    class ShiftedDate extends OriginalDate {
      constructor(...args) {
        if (args.length === 0) {
          super(OriginalDate.now() + offset);
        } else {
          super(...args);
        }
      }
      static now() {
        return OriginalDate.now() + offset;
      }
    }
    window.Date = ShiftedDate;
  })();`;
}

async function checkRoute(
  context: BrowserContext,
  origin: string,
  route: string
): Promise<PageResult> {
  const page = await context.newPage();
  const issues: PageIssue[] = [];

  page.on('console', (message) => {
    const type = message.type();
    if (type !== 'error' && type !== 'warning') {
      return;
    }

    const text = message.text();
    if (text.startsWith('[HMR]')) {
      return;
    }

    issues.push({
      kind: HYDRATION_PATTERN.test(text) ? 'hydration' : type === 'error' ? 'error' : 'warning',
      message: text,
    });
  });

  page.on('pageerror', (error) => {
    const text = error.message;
    issues.push({ kind: HYDRATION_PATTERN.test(text) ? 'hydration' : 'error', message: text });
  });

  try {
    const url = `${origin}${route === '/' ? '/' : `${route}/`}`;
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });

    if (!response || response.status() >= 400) {
      issues.push({
        kind: 'error',
        message: `Page responded with status ${response?.status() ?? 'unknown'}`,
      });
    }

    await page.waitForTimeout(300);
  } catch (error) {
    issues.push({ kind: 'error', message: `Navigation failed: ${(error as Error).message}` });
  } finally {
    await page.close();
  }

  return { route, issues };
}

async function runQueue<T>(items: T[], concurrency: number, worker: (item: T) => Promise<void>) {
  let index = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const item = items[index];
      index += 1;
      await worker(item);
    }
  });
  await Promise.all(runners);
}

function formatMessage(message: string) {
  const lines = message.split('\n');
  const firstLine = lines.find((line) => line.trim().length > 0) ?? message;
  const head = firstLine.length > 300 ? `${firstLine.slice(0, 300)}…` : firstLine;
  const diff = lines.filter((line) => /^\s*[+-]\s{2,}\S/.test(line)).slice(0, 12);
  return diff.length > 0
    ? [head, ...diff.map((line) => `             ${line.trim()}`)].join('\n')
    : head;
}

async function checkSite(browser: Browser, site: Site, concurrency: number, offsetMs: number) {
  if (!args.origin && !fs.existsSync(path.join(site.outDir, 'index.html'))) {
    throw new Error(
      `${site.name}: build output not found at ${site.outDir}. Run next build in the app folder first or pass --origin.`
    );
  }

  const routes = [...getSiteRoutes(site.pagesDir).keys()]
    .filter((route) => !route.includes('['))
    .filter((route) => !args.filter?.length || args.filter.some((part) => route.includes(part)))
    .sort();

  print(chalk.cyan(`\n${site.name}: checking ${routes.length} pages`));

  const server = args.origin ? null : await serveStatic(site.outDir);
  const origin = args.origin ? args.origin.replace(/\/+$/, '') : server!.origin;
  const interactive = Boolean(process.stdout.isTTY);
  const context = await browser.newContext({
    timezoneId: args.timezone,
    viewport: { width: 1440, height: 900 },
  });

  if (offsetMs !== 0) {
    await context.addInitScript(getClockShiftScript(offsetMs));
  }

  const results: PageResult[] = [];
  let completed = 0;

  try {
    await runQueue(routes, concurrency, async (route) => {
      const result = await checkRoute(context, origin, route);
      results.push(result);
      completed += 1;

      const hydration = result.issues.filter((issue) => issue.kind === 'hydration').length;
      const errors = result.issues.filter((issue) => issue.kind === 'error').length;
      const marker =
        hydration > 0 ? chalk.red('✖') : errors > 0 ? chalk.yellow('!') : chalk.green('✔');
      const progress = `${String(completed).padStart(String(routes.length).length)}/${routes.length}`;

      if (interactive) {
        process.stdout.write(`\r${marker} ${progress} ${route.padEnd(60)}`);
      } else if (hydration > 0 || errors > 0) {
        print(`${marker} ${progress} ${route}`);
      }
    });
  } finally {
    if (interactive) {
      process.stdout.write('\n');
    }
    await context.close();
    await server?.close();
  }

  return results.sort((a, b) => a.route.localeCompare(b.route));
}

function report(site: Site, results: PageResult[]) {
  const failing = results.filter((result) =>
    result.issues.some((issue) => issue.kind !== 'warning')
  );
  const warnings = results.filter(
    (result) => result.issues.length > 0 && result.issues.every((issue) => issue.kind === 'warning')
  );

  for (const result of failing) {
    print(`\n${chalk.bold(`${site.origin}${result.route}`)}`);
    for (const issue of result.issues) {
      const label =
        issue.kind === 'hydration'
          ? chalk.red('hydration')
          : issue.kind === 'error'
            ? chalk.yellow('error')
            : chalk.gray('warning');
      print(`  ${label}  ${formatMessage(issue.message)}`);
    }
  }

  for (const result of warnings) {
    print(`\n${chalk.bold(`${site.origin}${result.route}`)}`);
    for (const issue of result.issues) {
      print(`  ${chalk.gray('warning')}  ${formatMessage(issue.message)}`);
    }
  }

  const hydrationPages = results.filter((result) =>
    result.issues.some((issue) => issue.kind === 'hydration')
  );
  const errorPages = failing.filter((result) => !hydrationPages.includes(result));

  print('');
  print(
    `${site.name}: ${results.length} pages, ` +
      `${hydrationPages.length > 0 ? chalk.red(`${hydrationPages.length} with hydration errors`) : chalk.green('no hydration errors')}, ` +
      `${errorPages.length > 0 ? chalk.yellow(`${errorPages.length} with other errors`) : 'no other errors'}, ` +
      `${warnings.length} with warnings`
  );

  return failing.length;
}

async function main() {
  const sites = resolveSites(args.site!);
  const launcher = BROWSERS[args.browser as keyof typeof BROWSERS];
  if (!launcher) {
    throw new Error(`Unknown browser "${args.browser}", expected chromium, firefox or webkit`);
  }

  const concurrency = Math.max(1, Number(args.concurrency) || 8);
  const offsetMs = parseTimeOffset(args['time-offset']!);

  const timezoneLabel = args.timezone ? `, timezone: ${args.timezone}` : '';
  const offsetLabel = offsetMs ? `, clock shifted by ${args['time-offset']}` : '';
  print(
    chalk.gray(
      `browser: ${args.browser}, concurrency: ${concurrency}${timezoneLabel}${offsetLabel}`
    )
  );

  const browser = await launcher.launch();
  let failures = 0;

  try {
    for (const site of sites) {
      const results = await checkSite(browser, site, concurrency, offsetMs);
      failures += report(site, results);
    }
  } finally {
    await browser.close();
  }

  if (failures > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  process.stderr.write(`${chalk.red(error instanceof Error ? error.message : String(error))}\n`);
  process.exit(1);
});
