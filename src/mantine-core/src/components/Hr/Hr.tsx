import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import { useTheme } from 'react-jss';
import { MantineTheme } from '../../types';
import useStyles from './Hr.styles';

interface HrProps extends DefaultProps, React.HTMLProps<HTMLHRElement> {
  variant?: 'solid' | 'dashed' | 'dotted';
}

export default function Hr({ className, variant = 'dashed', style, ...others }: HrProps) {
  const classes = useStyles({ theme: useTheme<MantineTheme>() });

  return (
    <hr
      className={cx(classes.hr, className)}
      style={{ ...style, borderTopStyle: variant }}
      {...others}
    />
  );
}

Hr.displayName = '@mantine/core/Hr';
