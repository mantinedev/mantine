import './Treeview.css';
import React, { useRef, useState } from 'react';
import { deviceType } from 'detect-it';
import { TreeviewItem } from './TreeviewItem/TreeviewItem';
import { uuidv4 } from './utils';
import { TreeviewInput } from './TreeviewItem/TreeviewInput';
import type { TreeviewProps } from './interfaces';

export function Treeview(props: TreeviewProps) {
  const {
    labelNode,
    value,
    onSelect,
    onHighlight,
    style,
    className,
    initialSelected,
    items,
    disabled,
  } = props;
  const [id] = useState(value || uuidv4());
  const [selected_, setSelected_] = useState(initialSelected || id);
  const selected = props.selected || selected_;
  const [highlighted, setHighlighted_] = useState(
    props.highlighted || selected,
  );
  const [expanded, setExpanded] = useState(props.expanded || [id]);
  const [open, setOpen] = useState(
    expanded.includes(id) || selected.startsWith(id),
  );
  if (!open && expanded.includes(id)) setOpen(true);
  else if (open && !expanded.includes(id)) setOpen(false);

  const elementRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ulRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const values = useRef<string[]>([id] as string[]);

  const setSelected = (newSelected: string) => {
    setSelected_(newSelected);
    onSelect?.(newSelected);
  };
  const setHighlighted = (newHighlighted: string) => {
    setHighlighted_(newHighlighted);
    if (props.selectOnHighlight) setSelected(newHighlighted);
    onHighlight?.(newHighlighted);
  };

  const toggleOpen = (itemId: string) => (evt: React.MouseEvent<SVGElement>) => {
    evt.stopPropagation();
    if (expanded.includes(itemId)) {
      setExpanded(expanded.filter((i) => i !== itemId));
      setOpen(false);
    } else {
      setOpen(true);
      setExpanded([...expanded, itemId]);
    }
    elementRef.current?.focus();
  };
  const handleSelect = (itemId: string) => () => {
    if (!props.disabled) {
      setSelected(itemId);
      setHighlighted(itemId);
      setExpanded(expanded.filter((i) => i !== itemId));
    }
  };

  const handleHighlighted = (itemId: string) => () =>
    !disabled && setHighlighted(itemId);

  /** Only create keyboard input on non-touch interfaces as to hide keyboard */
  const input =
    deviceType !== 'touchOnly' ? (
      <TreeviewInput {...{
        items,
        values,
        setHighlighted,
        setExpanded,
        setSelected,
        highlighted,
        elementRef,
        expanded,
      }}
      />
    ) : null;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <div onClick={() => elementRef.current?.focus()} role="group">
      <TreeviewItem
        {...props}
        {...{
          selected,
          highlighted,
          elementRef,
          values,
          expanded,
          toggleOpen,
          handleHighlighted,
          style,
          handleSelect,
          ulRef,
          labelNode,
        }}
        key={`${id}`}
        parentId={id}
        parentExpanded={open}
        className={`${className} tree-view-root`}
        root
      />
      { input }
    </div>
  );
}

Treeview.displayName = '@mantine/core/Treeview';
