import React from 'react';
import type { TreeviewProps } from '../interfaces';

export interface TreeviewInputProps {
  elementRef: React.MutableRefObject<HTMLInputElement>;
  values: React.MutableRefObject<string[]>;
  highlighted: string;
  setHighlighted: React.Dispatch<React.SetStateAction<string>>
  items: TreeviewProps[];
  expanded: string[];
  setExpanded: React.Dispatch<React.SetStateAction<string[]>>
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export function TreeviewInput(props: TreeviewInputProps) {
  const {
    elementRef,
    values,
    highlighted,
    setHighlighted,
    items,
    expanded,
    setExpanded,
    setSelected,
  } = props;
  return <input
    ref={elementRef}
    className="tree-view-hidden-input"
    onKeyDown={(evt) => {
      if (evt.key === 'ArrowDown') {
        const next =
          values.current[values.current.indexOf(highlighted) + 1];
        if (next) setHighlighted(next);
      } else if (evt.key === 'ArrowUp') {
        const next =
          values.current[values.current.indexOf(highlighted) - 1];
        if (next) setHighlighted(next);
      } else if (evt.key === 'ArrowRight') {
        if (items.length > 0) {
          if (!expanded.includes(highlighted)) {
            setExpanded([...expanded, highlighted]);
          } else {
            const next =
              values.current[values.current.indexOf(highlighted) + 1];
            if (next) setHighlighted(next);
          }
        }
      } else if (evt.key === 'ArrowLeft' && props.items?.length) {
        if (expanded.includes(highlighted)) {
          setExpanded(expanded.filter((i) => i !== highlighted));
        } else {
          const next =
            values.current[values.current.indexOf(highlighted) - 1];
          if (next) setHighlighted(next);
        }
      } else if (evt.key === 'Enter') {
        setSelected(highlighted);
      }
    }}
  />;
}
