import React from 'react';
import { Box, rem } from '@mantine/core';
import { IconProps } from './types';
import classes from './icons.module.css';

export function T3Icon({ size = 40, ...others }: IconProps) {
  return (
    <Box
      component="svg"
      __vars={{ '--icon-size': rem(size) }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 512 128"
      className={classes.nextIcon}
      data-large
      {...others}
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M165.735 25.0701L188.947 0.972412H0.465994V25.0701H165.735Z" fill="black"/>
        <path d="M163.981 96.3239L254.022 3.68314L221.206 3.68295L145.617 80.7609L163.981 96.3239Z" fill="black"/>
        <path d="M233.658 131.418C233.658 155.075 214.48 174.254 190.823 174.254C171.715 174.254 155.513 161.738 150 144.439L146.625 133.848L127.329 153.143L129.092 157.336C139.215 181.421 163.034 198.354 190.823 198.354C227.791 198.354 257.759 168.386 257.759 131.418C257.759 106.937 244.399 85.7396 224.956 74.0905L220.395 71.3582L202.727 89.2528L210.788 93.5083C224.403 100.696 233.658 114.981 233.658 131.418Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M88.2625 192.669L88.2626 45.6459H64.1648L64.1648 192.669H88.2625Z" fill="black"/>
    </Box>
  );
}
