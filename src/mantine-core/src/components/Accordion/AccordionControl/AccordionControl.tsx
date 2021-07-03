import React, { useState } from 'react';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import { UnstyledButton } from '../../Button/UnstyledButton/UnstyledButton';
import { AccordionItemProps } from '../AccordionItem/AccordionItem';
import useStyles from './AccordionControl.styles';

export type AccordionControlStylesNames = keyof ReturnType<typeof useStyles>;

interface AccordionControlProps
  extends DefaultProps<AccordionControlStylesNames>,
    AccordionItemProps {
  opened: boolean;
  onToggle(): void;
}

export function AccordionControl({
  opened,
  onToggle,
  label,
  children,
  classNames,
  styles,
  themeOverride,
  ...others
}: AccordionControlProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'accordion');
  const _styles = mergeStyles(classes, styles);
  const [rect, setRect] = useState<HTMLDivElement>(null);

  return (
    <div {...others}>
      <UnstyledButton className={classes.control} onClick={onToggle}>
        <div className={classes.label}>{label}</div>
        <div className={classes.icon}>^</div>
      </UnstyledButton>
      <div
        className={classes.content}
        style={{
          ..._styles.content,
          height: opened ? (!rect ? 'auto' : rect.getBoundingClientRect().height) : 0,
        }}
      >
        <div
          className={classes.contentInner}
          style={_styles.contentInner}
          ref={(node) => setRect(node)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

AccordionControl.displayName = '@mantine/core/AccordionControl';
