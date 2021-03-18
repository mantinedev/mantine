import React from 'react';
import Slugger from 'github-slugger';
import { Text } from '@mantine/core';
import { HEADER_HEIGHT } from '../Layout/Header/Header.styles';
import useStyles from './TableOfContents.styles';

interface Heading {
  depth: number;
  value: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const classes = useStyles();
  const slugger = new Slugger();

  const items = headings
    .filter((heading) => heading.depth > 1)
    .map((heading, index) => {
      const slug = slugger.slug(heading.value);
      return (
        <li>
          <Text<'a'>
            component="a"
            size="sm"
            className={classes.link}
            key={index}
            href={`#${slug}`}
            style={{ paddingLeft: (heading.depth - 2) * 15 }}
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
        </li>
      );
    });

  return (
    <nav className={classes.wrapper}>
      <Text>Table of contents</Text>
      <ul className={classes.list}>{items}</ul>
    </nav>
  );
}
