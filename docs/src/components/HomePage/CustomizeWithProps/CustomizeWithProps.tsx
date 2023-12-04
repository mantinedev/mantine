import React from 'react';
import { Box } from '@mantine/core';
import { TimelineDemos } from '@docs/demos';
import { Demo } from '@mantinex/demo';
import { PageSection } from '../PageSection/PageSection';
import classes from './CustomizeWithProps.module.css';

export function CustomizeWithProps() {
  return (
    <PageSection
      title="Customize components"
      description="Every Mantine component supports visual customizations with props – you can quickly prototype and experiment by modifying component props:"
    >
      <Box className={classes.wrapper}>
        <Demo data={TimelineDemos.configurator} />
      </Box>
    </PageSection>
  );
}
