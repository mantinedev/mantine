import path from 'path';
import fs from 'fs-extra';
import gzipSize from 'gzip-size';

const REPO_ROOT = path.join(__dirname, '../');

const PACKAGES = [
  'mantine-hooks',
  'mantine-core',
  'mantine-notifications',
  'mantine-tag-picker',
  'mantine-prism',
  'mantine-dates',
];

function truncateNumber(number: number) {
  return parseFloat(number.toFixed(2));
}

function getPackageSize(packageName: string) {
  const libPath = path.join(REPO_ROOT, 'src', packageName, 'lib/index.umd.js');

  if (!fs.existsSync(libPath)) {
    return { size: 0, gzip: 0 };
  }

  const file = fs.readFileSync(libPath).toString('utf-8');
  const size = fs.statSync(libPath).size / 1024;

  return {
    size: truncateNumber(size),
    gzip: truncateNumber(gzipSize.sync(file) / 1024),
  };
}

const results = PACKAGES.reduce((acc, p) => {
  acc[p] = getPackageSize(p);
  return acc;
}, {});

fs.writeJSONSync(path.join(REPO_ROOT, 'docs/.docgen/sizes.json'), results, { spaces: 2 });
