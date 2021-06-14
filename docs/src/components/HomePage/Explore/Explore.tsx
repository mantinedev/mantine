import React from 'react';
import { Container } from '@mantine/core';
import { useLocalStorageValue } from '@mantine/hooks';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Tabs } from './Tabs/Tabs';
import data from './data';
import demos from './demos';
import useStyles from './Explore.styles';

export function Explore() {
  const classes = useStyles();
  const [active, setActive] = useLocalStorageValue<string>({
    key: '@mantine/home-tabs',
    defaultValue: 'core',
  });
  const Demo = active in demos ? demos[active] : () => null;

  return (
    <div className={classes.wrapper}>
      <Container size={1100}>
        <SectionTitle>Explore examples</SectionTitle>
        <div className={classes.inner}>
          <Tabs
            className={classes.tabs}
            data={data}
            active={active}
            onChange={(value) => setActive(value)}
          />
          <div className={classes.main}>
            <Demo />
          </div>
        </div>
      </Container>
    </div>
  );
}
