import { forwardRef } from 'react';
import cx from 'clsx';
import { Box } from '../../../core';
import { MantineLoaderComponent } from '../Loader.types';
import classes from '../Loader.module.css';

export const Oval: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.ovalLoader, className)} {...others} ref={ref} />
));

Oval.displayName = '@mantine/core/Oval';
