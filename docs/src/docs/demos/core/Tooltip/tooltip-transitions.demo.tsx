import React from 'react';
import { Tooltip, Button, ElementsGroup, AVAILABLE_TRANSITIONS } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tooltip, Button, AVAILABLE_TRANSITIONS, ElementsGroup } from '@mantine/core';

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

  return <ElementsGroup position="center">{transitions}</ElementsGroup>;
}`;

export function TooltipTransitionsDemo() {
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
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">{transitions}</ElementsGroup>
    </CodeDemo>
  );
}
