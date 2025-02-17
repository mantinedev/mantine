import { SimpleGrid, Text } from '@mantine/core';
import { DemoArea, DemoAreaProps } from '../DemoArea';
import classes from './DemoColumns.module.css';

export interface DemoColumnsProps extends DemoAreaProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  withGrid?: boolean;
  controls: React.ReactNode;
}

export function DemoColumns({
  children,
  withPadding,
  centered,
  maxWidth,
  minHeight,
  title,
  description,
  controls,
  dimmed,
  striped,
  overflow,
  withGrid,
}: DemoColumnsProps) {
  return (
    <div className={classes.root}>
      <div className={classes.columns}>
        <DemoArea
          withPadding={withPadding}
          maxWidth={maxWidth}
          minHeight={minHeight}
          centered={centered}
          dimmed={dimmed}
          striped={striped}
          overflow={overflow}
        >
          {children}
        </DemoArea>

        <div className={classes.controls}>
          {title && (
            <div className={classes.header}>
              <Text fw={500} fz="sm" mb={5}>
                {title}
              </Text>
              {description && (
                <Text c="dimmed" fz={11} lh={1.45}>
                  {description}
                </Text>
              )}
            </div>
          )}

          {withGrid ? (
            <SimpleGrid type="container" cols={{ base: 1, '480px': 2, '780px': 4 }} p={8}>
              {controls}
            </SimpleGrid>
          ) : (
            controls
          )}
        </div>
      </div>
    </div>
  );
}
