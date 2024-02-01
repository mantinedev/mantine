import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { people, PersonProfile } from './_data';
import {
  ConfiguratorDemoGrid,
  DemoCompositeComponentProps,
} from './Composite.ConfiguratorDemoGrid';
import { ImageCell } from './Composite.ImageCell';

function Demo(props: DemoCompositeComponentProps<PersonProfile>) {
  return (
    <ConfiguratorDemoGrid
      {...props}
      items={people}
      renderItem={(item, { selected, disabled }, itemProps) => (
        <ImageCell item={item} selected={selected} disabled={disabled} {...itemProps} />
      )}
    />
  );
}

const cellCode = `
function Demo(props: DemoCompositeComponentProps) {
  return (
    <ConfiguratorDemoGrid{{props}}
      renderItem={(item, { selected, disabled }, itemProps) => (
        <ImageCell item={item} selected={selected} disabled={disabled} {...itemProps} />
      )}
    />
  );
}
`;

export const imageGrid: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code: cellCode,
  centered: true,
  withPadding: false,
  controls: [
    { prop: 'loop', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'moveToNextColumn', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'moveToNextRow', type: 'boolean', initialValue: false, libraryValue: false },

    { prop: 'multiple', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'followFocus', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'trackSelectioMode', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
