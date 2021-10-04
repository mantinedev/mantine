import React, { useState } from 'react';
import { Text, Title, UnstyledButton, SimpleGrid } from '@mantine/core';
import { GUIDES_DATA } from './data';
import { CraGuide } from './guides/CraGuide';
import { NextGuide } from './guides/NextGuide';
import { ViteGuide } from './guides/ViteGuide';
import { GatsbyGuide } from './guides/GatsbyGuide';
import { PreactGuide } from './guides/PreactGuide';
import useStyles from './Guides.styles';

interface GuidesProps {
  dependencies: string;
}

const guides = {
  cra: CraGuide,
  next: NextGuide,
  vite: ViteGuide,
  gatsby: GatsbyGuide,
  preact: PreactGuide,
};

export function Guides({ dependencies }: GuidesProps) {
  const initialGuide =
    typeof window !== 'undefined' ? window.location.search?.replace('?g=', '') : 'cra';
  const [selected, setSelected] = useState(initialGuide in guides ? initialGuide : 'cra');
  const { classes, cx } = useStyles();
  const Guide = guides[selected];

  const controls = GUIDES_DATA.map((guide) => (
    <UnstyledButton
      className={cx(classes.control, { [classes.active]: guide.id === selected })}
      key={guide.id}
      onClick={() => setSelected(guide.id)}
    >
      <guide.icon />
      <Text mt="md">{guide.title}</Text>
    </UnstyledButton>
  ));

  return (
    <div>
      <Title order={2}>And get started with</Title>

      <SimpleGrid
        cols={5}
        mt={30}
        breakpoints={[
          { maxWidth: 1100, cols: 3 },
          { maxWidth: 755, cols: 1 },
        ]}
      >
        {controls}
      </SimpleGrid>

      <div className={classes.guide}>
        <Guide dependencies={dependencies} />
      </div>
    </div>
  );
}
