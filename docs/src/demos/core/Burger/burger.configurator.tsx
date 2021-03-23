import React, { useState } from 'react';
import { Burger, ElementsGroup } from '@mantine/core';
import Configurator from '../../../components/Configurator/Configurator';

function BurgerWrapper(props: React.ComponentPropsWithoutRef<typeof Burger>) {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Open navigation' : 'Close navigation';

  return (
    <ElementsGroup position="center">
      <Burger
        title={title}
        aria-label={title}
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        {...props}
      />
    </ElementsGroup>
  );
}

const codeTemplate = (props: string) => `<Burger${props} />`;

export function BurgerConfigurator() {
  return (
    <Configurator
      component={BurgerWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
      ]}
    />
  );
}
