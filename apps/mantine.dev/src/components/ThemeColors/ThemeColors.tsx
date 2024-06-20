import { DEFAULT_THEME } from '@mantine/core';
import { ColorsGroup } from './ColorsGroup/ColorsGroup';
import classes from './ThemeColors.module.css';

export function ThemeColors() {
  const groups = Object.keys(DEFAULT_THEME.colors).map((group) => (
    <ColorsGroup group={group} key={group} />
  ));

  return <div className={classes.root}>{groups}</div>;
}
