import React, { useState } from 'react';
import cx from 'clsx';
import { CheckIcon } from '@modulz/radix-icons';
import { Text, Title, ThemeIcon, Transition } from '@mantine/core';
import { GUIDES_DATA } from './data';
import useStyles from './Guides.styles';

export function Guides() {
  const [selected, setSelected] = useState('cra');
  const classes = useStyles();

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
      <Title>Get started with</Title>
      <div className={classes.controls}>{controls}</div>
    </div>
  );
}
