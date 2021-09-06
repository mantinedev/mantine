import React, { CSSProperties, useState } from 'react';
import { TreeviewLabel } from './TreeviewLabel';
import { uuidv4 } from '../utils';
import type { TreeviewLabelBaseProps } from './TreeviewLabel';
import type { ITreeviewItems, Type } from '../interfaces';

export interface TreeviewItemProps extends TreeviewLabelBaseProps {
  value?: string;
  type?: Type;
  disabled?: boolean;
  parentId: string;
  items: ITreeviewItems;
  style?: CSSProperties;
  className?: string;
  root?: boolean;
  selected: string;
  highlighted: string;
  parentExpanded: boolean;
  values: React.MutableRefObject<string[]>;
  expanded: string[];
  ulRef?: React.MutableRefObject<HTMLUListElement>;
}

export function TreeviewItem(props: TreeviewItemProps) {
  const {
    labelNode,
    type,
    actions,
    action,
    icon,
    icons,
    value,
    parentId,
    parentExpanded,
    selected,
    highlighted,
    expanded,
    values,
    toggleOpen,
    handleSelect,
    handleHighlighted,
    style,
    className,
    ulRef,
    root,
  } = props;
  const [id] = useState(
    value || `${parentId ? `${parentId}/${uuidv4()}` : ''}`,
  );

  const [open, setOpen] = useState(
    expanded.includes(id) || selected.startsWith(id) || !props.items.length,
  );
  if (!open && expanded.includes(id)) setOpen(true);
  else if (open && !expanded.includes(id)) setOpen(false);

  const idInValues = values.current.includes(id);
  const parentIdInValues = values.current.includes(`${parentId}`);

  if (!open && root) values.current = [id];
  else if (!idInValues && parentIdInValues && parentExpanded) {
    values.current.push(id);
  } else if (idInValues && !parentExpanded) {
    values.current = values.current.filter((i) => i !== id);
  }

  const items = props.items.map((item, index) => (
    <TreeviewItem
      {...props}
      {...item}
      key={`${id}-${index}`}
      parentId={id}
      parentExpanded={open}
      root={false}
    />
  ));

  return (
    <ul
      ref={ulRef}
      key="treeview"
      className={`tree-view-root tree-view-no-select ${className}`}
      style={style}
    >
      <li className={props.root ? 'tree-view-root' : 'tree-view-item'}>
        <TreeviewLabel
          {...{
            value,
            type,
            id,
            selected,
            highlighted,
            open,
            handleHighlighted,
            handleSelect,
            toggleOpen,
            labelNode,
            icon,
            icons,
            action,
            actions,
          }}
          hasItems={props.items && !!props.items.length}
        />
        <ul
          key="items"
          className={`${
            open ? 'caret-down' : 'tree-view-hidden'
          } tree-view-sub`}
        >
          {items}
        </ul>
      </li>
    </ul>
  );
}
