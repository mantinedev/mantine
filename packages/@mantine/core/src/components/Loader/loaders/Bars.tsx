import cx from 'clsx';
import { Box } from '../../../core';
import { MantineLoaderComponent } from '../Loader.types';
import classes from '../Loader.module.css';

export const Bars: MantineLoaderComponent = ({ className, ...others }) => (
  <Box component="span" className={cx(classes.barsLoader, className)} {...others}>
    <span className={classes.bar} />
    <span className={classes.bar} />
    <span className={classes.bar} />
  </Box>
);

Bars.displayName = '@mantine/core/Bars';
