import React from 'react';
import { createStyles } from './tss/create-styles';

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
      const colors = theme.fn.variant({ variant, color });
      return {
        body: { backgroundColor: colors.background },
        title: { color: colors.color },
      };
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
}: {
  color: string;
  size: string | number;
  variant: string;
}) {
  const { classes } = useStyles({ color }, { name: 'test', variant, size });
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
    <>
      <VariantComponent color="red" variant="filled" size="xs" />
      <VariantComponent color="blue" variant="light" size="xl" />
      <VariantComponent color="blue" variant="light" size={100} />
    </>
  );
}
