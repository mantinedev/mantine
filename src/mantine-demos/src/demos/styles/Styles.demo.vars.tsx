import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, rem, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const inlineCode = `
import { Button, rem, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': rem(60),
        '--button-padding-x': rem(30),
        '--button-fz': rem(24),
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': rem(24),
        '--button-padding-x': rem(10),
        '--button-fz': rem(10),
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`;

const providerCode = `
import { Button, rem, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': rem(60),
              '--button-padding-x': rem(30),
              '--button-fz': rem(24),
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': rem(24),
              '--button-padding-x': rem(10),
              '--button-fz': rem(10),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`;

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': rem(60),
        '--button-padding-x': rem(30),
        '--button-fz': rem(24),
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': rem(24),
        '--button-padding-x': rem(10),
        '--button-fz': rem(10),
      },
    };
  }

  return { root: {} };
};

Button.extend({
  vars: (theme, props) => {
    if (props.size === 'xxl') {
      return {
        root: {
          '--button-height': rem(60),
          '--button-padding-x': rem(30),
          '--button-fz': rem(24),
        },
      };
    }

    if (props.size === 'xxs') {
      return {
        root: {
          '--button-height': rem(24),
          '--button-padding-x': rem(10),
          '--button-fz': rem(10),
        },
      };
    }

    return { root: {} };
  },
});

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}

export const vars: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { code: providerCode, language: 'tsx', fileName: 'MantineProvider.tsx' },
    { code: inlineCode, language: 'tsx', fileName: 'Inline.tsx' },
  ],
};
