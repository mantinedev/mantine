import React from 'react';
import { rem } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { NpmIcon, PnpmIcon, YarnIcon } from '@mantine/ds';

const packageManagerPrefixes = new Map([
  ['yarn', 'yarn add'],
  ['npm', 'npm install'],
  ['pnpm', 'pnpm i'],
]);

function getInstallationCommand(packages: string[], type: 'yarn' | 'npm' | 'pnpm') {
  const prefix = packageManagerPrefixes.get(type);
  const packagesString = packages.join(' ');
  return `${prefix} ${packagesString}`;
}

interface PackageInstallationProps {
  packages?: string[];
}

export function PackageInstallation({ packages = [] }: PackageInstallationProps) {
  return (
    <Prism.Tabs defaultValue="yarn" styles={{ tabIcon: { marginRight: `${rem(12)} !important` } }}>
      <Prism.TabsList>
        <Prism.Tab value="yarn" icon={<YarnIcon size={16} />}>
          yarn
        </Prism.Tab>
        <Prism.Tab value="npm" icon={<NpmIcon size={16} />}>
          npm
        </Prism.Tab>
        <Prism.Tab value="pnpm" icon={<PnpmIcon size={16} />}>
          pnpm
        </Prism.Tab>
      </Prism.TabsList>

      <Prism.Panel value="yarn" language="bash">
        {getInstallationCommand(packages, 'yarn')}
      </Prism.Panel>
      <Prism.Panel value="npm" language="bash">
        {getInstallationCommand(packages, 'npm')}
      </Prism.Panel>
      <Prism.Panel value="pnpm" language="bash">
        {getInstallationCommand(packages, 'pnpm')}
      </Prism.Panel>
    </Prism.Tabs>
  );
}
