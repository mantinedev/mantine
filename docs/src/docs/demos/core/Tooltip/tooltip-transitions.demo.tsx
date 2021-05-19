import React from 'react';
import { Tooltip, Button, Group, AVAILABLE_TRANSITIONS } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tooltip, Button, AVAILABLE_TRANSITIONS, Group } from '@mantine/core';

function Demo() {
  const transitions = AVAILABLE_TRANSITIONS.map((transition) => (
    <Tooltip
      key={transition}
      data-mantine-composable
      label={transition}
      transition={transition}
      transitionDuration={300}
    >
      <Button variant="outline">{transition}</Button>
    </Tooltip>
  ));

  return <Group position="center">{transitions}</Group>;
}`;

export function TooltipTransitionsDemo({ hideCode = false }: { hideCode: boolean }) {
  const transitions = AVAILABLE_TRANSITIONS.map((transition) => (
    <Tooltip
      key={transition}
      data-mantine-composable
      label={transition}
      transition={transition}
      transitionDuration={300}
    >
      <Button variant="outline">{transition}</Button>
    </Tooltip>
  ));

  return (
    <CodeDemo code={hideCode ? null : code} language="tsx">
      <Group position="center">{transitions}</Group>
    </CodeDemo>
  );
}
