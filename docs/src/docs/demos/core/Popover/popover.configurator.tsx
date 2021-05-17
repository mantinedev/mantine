import React from 'react';
import { Popover, Badge, Image, Text } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function PopoverWrapper(props: React.ComponentPropsWithoutRef<typeof Popover>) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: 200 }}>
      <Popover
        opened
        position="top"
        placement="center"
        withArrow
        noFocusTrap
        noEscape
        bodyStyle={{ width: 260, pointerEvents: 'none' }}
        transition="slide-up"
        target={<Badge>Badge with popover</Badge>}
        {...props}
      >
        <div style={{ display: 'flex' }}>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/e630956424828b4103372d781cc64f0a54eebb33/docs/src/images/favicon.svg"
            width={30}
            height={30}
            style={{ minWidth: 30, marginRight: 15 }}
          />
          <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
        </div>
      </Popover>
    </div>
  );
}

const codeTemplate = (props: string) => `<Popover
  opened
  target={<Badge>Badge with popover</Badge>}
 ${props}
>
  {/* children */}
</Popover>`;

export function PopoverConfigurator() {
  return (
    <Configurator
      component={PopoverWrapper}
      codeTemplate={codeTemplate}
      multiline
      props={[
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'shadow', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
      ]}
    />
  );
}
