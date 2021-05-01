import React, { useRef, useEffect, useState } from 'react';
import cx from 'clsx';
import { Scrollbars } from 'react-custom-scrollbars';
import Slugger from 'github-slugger';
import debounce from 'lodash.debounce';
import { Text, Kbd, useMantineTheme } from '@mantine/core';
import { ActivityLogIcon, MixIcon } from '@modulz/radix-icons';
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

function isMac() {
  if ('navigator' in window) {
    return window.navigator.platform.includes('Mac');
  }

  return false;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [isMacOS, setIsMacOS] = useState(true);
  const theme = useMantineTheme();
  const classes = useStyles();
  const slugger = new Slugger();
  const [active, setActive] = useState(0);
  const control = isMacOS ? '⌘' : 'Ctrl';

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
    setIsMacOS(isMac());
    setActive(getActiveElement(slugs.current.map((d) => d.getBoundingClientRect())));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = filteredHeadings.map((heading, index) => {
    const slug = slugger.slug(heading.value);
    return (
      <Text<'a', HTMLAnchorElement>
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
      <Scrollbars style={{ height: '100vh' }} universal>
        <div className={classes.inner}>
          <div>
            <div className={classes.header}>
              <ActivityLogIcon />
              <Text className={classes.title}>Table of contents</Text>
            </div>
            <div className={classes.items}>{items}</div>
          </div>

          <div>
            <div className={classes.header}>
              <MixIcon />
              <Text className={classes.title}>Keyboard shortcuts</Text>
            </div>

            <div className={classes.shortcut}>
              <Kbd>{control}</Kbd> <span>+</span> <Kbd>K</Kbd>
              <Text className={classes.shortcutLabel} size="sm">
                search
              </Text>
            </div>

            <div className={classes.shortcut}>
              <Kbd>{control}</Kbd> <span>+</span> <Kbd>J</Kbd>
              <Text className={classes.shortcutLabel} size="sm">
                toggle color scheme
              </Text>
            </div>
          </div>
        </div>
      </Scrollbars>
    </nav>
  );
}
