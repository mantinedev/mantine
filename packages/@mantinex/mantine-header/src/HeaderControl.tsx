import cx from 'clsx';
import { BoxProps, createPolymorphicComponent, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './HeaderControl.module.css';

export interface HeaderControlProps extends BoxProps {
  tooltip: string;
  'aria-label'?: string;
  children: React.ReactNode;
}

function _HeaderControl({
  tooltip,
  className,
  'aria-label': label,
  ...others
}: HeaderControlProps) {
  return (
    <Tooltip label={tooltip}>
      <UnstyledButton
        className={cx(classes.control, className)}
        aria-label={label || tooltip}
        {...others}
      />
    </Tooltip>
  );
}

export const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(
  _HeaderControl
);
