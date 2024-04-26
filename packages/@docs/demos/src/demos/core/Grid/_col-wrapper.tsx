import { Grid, GridColProps } from '@mantine/core';
import classes from './_col-wrapper.module.css';

export function ColWrapper({ children, ...others }: GridColProps) {
  return (
    <Grid.Col {...others}>
      <div className={classes.col}>
        <div className={classes.label}>{children}</div>
      </div>
    </Grid.Col>
  );
}
