import { createStyles, MantineColor } from '@mantine/styles';

interface StepStyles {
  color: MantineColor;
  iconSize: number;
}

export default createStyles((theme, { color, iconSize }: StepStyles, getRef) => {
  const stepIcon = getRef('stepIcon');

  return {
    step: {
      display: 'flex',
      alignItems: 'center',
    },

    stepIcon: {
      ref: stepIcon,
      height: iconSize,
      width: iconSize,
      borderRadius: iconSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${theme.colors.gray[2]}`,
    },

    stepProgress: {
      [`& .${stepIcon}`]: {
        color: theme.fn.themeColor(color, 6),
        borderColor: theme.fn.themeColor(color, 6),
      },
    },

    stepCompleted: {
      [`& .${stepIcon}`]: {
        backgroundColor: theme.fn.themeColor(color, 6),
        borderColor: theme.fn.themeColor(color, 6),
        color: theme.white,
      },
    },

    stepLabel: {
      marginLeft: theme.spacing.sm,
    },
  };
});
