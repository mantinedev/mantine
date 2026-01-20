import cx from 'clsx';
import { Box } from '../../../core';
import classes from '../Loader.module.css';
import { MantineLoaderComponent } from '../Loader.types';

export const Oval: MantineLoaderComponent = ({ className, ...others }) => (
  <Box component="span" className={cx(classes.ovalLoader, className)} {...others} />
);

Oval.displayName = '@mantine/core/Oval';
