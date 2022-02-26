import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useLocation } from '@reach/router';
import { getDocsData } from '../../get-docs-data';
import useStyles from './NavbarDocsCategory.styles';
import { HEADER_HEIGHT } from '../../Header/Header.styles';

interface NavbarDocsCategoryProps {
  group: ReturnType<typeof getDocsData>[number];
  onLinkClick(): void;
}

export default function NavbarDocsCategory({ group, onLinkClick }: NavbarDocsCategoryProps) {
  const { classes, cx } = useStyles();
  const [collapsed, setCollapsed] = useState(group.group === 'changelog');
  const itemRefs = useRef<{ [slug: string]: HTMLElement }>({});
  const location = useLocation();
  const { height } = useViewportSize();

  // Scrolls the active Navbar item into view if necessary
  useEffect(() => {
    // Current location is in this category
    if (location.pathname in itemRefs.current) {
      // Expand category if needed. Can't scroll into view until expanded
      if (collapsed) {
        setCollapsed(false);
        return;
      }

      const elem = itemRefs.current[location.pathname];
      const { top, bottom } = elem.getBoundingClientRect();

      // Only scroll into view if any part of the existing item is out of view
      if (top < HEADER_HEIGHT || bottom > height) {
        elem.scrollIntoView({
          block: 'center',
        });
      }
    }
  }, [location.pathname, height, collapsed]);

  const uncategorized = (
    group.group === 'changelog' ? [...group.uncategorized].reverse() : group.uncategorized
  ).map((link) => (
    <Link
      key={link.slug}
      className={classes.link}
      activeClassName={classes.linkActive}
      to={link.slug}
      onClick={onLinkClick}
      ref={(r) => {
        itemRefs.current[link.slug] = r;
      }}
    >
      {link.title}
    </Link>
  ));

  const categorized = !Array.isArray(group.groups)
    ? []
    : group.groups.map((part) => {
        if (!part || !Array.isArray(part.pages)) {
          return null;
        }
        const links = part.pages.map((link) => (
          <Link
            key={link.slug}
            className={classes.link}
            activeClassName={classes.linkActive}
            to={link.slug}
            onClick={onLinkClick}
            ref={(r) => {
              itemRefs.current[link.slug] = r;
            }}
          >
            {link.title}
          </Link>
        ));

        return (
          <div className={classes.innerCategory} key={part.category.title}>
            <Text className={classes.innerCategoryTitle}>
              <part.category.icon className={classes.innerCategoryIcon} />
              {part.category.title}
            </Text>
            {links}
          </div>
        );
      });

  return (
    <div className={cx(classes.category, { [classes.categoryCollapsed]: collapsed })}>
      <button className={classes.header} type="button" onClick={() => setCollapsed((c) => !c)}>
        <ChevronDownIcon className={cx(classes.icon, { [classes.iconCollapsed]: collapsed })} />
        <Text className={classes.title} weight={700} size="xs" transform="uppercase">
          {group.group}
        </Text>
      </button>
      {!collapsed && uncategorized}
      {!collapsed && categorized}
    </div>
  );
}
