import { useState } from 'react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './HomePageTabs.module.css';

interface HomePageTabsProps {
  data: { label: React.ReactNode; value: string; content: React.ReactNode }[];
}

export function HomePageTabs({ data }: HomePageTabsProps) {
  const [selected, setSelected] = useState(data[0]);
  const [listRef, setListRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});

  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  const items = data.map((item) => (
    <UnstyledButton
      key={item.value}
      onClick={() => setSelected(item)}
      ref={setControlRef(item.value)}
      className={classes.control}
      mod={{ active: selected.value === item.value }}
    >
      <span className={classes.controlLabel}>{item.label}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.controls} ref={setListRef}>
        {items}
        <FloatingIndicator
          target={controlsRefs[selected.value]}
          parent={listRef}
          className={classes.indicator}
        />
      </div>
      <div className={classes.content}>{selected.content}</div>
    </div>
  );
}
