import React from 'react';
import { TextInput, createStyles } from '@mantine/core';
import { XCircleFillIcon } from '@primer/octicons-react';

const useStyles = createStyles((theme) => ({
  invalid: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.red[8], 0.15) : theme.colors.red[0],
  },

  icon: {
    color: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 6],
  },
}));

export function InputValidation() {
  const { classes } = useStyles();
  return (
    <TextInput
      label="Custom validation styles"
      error="Invalid email"
      value="hello!gmail.com"
      classNames={{ input: classes.invalid }}
      rightSection={<XCircleFillIcon className={classes.icon} />}
    />
  );
}
