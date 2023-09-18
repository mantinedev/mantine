import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Text, ScrollArea, rem, Box } from '@mantine/core';
import { IconList } from '@tabler/icons-react';
import { getHeadings, Heading } from './get-headings';
import classes from './TableOfContents.module.css';

interface TableOfContentsProps {
  withTabs: boolean;
}

function getActiveElement(rects: DOMRect[]) {
  if (rects.length === 0) {
    return -1;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }

      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0].y }
  );

  return closest.index;
}

export function TableOfContents({ withTabs }: TableOfContentsProps) {
  const [active, setActive] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const headingsRef = useRef<Heading[]>([]);
  const router = useRouter();

  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  const handleScroll = () => {
    setActive(
      getActiveElement(headingsRef.current.map((d) => d.getNode().getBoundingClientRect()))
    );
  };

  useEffect(() => {
    const _headings = getHeadings();
    headingsRef.current = _headings;
    setHeadings(_headings);
    setActive(getActiveElement(_headings.map((d) => d.getNode().getBoundingClientRect())));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = filteredHeadings.map((heading, index) => (
    <Text<'a'>
      key={heading.id}
      component="a"
      fz="sm"
      className={classes.link}
      mod={{ active: active === index }}
      href={`#${heading.id}`}
      __vars={{ '--toc-link-offset': `${heading.depth - 1}` }}
      onClick={(event) => {
        event.preventDefault();
        router.replace(`${router.pathname}#${heading.id}`);
      }}
    >
      {heading.content}
    </Text>
  ));

  return (
    <Box component="nav" mod={{ 'with-tabs': withTabs }} className={classes.wrapper}>
      <div className={classes.inner}>
        <div>
          <div className={classes.header}>
            <IconList style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            <Text className={classes.title}>Table of contents</Text>
          </div>
          <ScrollArea.Autosize mah={`calc(100vh - ${rem(140)})`} type="never" offsetScrollbars>
            <div className={classes.items}>{items}</div>
          </ScrollArea.Autosize>
        </div>
      </div>
    </Box>
  );
}
