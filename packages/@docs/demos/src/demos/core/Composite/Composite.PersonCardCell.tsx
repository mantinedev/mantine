import React, { memo, useId } from 'react';
import {
  Card,
  Checkbox,
  CompositeChildProps,
  Image,
  Overlay,
  Paper,
  Stack,
  Text,
  useCompositeContext,
} from '@mantine/core';
import { PersonProfile } from './_data';
import classes from './Composite.grid.module.css';

export const PersonCardCell = memo(
  ({ item, selected, disabled, ...rest }: CompositeChildProps<PersonProfile>) => {
    const ctx = useCompositeContext();

    const labelId = useId();
    const descId = useId();

    return (
      <Paper
        shadow="sm"
        radius="md"
        {...rest}
        aria-selected={selected}
        className={classes.gridcellCard}
        aria-labelledby={labelId}
        aria-describedby={descId}
      >
        <Card>
          <Card.Section>
            <Image src={item.image} height={200} alt="" role="presentation" fit="cover" />
          </Card.Section>

          <Stack gap="0rem" my="0.25rem">
            <Text fw={500} truncate id={labelId}>
              {item.fullname}
            </Text>
            <Text size="xs" truncate>
              {item.title}
            </Text>
          </Stack>

          <Text size="sm" c="dimmed" h="2.5rem" lineClamp={2} id={descId}>
            {item.bio}
          </Text>

          <Overlay display={ctx.selectionMode ? 'block' : undefined}>
            <Checkbox
              tabIndex={-1}
              checked={selected}
              disabled={disabled}
              readOnly
              aria-hidden
              size="md"
              radius={ctx.multiple ? 'sm' : 'lg'}
            />
          </Overlay>
        </Card>
      </Paper>
    );
  }
);
