import { InfoIcon } from '@phosphor-icons/react';
import { Alert } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { staticVariantsControl } from '../../../shared';

const code = `
import { Alert } from '@mantine/core';
import { InfoIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <InfoIcon />;
  return (
    <Alert{{props}} icon={icon}>
      {{children}}
    </Alert>
  );
}
`;

function Wrapper(props: any) {
  return <Alert icon={<InfoIcon />} {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 400,
  controls: [
    { ...(staticVariantsControl as any), initialValue: 'light' },
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
    { type: 'boolean', prop: 'withCloseButton', initialValue: false, libraryValue: false },
    { type: 'string', prop: 'title', initialValue: 'Alert title', libraryValue: null },
    {
      type: 'string',
      prop: 'children',
      initialValue:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. AtIcon officiis, quae tempore necessitatibus placeat saepe.',
      libraryValue: null,
    },
  ],
};
