import React from 'react';
import { Box, rem } from '@mantine/core';
import { IconProps } from './types';
import classes from './icons.module.css';

export function GatsbyIcon({ size = 28, ...others }: IconProps) {
  return (
    <Box
      __vars={{ '--icon-size': rem(size) }}
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256"
      className={classes.icon}
      {...others}
    >
      <rect width="250" height="250" x="3" y="3" fill="#fff" rx="125" />
      <path
        fill="#744C9E"
        d="M128 0C57.308 0 0 57.307 0 128s57.308 128 128 128c70.693 0 128-57.307 128-128S198.693 0 128 0zM27.504 129.334l99.161 99.162c-54.45-.71-98.452-44.711-99.161-99.162zm122.992 96.649L30.016 105.504C40.234 60.824 80.223 27.487 128 27.487c33.397 0 62.985 16.293 81.263 41.36l-13.917 12.279C180.52 59.864 155.887 45.949 128 45.949c-35.505 0-65.74 22.552-77.169 54.113L155.94 205.169c25.525-9.243 45.156-30.79 51.731-57.477h-43.567V128h64.41c0 47.778-33.336 87.767-78.017 97.983z"
      />
    </Box>
  );
}
