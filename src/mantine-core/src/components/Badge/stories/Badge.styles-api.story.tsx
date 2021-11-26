import React from 'react';
import { storiesOf } from '@storybook/react';
import { generateBorderStyles } from '@mantine/ds';
import { Group } from '../../Group';
import { Badge, BadgeProps } from '../Badge';
import { Badge as BadgeStylesApi } from '../styles.api';

const styles = generateBorderStyles(BadgeStylesApi);

const variants = ['light', 'filled', 'outline', 'dot', 'gradient'] as const;

function Wrapper(props: Partial<BadgeProps<'div'>>) {
  const items = variants.map((variant) => (
    <Badge key={variant} variant={variant} leftSection="L" rightSection="R" {...props}>
      {variant}
    </Badge>
  ));
  return (
    <Group position="center" mt="xl">
      {items}
    </Group>
  );
}

storiesOf('@mantine/core/Badge/styles-api', module).add('General usage', () => (
  <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />
));
