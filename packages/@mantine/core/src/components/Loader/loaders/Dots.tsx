import { forwardRef } from 'react';
import cx from 'clsx';
import { Box } from '../../../core';
import { MantineLoaderComponent } from '../Loader.types';
import classes from '../Loader.module.css';

export const Dots: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.dotsLoader, className)} {...others} ref={ref}>
    <span className={classes.dot} />
    <span className={classes.dot} />
    <span className={classes.dot} />
  </Box>
));

Dots.displayName = '@mantine/core/Dots';
