/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['dev', 'prod'],
  source: ['package.json', 'packages/**/package.json', 'apps/*/package.json'],
  sortFirst: [
    'name',
    'version',
    'description',
    'homepage',
    'packageManager',
    'license',
    'private',
    'author',
    'keywords',
    'sideEffects',
    'main',
    'module',
    'types',
    'exports',
    'repository',
    'engines',
    'workspaces',
    'scripts',
    'peerDependencies',
    'dependencies',
    'devDependencies',
  ],
  sortAz: [
    'contributors',
    'dependencies',
    'devDependencies',
    'keywords',
    'peerDependencies',
    'resolutions',
  ],
  versionGroups: [
    {
      packages: ['docs'],
      dependencies: ['@mantine/store'],
      isIgnored: true,
    },
  ],
};

module.exports = config;
