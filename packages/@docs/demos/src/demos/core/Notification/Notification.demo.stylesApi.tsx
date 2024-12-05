import { IconCheck } from '@tabler/icons-react';
import { Box, Notification } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { NotificationStylesApi } from '@docs/styles-api';

const code = `
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`;

function Demo(props: any) {
  return (
    <Box maw={400} mx="auto">
      <Notification title="Please wait" loading withCloseButton={false} {...props}>
        The application is trying to reconnect to the server
      </Notification>
      <Notification mt="md" icon={<IconCheck size={18} />} title="We notify you that" {...props}>
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </Box>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: NotificationStylesApi,
  centered: true,
  dimmed: true,
  component: Demo,
  code,
};
