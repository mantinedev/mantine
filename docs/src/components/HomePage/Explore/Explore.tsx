import React, { useState } from 'react';
import { Container } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Tabs } from './Tabs/Tabs';
import data from './data';
import useStyles from './Explore.styles';

export function Explore() {
  const classes = useStyles();
  const [active, setActive] = useState('core');

  return (
    <div className={classes.wrapper}>
      <Container size={1100}>
        <SectionTitle>Explore examples</SectionTitle>
        <div className={classes.inner}>
          <Tabs className={classes.tabs} data={data} active={active} onChange={setActive} />
          <div className={classes.main}>Main</div>
        </div>
      </Container>
    </div>
  );
}
