import fs from 'fs-extra';
import { loadDemoCode } from '../utils/demo-loader';
import { getPath } from '../utils/get-path';

const DEMOS_PATH = getPath('packages/@docs/demos/src/demos');

function getVersion(): string {
  const version = process.argv[2];
  if (!version) {
    // eslint-disable-next-line no-console
    console.error('Usage: tsx scripts/docs/generate-changelog.ts <version>');
    // eslint-disable-next-line no-console
    console.error('Example: tsx scripts/docs/generate-changelog.ts 9-0-0');
    process.exit(1);
  }
  return version;
}

function versionToDotted(version: string): string {
  return version.replace(/-/g, '.');
}

function stripImportsAndExports(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let preamble = true;
  let skipMultiLineImport = false;

  for (const line of lines) {
    if (!preamble) {
      result.push(line);
      continue;
    }

    if (skipMultiLineImport) {
      if (line.includes('}') && line.includes('from')) {
        skipMultiLineImport = false;
      }
      continue;
    }

    if (line.trim().startsWith('import ') || line.trim().startsWith('import{')) {
      if (line.includes('{') && !line.includes('}')) {
        skipMultiLineImport = true;
      }
      continue;
    }

    if (line.trim().startsWith('export default Layout')) {
      continue;
    }

    if (line.trim() === '') {
      result.push(line);
      continue;
    }

    preamble = false;
    result.push(line);
  }

  return result.join('\n');
}

function removeSponsorButton(content: string): string {
  return content.replace(/<SponsorButton\s*\/>/g, '');
}

async function replaceDemoTags(content: string): Promise<string> {
  const demoRegex = /<Demo\s+data=\{([^}]+)\}\s*(?:[^/]*)?\/>/g;
  let result = content;
  const matches = [...content.matchAll(demoRegex)];

  for (const match of matches) {
    const fullMatch = match[0];
    const demoRef = match[1];

    const code = await loadDemoCode(demoRef, DEMOS_PATH);

    if (code) {
      result = result.replace(fullMatch, `\`\`\`tsx\n${code}\n\`\`\``);
    } else {
      result = result.replace(fullMatch, '');
    }
  }

  return result;
}

function convertRelativeLinks(content: string): string {
  return content.replace(/\]\(\//g, '](https://mantine.dev/');
}

function cleanupExtraBlankLines(content: string): string {
  return content.replace(/\n{3,}/g, '\n\n');
}

async function main() {
  const version = getVersion();
  const dottedVersion = versionToDotted(version);

  const mdxPath = getPath(`apps/mantine.dev/src/pages/changelog/${version}.mdx`);
  if (!(await fs.pathExists(mdxPath))) {
    // eslint-disable-next-line no-console
    console.error(`MDX file not found: ${mdxPath}`);
    process.exit(1);
  }

  let content = await fs.readFile(mdxPath, 'utf-8');

  content = stripImportsAndExports(content);
  content = removeSponsorButton(content);
  content = await replaceDemoTags(content);
  content = convertRelativeLinks(content);
  content = cleanupExtraBlankLines(content);
  content = content.trim();

  const header = `[View changelog with demos on mantine.dev website](https://mantine.dev/changelog/${version})`;
  const output = `${header}\n\n${content}\n`;

  const changelogDir = getPath('.changelog');
  await fs.ensureDir(changelogDir);

  const outputPath = getPath(`.changelog/${dottedVersion}.md`);
  await fs.writeFile(outputPath, output, 'utf-8');

  // eslint-disable-next-line no-console
  console.log(`Generated changelog: ${outputPath}`);
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Failed to generate changelog.', error);
  process.exit(1);
});
