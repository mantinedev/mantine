import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import cx from 'clsx';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Text } from '@mantine/core';
import { useLocation } from '@reach/router';
import { getDocsData } from '../../get-docs-data';
import useStyles from './NavbarDocsCategory.styles';

interface NavbarDocsCategoryProps {
  group: ReturnType<typeof getDocsData>[number];
  onLinkClick(): void;
}

export default function NavbarDocsCategory({ group, onLinkClick }: NavbarDocsCategoryProps) {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const activeCoreItemRef = useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    if (activeCoreItemRef.current) {
      activeCoreItemRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center',
      });
    }
  }, [activeCoreItemRef.current]);
  const uncategorized = group.uncategorized.map((link) => (
    <Link
      key={link.slug}
      className={classes.link}
      activeClassName={classes.linkActive}
      to={link.slug}
      onClick={onLinkClick}
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
            ref={location.pathname === link.slug ? activeCoreItemRef : null}
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
