import React, { useState } from 'react';
import { Text, Title, UnstyledButton, SimpleGrid, useMantineTheme } from '@mantine/core';
import { GUIDES_DATA } from './data';
import { guides, GuideProps } from './Guide';
import useStyles from './Guides.styles';

export function Guides({ dependencies }: GuideProps) {
  const theme = useMantineTheme();
  const initialGuide =
    typeof window !== 'undefined' ? window.location.search?.replace('?g=', '') : 'next';
  const [selected, setSelected] = useState(initialGuide in guides ? initialGuide : 'next');
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
      <Title
        order={2}
        mb="lg"
        style={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}
      >
        And get started with
      </Title>

      <SimpleGrid
        cols={5}
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
