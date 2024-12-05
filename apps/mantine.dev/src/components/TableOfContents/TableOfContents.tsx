import { useRouter } from 'next/router';
import { IconList } from '@tabler/icons-react';
import { Box, rem, ScrollArea, Text } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';
import classes from './TableOfContents.module.css';

interface TableOfContentsProps {
  withTabs: boolean;
}

export function TableOfContents({ withTabs }: TableOfContentsProps) {
  const router = useRouter();
  const spy = useScrollSpy({
    selector: '#mdx [data-heading]',
    getDepth: (element) => Number(element.getAttribute('data-order')),
    getValue: (element) => element.getAttribute('data-heading') || '',
  });

  const filteredHeadings = spy.data.filter((heading) => heading.depth > 1);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = filteredHeadings.map((heading, index) => (
    <Text<'a'>
      key={heading.id}
      component="a"
      fz="sm"
      className={classes.link}
      mod={{ active: spy.active === index }}
      href={`#${heading.id}`}
      __vars={{ '--toc-link-offset': `${heading.depth - 1}` }}
      onClick={(event) => {
        event.preventDefault();
        router.replace(`${router.pathname}#${heading.id}`);
      }}
    >
      {heading.value}
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
