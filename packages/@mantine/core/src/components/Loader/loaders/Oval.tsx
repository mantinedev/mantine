import cx from 'clsx';
import { Box } from '../../../core';
import { MantineLoaderComponent } from '../Loader.types';
import classes from '../Loader.module.css';

export const Oval: MantineLoaderComponent = ({ className, ...others }) => (
  <Box component="span" className={cx(classes.ovalLoader, className)} {...others} />
);

Oval.displayName = '@mantine/core/Oval';
