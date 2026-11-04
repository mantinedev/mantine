import { Mentions } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { MentionsStylesApi } from '@docs/styles-api';

const code = `
import { Mentions } from '@mantine/core';

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
];

function Demo() {
  return (
    <Mentions
     {{props}}
      label="Mentions"
      description="Description"
      defaultValue="Ping @[Walter White](walter)"
      placeholder="Type @ to mention someone"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}
`;

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
];

function Demo(props: any) {
  return (
    <Mentions
      {...props}
      label="Mentions"
      description="Description"
      defaultValue="Ping @[Walter White](walter)"
      placeholder="Type @ to mention someone"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: MentionsStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
