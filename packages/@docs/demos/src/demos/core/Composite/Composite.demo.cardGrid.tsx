import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { people, PersonProfile } from './_data';
import {
  ConfiguratorDemoGrid,
  DemoCompositeComponentProps,
} from './Composite.ConfiguratorDemoGrid';
import { PersonCardCell } from './Composite.PersonCardCell';

const gridCode = `
export function LayoutGrid<T>({
  multiple,
  followFocus,
  trackSelectioMode,
  loop,
  moveToNextColumn,
  moveToNextRow,
  renderItem,
  items,
  ...rest
}: DemoCompositeComponentProps<T>) {
  return (
    <Composite
      {...rest}
      role="grid"
      navigableChildRole="gridcell"
      items={items}
      focusOptions={{ loop, moveToNextRow, moveToNextColumn }}
      selectionOptions={{ multiple, followFocus, trackSelectioMode }}
      renderRoot={({ children, ...rootProps }) => (
        <div {...rootProps} className={classes.grid}>
          <div role="row" className={classes.row}>
            {children}
          </div>
        </div>
      )}
      renderItem={renderItem}
    />
  );
}
`;

const cssCode = `
.grid {
  border-radius: var(--mantine-radius-default);
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;

  @mixin light {
    background: var(--mantine-color-gray-0);
  }
  @mixin dark {
    background: var(--mantine-color-dark-7);
  }

  &:focus-visible {
    outline: none;
    border-color: transparent;
  }
}
.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 0.5rem;
}
.gridcellCard {
  & {
    @mixin light {
      background: var(--mantine-color-gray-2);
    }
    @mixin dark {
      background: var(--mantine-color-dark-9);
    }
  }

  &:focus-visible {
    outline: rem(2px) solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }

  & > div {
    transition: transform 100ms ease-in-out;
  }

  &[aria-selected='true'] > div {
    transform: scale(0.85);
  }

  &:not([aria-selected='true']) :global(.mantine-Overlay-root) {
    display: none;
  }

  & :global(.mantine-Overlay-root) {
    --overlay-bg: linear-gradient(170deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%);
    --overlay-z-index: 200;
    padding: calc(1rem * var(--mantine-scale));
  }

  &:hover :global(.mantine-Overlay-root) {
    display: block;
  }

  &[aria-disabled='true'] :global(.mantine-Overlay-root) {
    display: block;
    padding: calc(1rem * var(--mantine-scale));
    --overlay-z-index: 200;

    @mixin light {
      --overlay-bg: rgba(233, 236, 239, 0.75);
    }
    @mixin dark {
      --overlay-bg: rgba(36, 36, 36, 0.75);
    }
  }
}
`;

const demoCode = `
function Demo(props: DemoCompositeComponentProps) {
  return (
    <LayoutGrid
      {...props}
      multiple
      trackSelectioMode
      renderItem={(item, { selected, disabled }, itemProps) => (
        <PersonCardCell item={item} selected={selected} disabled={disabled} {...itemProps} />
      )}
    />
  );
}
`;

const cellCode = `
export const PersonGridCell = memo(
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
        className={classes.gridcell}
        aria-labelledby={labelId}
        aria-describedby={descId}
      >
        <Card>
          <Card.Section>
            <Image src={item.image} height={300} alt="" role="presentation" fit="cover" />
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
`;

function Demo(props: DemoCompositeComponentProps<PersonProfile>) {
  return (
    <ConfiguratorDemoGrid
      {...props}
      multiple
      trackSelectioMode
      items={people}
      renderItem={(item, { selected, disabled }, itemProps) => (
        <PersonCardCell item={item} selected={selected} disabled={disabled} {...itemProps} />
      )}
    />
  );
}

export const cardGrid: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    {
      code: demoCode,
      language: 'tsx',
      fileName: '...demo.cardGrid.tsx',
    },
    {
      code: gridCode,
      language: 'tsx',
      fileName: '...LayoutGrid.tsx',
    },
    {
      code: cellCode,
      language: 'tsx',
      fileName: '...PersonCardCell.tsx',
    },
    {
      code: cssCode,
      language: 'scss',
      fileName: '...grid.module.css',
    },
  ],
  centered: true,
  withPadding: false,
};
