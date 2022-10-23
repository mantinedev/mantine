import { Box, createStyles, Headroom, HeadroomProps, Text } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React, { useEffect } from 'react';
import { Logo } from './_logo';

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({ color: theme.colors.blue[5], variant: 'light' });

  return {
    layout: { width: '100%', height: 1000, position: 'fixed', top: 0, left: 0, zIndex: 99 },
    header: { background: colors.background, padding: theme.spacing.sm },
  };
});

function Wrapper(props: HeadroomProps) {
  const {
    classes: { layout, header },
  } = useStyles();

  useEffect(() => {
    document.body.style.height = '2000px';
  }, []);

  return (
    <>
      <Box className={layout}>
        <Headroom classNames={{ header }} {...props}>
          <Logo />
        </Headroom>
      </Box>
      <Text component="ul">
        <Text component="li">
          The header will be fixed while the scroll value is under the <b>fixAt </b>
          value (default value is 0)
        </Text>
        <Text component="li">
          <b>Height</b> is the height of the header layout (default value is 30)
        </Text>
      </Text>
    </>
  );
}

const codeTemplate = (props: string) => `
import { Headroom } from '@mantine/core';

function Demo() {
  return (
    <Headroom${props}>
      <Logo />
    </Headroom>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'fixAt',
      type: 'number',
      initialValue: 100,
    },
    {
      name: 'height',
      type: 'number',
      initialValue: 50,
    },
  ],
};
