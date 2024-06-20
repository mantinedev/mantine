import { IconHeart } from '@tabler/icons-react';
import { Alert } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { AlertStylesApi } from '@docs/styles-api';

const code = `
import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  const icon = <IconHeart />;

  return (
    <Alert title="Alert title" icon={icon} withCloseButton{{props}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
      cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
      nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
    </Alert>
  );
}
`;

function Demo(props: any) {
  return (
    <Alert title="Alert title" icon={<IconHeart />} withCloseButton {...props}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
      cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
      nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
    </Alert>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: AlertStylesApi,
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
};
