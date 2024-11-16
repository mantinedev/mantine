import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { IconPencil } from '@tabler/icons-react';
import { Box, rem, ScrollArea, Space, Text } from '@mantine/core';
import { getHeadings, Heading } from './get-headings';
import classes from './TableOfContents.module.css';

interface TableOfContentsProps {
  withTabs: boolean;
  editPageLink?: string;
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

export function TableOfContents({ withTabs, editPageLink }: TableOfContentsProps) {
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
    <Text
      key={heading.id}
      component="a"
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
          <Text className={classes.title}>Table of contents</Text>
          <ScrollArea.Autosize mah={`calc(100vh - ${rem(172)})`} type="never">
            <div className={classes.items}>{items}</div>

            {editPageLink && (
              <Text component="a" className={classes.editPage} href={editPageLink} target="_blank">
                <IconPencil className={classes.editPageIcon} size={18} stroke={1.5} />
                <span>Edit this page</span>
              </Text>
            )}
            <Space h="xl" />
          </ScrollArea.Autosize>
        </div>
      </div>
    </Box>
  );
}
