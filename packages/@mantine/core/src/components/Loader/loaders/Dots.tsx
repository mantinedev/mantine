import cx from 'clsx';
import { Box } from '../../../core';
import { MantineLoaderComponent } from '../Loader.types';
import classes from '../Loader.module.css';

export const Dots: MantineLoaderComponent = ({ className, ...others }) => (
  <Box component="span" className={cx(classes.dotsLoader, className)} {...others}>
    <span className={classes.dot} />
    <span className={classes.dot} />
    <span className={classes.dot} />
  </Box>
);

Dots.displayName = '@mantine/core/Dots';
