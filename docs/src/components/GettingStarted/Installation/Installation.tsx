import React, { useState, useEffect } from 'react';
import { Title } from '@mantine/core';
import { PACKAGES_DATA } from './data';
import { PackageItem } from './PackageItem/PackageItem';
import useStyles from './Installation.styles';

interface InstallationProps {
  setDependencies(dependencies: string): void;
}

export function Installation({ setDependencies }: InstallationProps) {
  const { classes } = useStyles();
  const [values, setValues] = useState({
    '@mantine/hooks': true,
    '@mantine/core': true,
    '@mantine/dates': false,
    '@mantine/notifications': false,
    '@mantine/prism': false,
  });

  const items = PACKAGES_DATA.map((item) => (
    <PackageItem
      key={item.package}
      title={item.package}
      description={item.description}
      checked={values[item.package]}
      onChange={() => setValues((c) => ({ ...c, [item.package]: !c[item.package] }))}
    />
  ));

  const dependencies = Array.from(
    new Set(
      PACKAGES_DATA.reduce((acc, item) => {
        if (values[item.package]) {
          acc.push(...item.dependencies);
        }

        return acc;
      }, [])
    )
  )
    .sort()
    .reverse();

  useEffect(() => {
    setDependencies(dependencies.join(' '));
  }, [dependencies]);

  return (
    <div className={classes.wrapper}>
      <Title>Choose packages</Title>
      <div className={classes.controls}>{items}</div>
    </div>
  );
}
