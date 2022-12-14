import React from 'react';
import { createStyles } from './tss/create-styles';
import { MantineProvider } from './theme';

export default { title: 'createStyles' };

const useStyles = createStyles(
  (theme) => ({
    body: {
      padding: theme.spacing.xl,
    },

    title: {
      fontWeight: 700,
    },
  }),
  (theme, { color }: { color: string }) => ({
    variants: (variant: 'filled' | 'light') => {
      if (variant === 'filled' || variant === 'light') {
        const colors = theme.fn.variant({ variant, color });
        return {
          body: { backgroundColor: colors.background },
          title: { color: colors.color },
        };
      }
      return null;
    },

    sizes: (size) => ({
      title: {
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      },
    }),
  })
);

function VariantComponent({
  color,
  size,
  variant,
  styles,
}: {
  color: string;
  size: string | number;
  variant: string;
  styles?: any;
}) {
  const { classes } = useStyles({ color }, { name: 'test', variant, size, styles });
  return (
    <div style={{ padding: 40 }}>
      <div className={classes.body}>
        Body
        <div className={classes.title}>Title</div>
      </div>
    </div>
  );
}

export function Variants() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          test: {
            variants: (theme, variant) => {
              if (variant === 'provider') {
                return {
                  body: {
                    backgroundColor: theme.colors.pink[9],
                    color: theme.white,
                  },
                };
              }

              if (variant === 'filled') {
                return {
                  body: {
                    backgroundColor: theme.colors.green[9],
                    color: theme.colors.green[5],
                  },

                  title: {
                    color: theme.black,
                  },
                };
              }

              return null;
            },

            sizes: (theme, size) => {
              if (size === 'provider-size') {
                return {
                  body: {
                    padding: 100,
                    fontSize: theme.fontSizes.xs - 5,
                  },
                };
              }

              return null;
            },
          },
        },
      }}
    >
      <VariantComponent color="red" variant="filled" size="xs" />
      <VariantComponent color="red" variant="provider" size="provider-size" />
      <VariantComponent
        color="red"
        variant="provider"
        size="xl"
        styles={{
          body: { backgroundColor: 'green', color: 'black' },
        }}
      />
      <VariantComponent color="blue" variant="light" size="xl" />
      <VariantComponent color="blue" variant="light" size={100} />
    </MantineProvider>
  );
}
