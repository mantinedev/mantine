import { createStyles, MantineColor } from '@mantine/styles';

interface StepStyles {
  color: MantineColor;
  iconSize: number;
}

export default createStyles((theme, { color, iconSize }: StepStyles, getRef) => {
  const stepIcon = getRef('stepIcon');
  const stepCompletedIcon = getRef('stepCompletedIcon');

  return {
    step: {
      display: 'flex',
      alignItems: 'center',
    },

    stepIcon: {
      boxSizing: 'border-box',
      ref: stepIcon,
      height: iconSize,
      width: iconSize,
      borderRadius: iconSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.gray[1],
      border: `2px solid ${theme.colors.gray[1]}`,
      transition: 'background-color 150ms ease, border-color 150ms ease',
      position: 'relative',
    },

    stepCompletedIcon: {
      ref: stepCompletedIcon,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.white,
    },

    stepProgress: {
      [`& .${stepIcon}`]: {
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
