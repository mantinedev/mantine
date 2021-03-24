import React, { useRef, useEffect, useState } from 'react';
import cx from 'clsx';
import { Scrollbars } from 'react-custom-scrollbars';
import Slugger from 'github-slugger';
import debounce from 'lodash.debounce';
import { Text } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import { ActivityLogIcon } from '@modulz/radix-icons';
import { HEADER_HEIGHT } from '../Layout/Header/Header.styles';
import useStyles from './TableOfContents.styles';

interface Heading {
  depth: number;
  value: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

function getActiveElement(rects: DOMRect[]) {
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

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const theme = useMantineTheme();
  const classes = useStyles();
  const slugger = new Slugger();
  const [active, setActive] = useState(0);

  const slugs = useRef<HTMLDivElement[]>([]);
  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  useEffect(() => {
    slugger.reset();
    slugs.current = filteredHeadings.map(
      (heading) => document.getElementById(slugger.slug(heading.value)) as HTMLDivElement
    );
  }, [headings]);

  const handleScroll = debounce(() => {
    setActive(getActiveElement(slugs.current.map((d) => d.getBoundingClientRect())));
  }, 100);

  useEffect(() => {
    setActive(getActiveElement(slugs.current.map((d) => d.getBoundingClientRect())));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = filteredHeadings.map((heading, index) => {
    const slug = slugger.slug(heading.value);
    return (
      <Text<'a'>
        key={slug}
        component="a"
        size="sm"
        className={cx(classes.link, { [classes.linkActive]: active === index })}
        href={`#${slug}`}
        style={{ paddingLeft: (heading.depth - 1) * theme.spacing.lg }}
        onClick={(event) => {
          event.preventDefault();
          const element = document.getElementById(slug);
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT - 10,
            behavior: 'smooth',
          });
        }}
      >
        {heading.value}
      </Text>
    );
  });

  return (
    <nav className={classes.wrapper}>
      <Scrollbars style={{ height: '100vh' }}>
        <div className={classes.inner}>
          <header className={classes.header}>
            <ActivityLogIcon />
            <Text className={classes.title}>Table of contents</Text>
          </header>
          <div className={classes.items}>{items}</div>
        </div>
      </Scrollbars>
    </nav>
  );
}
