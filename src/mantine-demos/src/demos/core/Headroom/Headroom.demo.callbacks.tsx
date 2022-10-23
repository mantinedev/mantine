import { Badge, Box, createStyles, Headroom, Text } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React, { useEffect, useState } from 'react';
import { Logo } from './_logo';

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({ color: theme.colors.blue[5], variant: 'light' });

  return {
    layout: { width: '100%', height: 1000, position: 'fixed', top: 0, left: 0, zIndex: 99 },
    header: { background: colors.background, padding: theme.spacing.sm },
    badge: { position: 'absolute', bottom: -30, left: 10 },
  };
});

const code = `
import { Headroom } from '@mantine/core';

function Demo() {
  const [title, setTitle] = useState('Idle');

  return (
    <Headroom
      {...props}
      styles={{ header: { background } }}
      onRelease={() => setBackground(colors.blue[8])}
      onFix={() => setBackground('transparent')}
    >
      <Group position="apart" align="center" sx={theme => ({ height: props.height, padding: theme.spacing.sm })}>
        <Logo />
        <Badge>Hide me until you need me...</Badge>
      </Group>
    </Headroom>
  );
}
`;

function Demo() {
  const {
    classes: { layout, badge, header },
  } = useStyles();
  const [title, setTitle] = useState('Idle');

  useEffect(() => {
    document.body.style.height = '2000px';
  }, []);

  return (
    <>
      <Box className={layout}>
        <Headroom
          classNames={{ header }}
          height={50}
          fixAt={200}
          onFix={() => setTitle('Fixed at 200')}
          onRelease={() => setTitle('Released')}
          onPin={() => setTitle('Pinned')}
        >
          <Logo />
          <Badge variant="filled" className={badge}>
            {title}
          </Badge>
        </Headroom>
      </Box>
      <Text component="ul">
        <Text component="li">
          <b>onPin</b> callback will be triggered everytime the header got pinned
        </Text>
        <Text component="li">
          <b>onFix</b> callback will be triggered everytime the header got fixed
        </Text>
        <Text component="li">
          <b>onRelease</b> callback will be triggered everytime the header got released from either
          being fixed or pinned
        </Text>
      </Text>
    </>
  );
}

export const callbacks: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
