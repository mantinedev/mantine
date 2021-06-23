import React, { useState } from 'react';
import cx from 'clsx';
import { CheckIcon } from '@modulz/radix-icons';
import { Text, Title, ThemeIcon, Transition } from '@mantine/core';
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
  const [selected, setSelected] = useState('cra');
  const classes = useStyles();
  const Guide = guides[selected];

  const controls = GUIDES_DATA.map((guide) => (
    <button
      type="button"
      className={cx(classes.control, { [classes.active]: guide.id === selected })}
      key={guide.id}
      onClick={() => setSelected(guide.id)}
    >
      <Transition transition="rotate-right" mounted={selected === guide.id} duration={100}>
        {(transitionStyles) => (
          <ThemeIcon className={classes.checked} radius={0} style={transitionStyles}>
            <CheckIcon />
          </ThemeIcon>
        )}
      </Transition>
      <guide.icon />
      <Text className={classes.controlTitle}>{guide.title}</Text>
    </button>
  ));

  return (
    <div>
      <Title>And get started with</Title>
      <div className={classes.controls}>{controls}</div>
      <div className={classes.guide}>
        <Guide dependencies={dependencies} />
      </div>
    </div>
  );
}
