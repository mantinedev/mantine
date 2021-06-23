import React, { useState } from 'react';
import { Title, Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { PACKAGES_DATA } from './data';
import { PackageItem } from './PackageItem/PackageItem';
import useStyles from './Installation.styles';

export function Installation() {
  const classes = useStyles();
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

  const installation = dependencies.join(' ');
  const nothingToInstall = "Good job, you've deselected all packages, nothing to install!";

  return (
    <div className={classes.wrapper}>
      <Title>Installation</Title>
      <Text style={{ marginTop: 5 }}>Choose packages that you will need in your application:</Text>
      <div className={classes.controls}>{items}</div>

      <div className={classes.installation}>
        <Text style={{ marginBottom: 5 }}>Install with yarn</Text>
        <Prism language="bash">
          {dependencies.length > 0 ? `yarn add ${installation}` : nothingToInstall}
        </Prism>
      </div>

      <div className={classes.installation}>
        <Text style={{ marginBottom: 5 }}>Install with npm</Text>
        <Prism language="bash">
          {dependencies.length > 0 ? `npm install ${installation}` : nothingToInstall}
        </Prism>
      </div>
    </div>
  );
}
