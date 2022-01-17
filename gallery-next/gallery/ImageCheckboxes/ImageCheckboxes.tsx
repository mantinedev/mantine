import React from 'react';
import { UnstyledButton, Checkbox, Text, Image, SimpleGrid, createStyles } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import icons from './icons';

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    transition: 'background-color 150ms ease, border-color 150ms ease',
    border: `1px solid ${
      checked
        ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 9 : 6]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.3)
        : theme.colors[theme.primaryColor][0]
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[8]
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  description: string;
  image: string;
}

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  image,
  ...others
}: ImageCheckboxProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
    rule: (val) => typeof val === 'boolean',
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      className={cx(classes.button, className)}
    >
      <Image src={image} alt={title} width={40} />

      <div className={classes.body}>
        <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
          {description}
        </Text>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
    </UnstyledButton>
  );
}

const mockdata = [
  { description: 'Sun and sea', title: 'Beach vacation', image: icons.sea },
  { description: 'Sightseeing', title: 'City trips', image: icons.city },
  { description: 'Mountains', title: 'Hiking vacation', image: icons.mountain },
  { description: 'Snow and ice', title: 'Winter vacation', image: icons.winter },
];

export function ImageCheckboxes() {
  const items = mockdata.map((item) => <ImageCheckbox {...item} key={item.title} />);
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}
