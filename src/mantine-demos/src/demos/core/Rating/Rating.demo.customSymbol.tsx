import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Rating, useMantineTheme, Group, rem } from '@mantine/core';
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
  IconMoodEmpty,
} from '@tabler/icons-react';

const code = `
import { Rating, useMantineTheme, rem } from '@mantine/core';
import {
  IconMoodEmpty,
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

function Demo() {

  const getEmptyIcon = (value: number) => {
    const defaultProps = { size: rem(24), color: 'gray' };
    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} />;
      case 2:
        return <IconMoodSad {...defaultProps} />;
      case 3:
        return <IconMoodSmile {...defaultProps} />;
      case 4:
        return <IconMoodHappy {...defaultProps} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };

  const getFullIcon = (value: number) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();

    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} color={theme.colors.red[7]} />;
      case 2:
        return <IconMoodSad {...defaultProps} color={theme.colors.orange[7]} />;
      case 3:
        return <IconMoodSmile {...defaultProps} color={theme.colors.yellow[7]} />;
      case 4:
        return <IconMoodHappy {...defaultProps} color={theme.colors.lime[7]} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} color={theme.colors.green[7]} />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };

  return (
    <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />
  );
}
`;

function Demo() {
  const getEmptyIcon = (value: number) => {
    const defaultProps = { size: rem(24), color: 'gray' };

    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} />;
      case 2:
        return <IconMoodSad {...defaultProps} />;
      case 3:
        return <IconMoodSmile {...defaultProps} />;
      case 4:
        return <IconMoodHappy {...defaultProps} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };

  const getFullIcon = (value: number) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();

    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} color={theme.colors.red[7]} />;
      case 2:
        return <IconMoodSad {...defaultProps} color={theme.colors.orange[7]} />;
      case 3:
        return <IconMoodSmile {...defaultProps} color={theme.colors.yellow[7]} />;
      case 4:
        return <IconMoodHappy {...defaultProps} color={theme.colors.lime[7]} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} color={theme.colors.green[7]} />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };
  return (
    <Group position="center">
      <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />
    </Group>
  );
}

export const customSymbol: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
