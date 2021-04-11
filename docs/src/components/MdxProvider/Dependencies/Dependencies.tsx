import React from 'react';
import { Text, Badge } from '@mantine/core';
import { BarChartIcon } from '@modulz/radix-icons';
import DataTable from '../DataTable/DataTable';
import DocsSection from '../../DocsSection/DocsSection';
import NpmIcon from '../PageHeader/NpmIcon';
import useStyles from './Dependencies.styles';

interface DependenciesProps {
  packageName: string;
  dependencies: {
    type: 'peer' | 'dependency';
    name: string;
    why?: string;
  }[];
}

export function Dependencies({ dependencies, packageName }: DependenciesProps) {
  const classes = useStyles();

  const items = dependencies.map((dependency) => [
    <Text
      component="a"
      variant="link"
      href={`https://npmjs.com/package/${dependency.name}`}
      size="sm"
    >
      {dependency.name}
    </Text>,
    <Badge
      title={dependency.type === 'peer' ? 'Requires installation' : 'Installed automatically'}
      color={dependency.type === 'peer' ? 'blue' : 'gray'}
    >
      {dependency.type === 'peer' ? 'peer dependency' : 'dependency'}
    </Badge>,
    <Text size="sm">{dependency.why}</Text>,
  ]);

  const head = ['Dependency', 'Type'];
  if (dependencies.some((dependency) => dependency.why)) {
    head.push('Why');
  }

  const packageJson = `https://github.com/mantinedev/mantine/blob/master/src/${packageName
    .replace('@', '')
    .replace('/', '-')}/package.json`;

  const bundlePhobia = `https://bundlephobia.com/result?p=${packageName}`;

  return (
    <DocsSection>
      <div className={classes.dependencies}>
        <a
          className={classes.dependency}
          href="https://reactjs.org/blog/2019/02/06/react-v16.8.0.html"
        >
          <Text className={classes.dependencyTitle}>
            React
            <Text component="span" weight={700} color="cyan">
              {' '}
              16.8.0
            </Text>
          </Text>
          <Text size="xs" color="gray">
            In react 16.8.0 hooks were introduced, you need at least this version to use @mantine
            packages
          </Text>
        </a>

        <a href={packageJson} className={classes.dependency}>
          <Text className={classes.dependencyTitle}>
            <NpmIcon style={{ verticalAlign: '-2px', marginRight: 3 }} /> package.json
          </Text>
          <Text size="xs" color="gray">
            See all {packageName} dependencies in package.json on Github
          </Text>
        </a>

        <a href={bundlePhobia} className={classes.dependency}>
          <Text className={classes.dependencyTitle}>
            <BarChartIcon style={{ verticalAlign: '-1px', marginRight: 3 }} /> BundlePhobia
          </Text>
          <Text size="xs" color="gray">
            Explore {packageName} bundle size and dependencies contribution on BundlePhobia
          </Text>
        </a>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: 500 }}>
          <DataTable data={items} head={head} />
        </div>
      </div>
    </DocsSection>
  );
}
