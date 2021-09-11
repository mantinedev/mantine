import React from 'react';
import { DefaultProps, useMantineTheme } from '@mantine/core';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';
import { CONTROLS, ToolbarControl } from './controls';
import useStyles from './Toolbar.styles';

// <NativeSelect
//   onChange={(event) => event.persist()}
//   classNames={{ input: 'ql-header' }}
//   data={[
//     { label: 'Text', value: '' },
//     { label: 'Heading 1', value: '1' },
//     { label: 'Heading 2', value: '2' },
//     { label: 'Heading 3', value: '3' },
//   ]}
//   />

interface ToolbarProps extends DefaultProps {
  /** Toolbar controls divided into groups */
  controls: ToolbarControl[][];
}

export function Toolbar({ themeOverride, controls }: ToolbarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, null, 'rte');

  const groups = controls.map((group, index) => {
    const items = group
      .filter((item) => CONTROLS[item])
      .map((item) => {
        const Icon = CONTROLS[item].icon;

        return (
          <ToolbarButton
            className={classes.toolbarControl}
            themeOverride={themeOverride}
            controls={CONTROLS[item].controls}
            value={(CONTROLS[item] as any).value}
            key={item}
          >
            <Icon style={{ width: 18, height: 18 }} />
          </ToolbarButton>
        );
      });

    return (
      <div className={classes.toolbarGroup} key={index}>
        {items}
      </div>
    );
  });

  return (
    <div id="toolbar" className={classes.toolbar}>
      {groups}
    </div>
  );
}
