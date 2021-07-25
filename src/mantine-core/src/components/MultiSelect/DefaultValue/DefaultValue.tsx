import React from 'react';
import cx from 'clsx';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import useStyles from './DefaultValue.styles';

export type DefaultValueStylesNames = keyof ReturnType<typeof useStyles>;

interface DefaultValueProps
  extends DefaultProps<DefaultValueStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  label: string;
  onRemove(): void;
}

export function DefaultValue({
  label,
  classNames,
  styles,
  className,
  style,
  onRemove,
  ...others
}: DefaultValueProps) {
  const theme = useMantineTheme();
  const classes = useStyles({ theme }, classNames, 'multi-select');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(classes.defaultLabel, className)}
      style={{ ...style, ..._styles.defaultLabel }}
      {...others}
    >
      <div>{label}</div>
      <CloseButton
        onClick={onRemove}
        size={22}
        radius={2}
        color="blue"
        variant="transparent"
        iconSize={12}
        className={classes.defaultLabelRemove}
      />
    </div>
  );
}

DefaultValue.displayName = '@mantine/core/MultiSelect/DefaultValue';
