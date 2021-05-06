import React, { useState } from 'react';
import { Burger, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

function BurgerWrapper(props: React.ComponentPropsWithoutRef<typeof Burger>) {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Burger
      title={title}
      aria-label={title}
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      {...props}
    />
  );
}

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].reverse().map((size) => (
    <BurgerWrapper key={size} size={size} data-mantine-composable {...props}>
      {size} size
    </BurgerWrapper>
  ));

export function BurgerSizesDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">{getSizes()}</ElementsGroup>
    </CodeDemo>
  );
}
