import { forwardRef } from 'react';
import cx from 'clsx';
import { Box } from '../../../core';
import classes from '../Loader.module.css';
import { MantineLoaderComponent } from '../Loader.types';

export const Oval: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.ovalLoader, className)} {...others} ref={ref} />
));

Oval.displayName = '@mantine/core/Oval';
