import { ScrollArea, Text, Title } from '@mantine/core';
import classes from './EditorSidebar.module.css';

export function EditorSidebar() {
  return (
    <ScrollArea className={classes.root}>
      <div className={classes.inner}>
        <Title order={2} size="h4" className={classes.title}>
          Theme
        </Title>
        <Text size="sm" mt={4}>
          Colors, spacing, typography and component styles will be edited here.
        </Text>
      </div>
    </ScrollArea>
  );
}
