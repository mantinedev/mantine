import React from 'react';
import { UnstyledButton, Checkbox, Text, createStyles } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  button: {
    display: 'flex',
    width: '100%',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.lg,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
    },
  },

  checkbox: {
    marginRight: theme.spacing.xl,
  },

  title: {
    marginBottom: 7,
    lineHeight: 1,
  },
}));

interface CheckboxCardProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function CheckboxCard({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  ...others
}: CheckboxCardProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CheckboxCardProps>) {
  const { classes, cx } = useStyles();

  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
    rule: (val) => typeof val === 'boolean',
  });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      className={cx(classes.button, 'hello', className)}
    >
      <Checkbox
        className={classes.checkbox}
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
      />
      <div>
        <Text weight={500} className={classes.title}>
          {title}
        </Text>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </div>
    </UnstyledButton>
  );
}
