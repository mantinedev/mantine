import React from 'react';
import { DefaultProps, mergeStyles, ClassNames } from '@mantine/core';
import type { RichTextEditorLabels } from '../RichTextEditor/default-labels';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';
import { CONTROLS, ToolbarControl } from './controls';
import useStyles from './Toolbar.styles';

export type ToolbarStylesNames = ClassNames<typeof useStyles>;

export interface ToolbarProps extends DefaultProps<ToolbarStylesNames> {
  /** Toolbar controls divided into groups */
  controls: ToolbarControl[][];

  /** Labels used for all toolbar controls */
  labels: RichTextEditorLabels;

  /** Make toolbar sticky */
  sticky?: boolean;

  /** Top toolbar position in any valid css value */
  stickyOffset?: number | string;

  /** Id that is used to connect toolbar to editor */
  id?: string;
}

export function Toolbar({
  controls,
  labels,
  stickyOffset = 0,
  sticky = true,
  className,
  style,
  classNames,
  styles,
  id,
  ...others
}: ToolbarProps) {
  const { classes, cx } = useStyles({ sticky, stickyOffset }, classNames, 'rte');
  const _styles = mergeStyles(classes, styles);

  const groups = controls.map((group, index) => {
    const items = group
      .filter((item) => CONTROLS[item])
      .map((item) => {
        const Icon = CONTROLS[item].icon;

        return (
          <ToolbarButton
            className={classes.toolbarControl}
            style={_styles.toolbarControl}
            controls={CONTROLS[item].controls}
            value={(CONTROLS[item] as any).value}
            key={item}
            title={labels[item]}
            noActive={(CONTROLS[item] as any).noActive}
          >
            <Icon style={{ width: 18, height: 18 }} />
          </ToolbarButton>
        );
      });

    return (
      <div className={classes.toolbarGroup} style={_styles.toolbarGroup} key={index}>
        {items}
      </div>
    );
  });

  return (
    <div
      id={id}
      className={cx(classes.toolbar, className)}
      style={{ ...style, ..._styles.toolbar }}
      {...others}
    >
      <div className={classes.toolbarInner} style={_styles.toolbarInner}>
        {groups}
      </div>
    </div>
  );
}

Toolbar.displayName = '@mantine/rte/Toolbar';
