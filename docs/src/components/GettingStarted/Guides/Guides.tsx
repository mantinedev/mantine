import React, { useState } from 'react';
import { Text, Title, UnstyledButton, Group } from '@mantine/core';
import { GUIDES_DATA } from './data';
import { guides, GuideProps } from './Guide';
import useStyles from './Guides.styles';

export function Guides({ dependencies }: GuideProps) {
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
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
      >
        And get started with
      </Title>

      <Group>{controls}</Group>

      <div className={classes.guide}>
        <Guide dependencies={dependencies} />
      </div>
    </div>
  );
}
