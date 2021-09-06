import { ChevronDownIcon, ChevronRightIcon } from '@modulz/radix-icons';
import React, { ReactNode } from 'react';
import { useTreeStyles } from '../styles';
import type { Action, Actions, Icon, Icons, Type } from '../interfaces';

export interface TreeviewLabelEvents {
  handleHighlighted: (id: string) => () => false | void;
  handleSelect: (id: string) => () => void;
  toggleOpen: (id: string) => (evt: React.MouseEvent<SVGElement>) => void;
}

export interface TreeviewLabelBaseProps extends TreeviewLabelEvents {
  icon?: Icon;
  icons?: Icons;
  action?: Action;
  actions?: Actions;
  labelNode?: ReactNode;
  type?: Type;
  selected: string;
  highlighted: string;

  value?: string;
}

export interface TreeviewLabelProps extends TreeviewLabelBaseProps {
  id: string;
  hasItems: boolean;
  open: boolean;
}

export function TreeviewLabel(props: TreeviewLabelProps) {
  const {
    open,
    action,
    actions,
    icon,
    icons,
    labelNode,
    type,
    selected,
    highlighted,
    handleSelect,
    toggleOpen,
    handleHighlighted,
    id,
    hasItems,
    value,
  } = props;
  const classes = useTreeStyles();
  const ActionElement = action || actions?.[type];
  const IconElement = icon || icons?.[type];
  const className = `${classes.item} ${
    selected === id
      ? classes.selected
      : highlighted === id
      ? classes.highlighted
      : ''
  }`;
  return (
    <div key="title" className={className}>
      {hasItems ? (
        open ? (
          <ChevronDownIcon key="chevron" onClick={toggleOpen(id)} />
        ) : (
          <ChevronRightIcon key="chevron" onClick={toggleOpen(id)} />
        )
      ) : (
        <div className="tree-view-no-items" key="blank" />
      )}
      {IconElement ? (
        <IconElement
          key="icon"
          className="tree-view-icon"
          value={value}
          onClick={handleHighlighted(id)}
          onDoubleClick={handleSelect(id)}
        />
      ) : null}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span
        key="title"
        className={classes.title}
        onClick={handleHighlighted(id)}
        onDoubleClick={handleSelect(id)}
      >
        {labelNode}
      </span>
      {ActionElement ? <ActionElement key="action" value={value} /> : null}
    </div>
  );
}
